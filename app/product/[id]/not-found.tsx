import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
        Product Not Found
      </h2>
      <p className="text-gray-500 mb-8">
        Sorry, we couldn&apos;t find the product you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-6 py-3 rounded-lg transition-colors"
      >
        Back to Shop
      </Link>
    </div>
  );
}
