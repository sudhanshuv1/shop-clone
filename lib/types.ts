export interface User {
  id: string;
  name: string;
  dob: string;
  email: string;
  password: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  date: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
}

export interface Review {
  id: string;
  productId: number;
  userName: string;
  rating: number;
  title: string;
  body: string;
  date: string;
}
