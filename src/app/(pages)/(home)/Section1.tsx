"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import SongItem from "../../components/song/SongItem";
import Title from "../../components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import Image from "next/image";
import SkeletonHomePage from "../../components/skeleton/SkeletonHomePage";

export default function Section1() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dataFinal, setDataFinal] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const songRef = ref(dbFirebase, "songs");
    onValue(songRef, (snapshot) => {
      const songData = snapshot.val();
      if (songData) {
        // Lấy danh sách bài hát từ songs
        let songsArr = Object.keys(songData).map((key) => ({
          id: key,
          image: songData[key].image,
          title: songData[key].title,
          singer: "",
          listen: songData[key].listen,
          singerId: songData[key].singerId,
          audio: songData[key].audio || "",
          link: `/song/${key}`,
        }));

        // Lấy top 3 bài hát có lượt nghe nhiều nhất
        songsArr = songsArr.sort((a, b) => b.listen - a.listen).slice(0, 3);

        // Lấy thông tin ca sĩ
        const singerRef = ref(dbFirebase, "singers");
        onValue(singerRef, (singerSnapshot) => {
          const singerData = singerSnapshot.val();
          if (singerData) {
            // Cập nhật tên ca sĩ cho mỗi bài hát
            const updatedSongsArr = songsArr.map((song) => {
              let singerNames = "";
              if (Array.isArray(song.singerId)) {
                // Nếu có nhiều ca sĩ
                singerNames = song.singerId
                  .map((id) => singerData[id]?.title || "")
                  .filter((name) => name !== "")
                  .join(", ");
              } else if (song.singerId) {
                // Nếu chỉ có một ca sĩ
                singerNames = singerData[song.singerId]?.title || "";
              }
              return { ...song, singer: singerNames };
            });

            setDataFinal(updatedSongsArr);
            setLoading(false);
          }
        });
      }
    });
  }, []);

  console.log(dataFinal);

  if (loading) {
    return <SkeletonHomePage />;
  }

  return (
    <>
      <div className="flex items-start flex-1 ">
        <div className="w-[535px] h-full">
          <div
            className="w-full flex items-center bg-cover rounded-[15px] h-[361px] overflow-hidden relative"
            style={{ backgroundImage: "url('/Banner/Background1.png')" }}
          >
            <div className="flex-1 mr-[34px] ml-[30px] z-10">
              <div className="font-[700] text-[32px] text-white">Nhac EDM</div>
              <div className="font-[500] text-[14px] text-white">
                Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot
                nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
              </div>
            </div>
            <div className="absolute right-[20px] bottom-0 w-[200px] h-[280px]">
              <Image
                src="/Banner/Nigga1.png"
                alt="EDM"
                fill
                priority
                sizes="200px"
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
        <div className="ml-[20px] flex-1">
          <Title text="Nghe Nhieu" />
          {/* item */}

          <div className="grid grid-cols-1 gap-[10px]" song-list="">
            {dataFinal && (
              <>
                {dataFinal.map((item: any) => (
                  <SongItem
                    id={item.id}
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    singer={item.singer}
                    listen={item.listen}
                    link={item.link}
                    audio={item.audio}
                    wishlist={item.wishlist}
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
