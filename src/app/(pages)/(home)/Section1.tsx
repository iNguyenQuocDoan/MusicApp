"use client";

import { useEffect, useState } from "react";
import SongItem from "../../components/song/SongItem";
import Title from "../../components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";

export default function Section1() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dataFinal, setDataFinal] = useState<any>([]);

  useEffect(() => {
    const songRef = ref(dbFirebase, "songs");
    onValue(songRef, (snapshot) => {
      const resData = snapshot.val();
      if (resData) {
        // Object.keys(resData) để lặp qua từ key của object dât
        // lặp quảng mảng singerid xong tìm bản ghi ca sĩ có id đó
        let songsArr = Object.keys(resData).map((key) => ({
          id: key,
          image: resData[key].image,
          title: resData[key].title,
          singer: "",
          listen: resData[key].listen,
          singerId: resData[key].singerId,
        }));

        songsArr = songsArr.slice(0, 3); // Lấy 3 bài hát đầu tiên
        setDataFinal(songsArr);
      }
    });
  }, []);

  console.log(dataFinal);
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
            {dataFinal && (
              <>
                {dataFinal.map((item: any) => (
                  <SongItem
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    singer={item.singer}
                    listen={item.listen}
                  />
                ))}
              </>
            )}
          </div>
          {/* end item */}
        </div>
      </div>
    </>
  );
}
