export default function SkeletonFeaturedSection() {
  return (
    <div className="flex items-start flex-1">
      {/* Banner skeleton */}
      <div className="w-[535px] h-full">
        <div className="w-full rounded-[15px] h-[361px] bg-gray-700 animate-pulse relative overflow-hidden">
          <div className="flex-1 mr-[34px] ml-[30px] z-10 pt-[60px]">
            <div className="h-[40px] bg-gray-600 rounded mb-[20px] w-[200px] animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-[16px] bg-gray-600 rounded w-full animate-pulse"></div>
              <div className="h-[16px] bg-gray-600 rounded w-[80%] animate-pulse"></div>
              <div className="h-[16px] bg-gray-600 rounded w-[90%] animate-pulse"></div>
            </div>
          </div>
          <div className="absolute right-[20px] bottom-0 w-[200px] h-[280px] bg-gray-600 animate-pulse rounded"></div>
        </div>
      </div>

      {/* Song list skeleton */}
      <div className="ml-[20px] flex-1">
        {/* Title skeleton */}
        <div className="mb-[20px]">
          <div className="h-[24px] bg-gray-700 rounded w-[150px] animate-pulse"></div>
        </div>

        {/* Song items skeleton */}
        <div className="grid grid-cols-1 gap-[10px]">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex items-center p-[10px] bg-gray-800 rounded-[10px] animate-pulse"
            >
              {/* Image skeleton */}
              <div className="w-[50px] h-[50px] bg-gray-700 rounded-[8px] mr-[15px] animate-pulse"></div>

              {/* Content skeleton */}
              <div className="flex-1">
                <div className="h-[16px] bg-gray-700 rounded mb-[8px] w-[70%] animate-pulse"></div>
                <div className="h-[14px] bg-gray-600 rounded w-[50%] animate-pulse"></div>
              </div>

              {/* Play button skeleton */}
              <div className="w-[30px] h-[30px] bg-gray-700 rounded-full animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
