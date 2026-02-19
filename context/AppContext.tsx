"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  ReactNode,
} from "react";
import { Product, CartItem, Order, Review } from "@/lib/types";
import { useAuth } from "@/context/AuthContext";

interface AppContextType {
  // Cart
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;

  // Orders
  orders: Order[];
  placeOrder: (items: CartItem[], total: number) => string;

  // Wishlist
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;

  // Reviews
  reviews: Review[];
  addReview: (review: Omit<Review, "id" | "date">) => void;
  getProductReviews: (productId: number) => Review[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

function loadFromStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const userId = user?.id ?? "guest";

  const [items, setItems] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [activeUserId, setActiveUserId] = useState<string | null>(null);

  // (Re-)hydrate whenever the user changes
  useEffect(() => {
    setItems(loadFromStorage<CartItem[]>(`shopclone-cart-${userId}`, []));
    setOrders(loadFromStorage<Order[]>(`shopclone-orders-${userId}`, []));
    setWishlist(loadFromStorage<Product[]>(`shopclone-wishlist-${userId}`, []));
    setReviews(loadFromStorage<Review[]>("shopclone-reviews", []));
    setActiveUserId(userId);
  }, [userId]);

  // Persist cart — only when actively loaded for this user
  useEffect(() => {
    if (activeUserId !== null && activeUserId === userId) {
      localStorage.setItem(`shopclone-cart-${userId}`, JSON.stringify(items));
    }
  }, [items, userId, activeUserId]);

  // Persist orders — only when actively loaded for this user
  useEffect(() => {
    if (activeUserId !== null && activeUserId === userId) {
      localStorage.setItem(`shopclone-orders-${userId}`, JSON.stringify(orders));
    }
  }, [orders, userId, activeUserId]);

  // Persist wishlist
  useEffect(() => {
    if (activeUserId !== null && activeUserId === userId) {
      localStorage.setItem(`shopclone-wishlist-${userId}`, JSON.stringify(wishlist));
    }
  }, [wishlist, userId, activeUserId]);

  // Persist reviews (shared across all users)
  useEffect(() => {
    if (activeUserId !== null) {
      localStorage.setItem("shopclone-reviews", JSON.stringify(reviews));
    }
  }, [reviews, activeUserId]);

  const addToCart = useCallback((product: Product, quantity: number = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((item) => item.product.id !== productId));
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const cartTotal = useMemo(
    () => items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [items]
  );

  const cartCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const placeOrder = useCallback((orderItems: CartItem[], total: number): string => {
    const order: Order = {
      id: `ORD-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
      items: orderItems,
      total,
      date: new Date().toISOString(),
      status: "delivered",
    };
    setOrders((prev) => [order, ...prev]);
    return order.id;
  }, []);

  // Wishlist
  const addToWishlist = useCallback((product: Product) => {
    setWishlist((prev) => {
      if (prev.some((p) => p.id === product.id)) return prev;
      return [...prev, product];
    });
  }, []);

  const removeFromWishlist = useCallback((productId: number) => {
    setWishlist((prev) => prev.filter((p) => p.id !== productId));
  }, []);

  const isInWishlist = useCallback(
    (productId: number) => wishlist.some((p) => p.id === productId),
    [wishlist]
  );

  // Reviews
  const addReview = useCallback((review: Omit<Review, "id" | "date">) => {
    const newReview: Review = {
      ...review,
      id: `REV-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
      date: new Date().toISOString(),
    };
    setReviews((prev) => [newReview, ...prev]);
  }, []);

  const getProductReviews = useCallback(
    (productId: number) => reviews.filter((r) => r.productId === productId),
    [reviews]
  );

  const value = useMemo(
    () => ({
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartTotal,
      cartCount,
      orders,
      placeOrder,
      wishlist,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      reviews,
      addReview,
      getProductReviews,
    }),
    [items, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount, orders, placeOrder, wishlist, addToWishlist, removeFromWishlist, isInWishlist, reviews, addReview, getProductReviews]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
