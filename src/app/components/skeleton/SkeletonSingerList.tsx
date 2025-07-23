export default function SkeletonSingerList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="animate-pulse bg-white rounded-lg p-6">
          <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <div className="text-center space-y-2">
            <div className="h-5 bg-gray-300 rounded w-3/4 mx-auto"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2 mx-auto"></div>
            <div className="h-3 bg-gray-300 rounded w-2/3 mx-auto"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
