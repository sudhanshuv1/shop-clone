"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Product } from "@/lib/types";
import { useApp } from "@/context/AppContext";
import { useAuth } from "@/context/AuthContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useApp();
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [added, setAdded] = useState(false);

  const handleAdd = useCallback(() => {
    if (!isAuthenticated) {
      router.push("/signin");
      return;
    }
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }, [addToCart, product, isAuthenticated, router]);

  return (
    <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
      <Link href={`/product/${product.id}`} className="flex flex-col flex-1">
        <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4 flex flex-col flex-1">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            {product.category}
          </p>
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2">
            {product.title}
          </h3>
          <p className="text-lg font-bold text-gray-900 mt-auto">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <button
          onClick={handleAdd}
          disabled={added}
          className={`w-full text-sm font-medium py-2 px-4 rounded-lg transition-colors ${
            added
              ? "bg-green-500 text-white cursor-default"
              : "bg-yellow-400 hover:bg-yellow-500 text-gray-900"
          }`}
        >
          {added ? "Added \u2713" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
