export default function SkeletonBanner() {
  return (
    <div className="w-[535px] h-full">
      <div className="animate-pulse w-full bg-gray-300 rounded-[15px] h-[361px] flex items-center">
        <div className="flex-1 mr-[34px] ml-[30px] space-y-4">
          <div className="h-8 bg-gray-400 rounded w-1/2"></div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-400 rounded w-full"></div>
            <div className="h-3 bg-gray-400 rounded w-3/4"></div>
            <div className="h-3 bg-gray-400 rounded w-1/2"></div>
          </div>
        </div>
        <div className="w-[200px] h-[280px] bg-gray-400 rounded mr-[20px]"></div>
      </div>
    </div>
  );
}
