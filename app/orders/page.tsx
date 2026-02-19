"use client";

import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import Toast from "@/components/Toast";
import RequireAuth from "@/components/RequireAuth";
import { useState, useCallback } from "react";
import { Product } from "@/lib/types";

const STATUS_STYLES: Record<string, string> = {
  delivered: "bg-green-100 text-green-700",
  shipped: "bg-blue-100 text-blue-700",
  processing: "bg-yellow-100 text-yellow-700",
  pending: "bg-gray-100 text-gray-700",
  cancelled: "bg-red-100 text-red-700",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function OrdersPage() {
  return (
    <RequireAuth>
      <OrdersContent />
    </RequireAuth>
  );
}

function OrdersContent() {
  const { orders, addToCart } = useApp();
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleBuyAgain = useCallback(
    (product: Product) => {
      addToCart(product, 1);
      setToastMessage(`${product.title} added to cart`);
      setToastVisible(true);
    },
    [addToCart]
  );

  if (orders.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <svg
          className="mx-auto h-16 w-16 text-gray-300 mb-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          No orders yet
        </h1>
        <p className="text-gray-500 mb-8">
          Once you place an order, it will appear here.
        </p>
        <Link
          href="/"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-6 py-3 rounded-lg transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Your Orders</h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            {/* Order header */}
            <Link
              href={`/orders/${order.id}`}
              className="block bg-gray-50 px-5 py-4 hover:bg-gray-100 transition-colors"
            >
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                <div>
                  <span className="text-gray-500">Order </span>
                  <span className="font-mono font-medium text-gray-900">
                    {order.id}
                  </span>
                </div>
                <div className="text-gray-500">{formatDate(order.date)}</div>
                <div>
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${
                      STATUS_STYLES[order.status] ?? STATUS_STYLES.pending
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
                <div className="sm:ml-auto flex items-center gap-2">
                  <span className="font-semibold text-gray-900">
                    Total: ${order.total.toFixed(2)}
                  </span>
                  <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Order items */}
            <ul className="divide-y divide-gray-100">
              {order.items.map(({ product, quantity }) => (
                <li
                  key={product.id}
                  className="px-5 py-4 flex items-center gap-4"
                >
                  <Link
                    href={`/product/${product.id}`}
                    className="relative w-16 h-16 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden"
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </Link>

                  <div className="min-w-0 flex-1">
                    <Link
                      href={`/product/${product.id}`}
                      className="text-sm font-medium text-gray-900 hover:text-blue-600 hover:underline line-clamp-1"
                    >
                      {product.title}
                    </Link>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Qty: {quantity} &middot; $
                      {(product.price * quantity).toFixed(2)}
                    </p>
                  </div>

                  <button
                    onClick={() => handleBuyAgain(product)}
                    className="flex-shrink-0 text-sm font-medium text-yellow-700 border border-yellow-400 hover:bg-yellow-50 px-3 py-1.5 rounded-md transition-colors"
                  >
                    Buy Again
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
}
