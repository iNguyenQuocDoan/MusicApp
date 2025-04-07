import SongItem from "@/app/components/song/SongItem";
import Title from "@/app/components/title/Title";

export default function Section1() {
  return (
    <>
      <div className="flex items-start flex-1 ">
        <div className="w-[535px] h-full">
          <div
            className="w-full flex items-center bg-cover rounded-[15px] h-[361px]"
            style={{ backgroundImage: "url('/Banner/Background1.png')" }}
          >
            <div className="flex-1 mr-[34px] ml-[30px]">
              <div className="font-[700] text-[32px] text-white">Nhac EDM</div>
              <div className="font-[500] text-[14px] text-white">
                Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot
                nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
              </div>
            </div>
            <div className="">
              <img
                src="/Banner/Nigga1.png"
                alt="EDM"
                className="w-[215px] h-[321px]  mt-[17%] mr-[25px] "
              />
            </div>
          </div>
        </div>
        <div className="ml-[20px] flex-1">
          <Title text="Nghe Nhieu" />
          {/* item */}

          <div className="grid grid-cols-1 gap-[10px]">
            <SongItem
              image="/Banner/HoQuangHieu.png"
              title="Co phong"
              singer="Ho Quang Hieu"
              listen={1234}
            />
            <SongItem
              image="/Banner/HoQuangHieu.png"
              title="Co phong"
              singer="Ho Quang Hieu"
              listen={1234}
            />
            <SongItem
              image="/Banner/HoQuangHieu.png"
              title="Co phong"
              singer="Ho Quang Hieu"
              listen={1234}
            />
          </div>
          {/* end item */}
        </div>
      </div>
    </>
  );
}
