export default function ProductCardSkeleton() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col animate-pulse">
      <div className="w-full aspect-square bg-gray-200" />
      <div className="p-4 flex flex-col flex-1">
        <div className="h-3 bg-gray-200 rounded w-16 mb-2" />
        <div className="h-4 bg-gray-200 rounded w-full mb-1" />
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-3" />
        <div className="h-5 bg-gray-200 rounded w-20 mt-auto" />
      </div>
      <div className="px-4 pb-4">
        <div className="h-9 bg-gray-200 rounded-lg w-full" />
      </div>
    </div>
  );
}
