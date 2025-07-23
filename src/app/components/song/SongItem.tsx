import Link from "next/link";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SongItem(props: any) {
  const { image, title, singer, listen, link } = props;

  return (
    <>
      <div className="rounded-[15px] bg-[#212121] p-[10px] flex items-center">
        <div className="aspect-square truncate w-[76px] h-[76px] mr-[10px] relative">
          <Image
            src={image}
            alt={title || "Song image"}
            fill
            sizes="76px"
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="mb-[2px]">
            <Link href={link} className="font-[600] text-[16px] text-[#FFFFFF]">
              {title}
            </Link>
          </div>
          <div className="font-[400] text-[12px] text-[#FFFFFF80] mb-[5px]">
            {singer}
          </div>
          <div className="font-[400] text-[12px] text-[#FFFFFF]">
            {listen.toLocaleString("vi-VN")}
          </div>
        </div>
        <div className="">
          <button className="w-[34px] h-[34px] rounded-full border border-white inline-flex items-center justify-center text-[15px] mr-[10px]">
            <FaPlay />
          </button>
          <button className="w-[34px] h-[34px] rounded-full border border-white inline-flex items-center justify-center text-[15px]">
            <MdFavorite />
          </button>
        </div>
      </div>
    </>
  );
}
