import PlayAudio from "./PlayAudio";
import PlayActions from "./PlayActions";
import PlayInfo from "./PlayInfo";
import PlayTime from "./PlayTime";
import PlayVolume from "./PlayVolume";

export default function Play() {
  return (
    <>
      <div className="fixed bottom-0 bg-[#212121] border-t border-[#494949] w-full left-0  py-[20px] z-[999] play-audio  hidden">
        {/* Play audio */}
        <PlayAudio />
        <div className="container mx-auto flex justify-between">
          {/* Play info */}
          <PlayInfo />
          <div className="flex-1 mx-[67px]">
            {/* Play actions */}
            <PlayActions />
            {/* Play time */}
            <PlayTime />
          </div>
          {/* Play volume */}
          <PlayVolume />
        </div>
      </div>
    </>
  );
}
