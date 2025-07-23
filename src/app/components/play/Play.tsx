import { CiPlay1, CiVolume } from "react-icons/ci";
import { FaStepBackward, FaStepForward } from "react-icons/fa";
import Image from "next/image";

export default function Play() {
  return (
    <>
      <div className="fixed bottom-0 bg-[#212121] border-t border-[#494949] w-full left-0  py-[20px] z-[999] ">
        <div className="container mx-auto flex justify-between">
          <div className="flex items-center w-[218px]">
            <div className="w-[49px] h-[49px] aspect-square rounded-[14px] truncate relative">
              <Image
                src="/Cophong.svg"
                alt="Co phong"
                fill
                sizes="49px"
                className="object-cover"
              />
            </div>
            <div className="ml-[12px]">
              <div className="flex-1 ">
                <span className="font-[700] text-[15px] text-[#FFFFFF]">
                  Co Phong
                </span>
              </div>
              <div className="">
                <span className="font-[700] text-[12px] text-[#FFFFFF70] italic">
                  Ho Quang Hieu
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1 mx-[67px]">
            <div className="flex items-center justify-center">
              <button className="text-white text-[16px]">
                <FaStepBackward />
              </button>
              <button className="bg-[#00ADEF] text-[16px] h-[32px] w-[32px] text-white rounded-full  inline-flex justify-center items-center mx-[52px]">
                <CiPlay1 />
              </button>
              <button className="text-white text-[16px]">
                <FaStepForward />
              </button>
            </div>
            <div className="mt-[11px] relative">
              <div className="h-[4px] w-0 bg-[#00ADEF] rounded-[50px] absolute left-0 top-[13px]"></div>
              <input
                type="range"
                min={0}
                max={100}
                defaultValue={0}
                className="w-full h-[4px] bg-[#FFFFFF0A] cursor-pointer range-sm"
              />
            </div>
          </div>
          <div className="w-[184px] flex items-end">
            <button className="text-white text-[16px]">
              <CiVolume />
            </button>
            <div className="ml-[6px] w-full">
              <input
                type="range"
                min={0}
                max={100}
                defaultValue={0}
                className="w-full h-[3px] bg-[#FFFFFF1A] cursor-pointer range-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
