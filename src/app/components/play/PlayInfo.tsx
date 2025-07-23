/* eslint-disable @next/next/no-img-element */
export default function PlayInfo() {
  return (
    <>
      <div className="flex items-center w-[218px]">
        <div className="w-[49px] h-[49px] aspect-square rounded-[14px] truncate relative">
          <img
            src="#"
            alt=""
            sizes="49px"
            className="object-cover w-full h-full inner-image"
          />
        </div>
        <div className="ml-[12px]">
          <div className="flex-1 ">
            <span className="font-[700] text-[15px] text-[#FFFFFF] mb-[2px] inner-title"></span>
          </div>
          <div className="">
            <span className="font-[700] text-[12px] text-[#FFFFFF70] italic inner-singer"></span>
          </div>
        </div>
      </div>
    </>
  );
}
