"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";

export default function Home() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") ?? "All";

  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((p) => p.category)));
    return ["All", ...unique];
  }, []);

  const [selectedCategory, setSelectedCategory] = useState(
    categories.includes(categoryParam) ? categoryParam : "All"
  );

  // Sync with URL param changes
  useEffect(() => {
    const next = categories.includes(categoryParam) ? categoryParam : "All";
    setSelectedCategory(next);
  }, [categoryParam, categories]);

  const filtered = useMemo(() => {
    if (selectedCategory === "All") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Shop All Products
        </h1>
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-12">
          No products found in this category.
        </p>
      )}
    </div>
  );
}
