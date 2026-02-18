import type { Metadata } from "next";
import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import ProductDetail from "./ProductDetail";

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const product = products.find((p) => p.id === Number(params.id));
  if (!product) return { title: "Product Not Found" };
  return { title: product.title };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
