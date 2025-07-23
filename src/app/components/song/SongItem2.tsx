"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";

import ButtonPlay from "../button/ButtonPlay";
import ButtonHeart2 from "../button/ButtonHeart2";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SongItem2(props: any) {
  const { image, title, singer, time, link } = props;
  return (
    <>
      <div className="flex items-center justify-between bg-[#212121] py-[10px] px-[18px] rounded-[15px]">
        {/* Left */}
        <div className="flex items-center w-[40%]">
          {/* <button className="text-[20px] text-white">
            <FaPlay />
          </button> */}
          <ButtonPlay {...props} className="text-[20px] text-white" />
          <div className="aspect-square w-[42px] h-[42px] rounded-[8px] truncate mx-[12px] relative">
            <Image
              src={image}
              alt={title || "Song image"}
              fill
              sizes="42px"
              className="object-cover"
            />
          </div>
          <div className="font-[500] text-[16px] text-[#FFFFFF] mb-[2px]">
            {link ? (
              <Link
                href={link}
                className="hover:text-blue-400 transition-colors"
              >
                {title}
              </Link>
            ) : (
              title
            )}
          </div>
        </div>
        {/* Center */}
        <div className=" w-[30%]">
          <div className="font-[400] text-[14px] text-[#BBBBBB]">{singer}</div>
        </div>
        {/* Right */}
        <div className="w-[30%] text-right flex items-center justify-end">
          <div className="font-[400] text-[14px] text-white mr-[18px]">
            {time}
          </div>
          <ButtonHeart2 {...props} />
        </div>
      </div>
    </>
  );
}
