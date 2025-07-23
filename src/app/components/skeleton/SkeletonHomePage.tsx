import SkeletonBanner from "./SkeletonBanner";
import SkeletonSongList from "./SkeletonSongList";

export default function SkeletonHomePage() {
  return (
    <div className="flex items-start flex-1 space-x-5">
      <SkeletonBanner />
      <div className="flex-1">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-300 rounded w-32 mb-4"></div>
          <SkeletonSongList count={3} />
        </div>
      </div>
    </div>
  );
}
