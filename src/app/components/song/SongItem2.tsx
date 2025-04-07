import { FaPlay } from "react-icons/fa";

import { MdFavorite } from "react-icons/md";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SongItem2(props: any) {
  const { image, title, singer, time } = props;
  return (
    <>
      <div className="flex items-center justify-between bg-[#212121] py-[10px] px-[18px] rounded-[15px]">
        {/* Left */}
        <div className="flex items-center w-[40%]">
          <button className="text-[20px] text-white">
            <FaPlay />
          </button>
          <div className="aspect-square w-[42px] rounded-[8px] truncate mx-[12px]">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {/* Center */}
        <div className=" w-[30%]">
          <div className="font-[400] text-[14px] text-[#FFFFFF]">{singer}</div>
        </div>
        {/* Right */}
        <div className="w-[30%] text-right flex items-center justify-end">
          <div className="font-[400] text-[14px] text-white mr-[18px]">
            {time}
          </div>
          <button className="text-[20px] text-white">
            <MdFavorite />
          </button>
        </div>
      </div>
    </>
  );
}
