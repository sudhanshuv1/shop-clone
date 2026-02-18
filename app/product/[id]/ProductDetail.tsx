"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Product } from "@/lib/types";
import { useApp } from "@/context/AppContext";
import { useAuth } from "@/context/AuthContext";
import Toast from "@/components/Toast";

export default function ProductDetail({ product }: { product: Product }) {
  const { addToCart, placeOrder } = useApp();
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [toastVisible, setToastVisible] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = useCallback(() => {
    if (!isAuthenticated) {
      router.push("/signin");
      return;
    }
    addToCart(product, quantity);
    setToastVisible(true);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }, [addToCart, product, quantity, isAuthenticated, router]);

  const handleBuyNow = useCallback(() => {
    if (!isAuthenticated) {
      router.push("/signin");
      return;
    }
    const items = [{ product, quantity }];
    const total = product.price * quantity;
    placeOrder(items, total);
    router.push("/orders");
  }, [product, quantity, placeOrder, router, isAuthenticated]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6">
        <ol className="flex items-center gap-2 text-gray-500">
          <li>
            <Link href="/" className="hover:text-gray-900 hover:underline">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href={`/?category=${product.category}`} className="hover:text-gray-900 hover:underline">
              {product.category}
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-900 truncate max-w-[200px]">
            {product.title}
          </li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left — Product image */}
        <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Right — Product info */}
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            {product.title}
          </h1>

          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-3xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <span className="inline-block w-2.5 h-2.5 bg-green-500 rounded-full" />
            <span className="text-sm font-medium text-green-700">In Stock</span>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            {product.description}
          </p>

          <hr className="mb-6" />

          {/* Quantity selector */}
          <div className="flex items-center gap-4 mb-6">
            <label className="text-sm font-medium text-gray-700">Qty:</label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                aria-label="Decrease quantity"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <span className="px-5 py-2 text-center font-medium text-gray-900 min-w-[3rem] border-x border-gray-300">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                aria-label="Increase quantity"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleAddToCart}
              disabled={added}
              className={`w-full font-semibold py-3 px-6 rounded-lg transition-colors text-base ${
                added
                  ? "bg-green-500 text-white cursor-default"
                  : "bg-yellow-400 hover:bg-yellow-500 text-gray-900"
              }`}
            >
              {added ? "Added \u2713" : "Add to Cart"}
            </button>
            <button
              onClick={handleBuyNow}
              className="w-full bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-semibold py-3 px-6 rounded-lg transition-all text-base"
            >
              Buy Now
            </button>
          </div>

          {/* Extra info */}
          <div className="mt-8 space-y-3 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>30-day return policy</span>
            </div>
          </div>
        </div>
      </div>

      <Toast
        message={`Added ${quantity} ${quantity > 1 ? "items" : "item"} to cart`}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
}
