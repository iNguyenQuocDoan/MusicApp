export default function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 rounded-lg h-48 w-full mb-4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
}
