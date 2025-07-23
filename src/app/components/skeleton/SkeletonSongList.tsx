export default function SkeletonSongList({ count = 5 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse flex items-center space-x-4 p-4 bg-white rounded-lg"
        >
          <div className="w-12 h-12 bg-gray-300 rounded"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          </div>
          <div className="w-20 h-8 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  );
}
