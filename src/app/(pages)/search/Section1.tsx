"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSearchParams } from "next/navigation";
import SongItem2 from "../../components/song/SongItem2";
import Title from "../../components/title/Title";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebaseConfig";
import { getSingerNames } from "@/app/utils/songUtils";
import SkeletonSongList from "../../components/skeleton/SkeletonSongList";

export default function Section1() {
  const params = useSearchParams();

  const keywordDefault = params.get("keyword") || "";
  const [dataFinal, setDataFinal] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const songsRef = ref(dbFirebase, "songs");
    const singersRef = ref(dbFirebase, "singers");

    // Lấy dữ liệu singers trước
    onValue(singersRef, (singerSnapshot) => {
      const singerData = singerSnapshot.val();

      // Sau đó lấy dữ liệu songs
      onValue(songsRef, (songSnapshot) => {
        const songData = songSnapshot.val();
        if (songData && singerData) {
          // Lặp qua mảng singerId xong tìm bản ghi ca sĩ có id đó
          // Object.keys(data) để lặp qua từ key của object data
          let songsArray = Object.keys(songData).map((key) => ({
            id: key,
            image: songData[key].image,
            title: songData[key].title,
            singer: getSingerNames(songData[key].singerId, singerData),
            listen: songData[key].listen,
            singerId: songData[key].singerId,
            categoryId: songData[key].categoryId,
            time: "4:32",
            audio: songData[key].audio,
            wishlist: songData[key].wishlist,
          }));

          const regex = new RegExp(keywordDefault, "i");
          songsArray = songsArray.filter(
            (item) => regex.test(item.title) || regex.test(item.singer)
          );

          setDataFinal(songsArray);
          setLoading(false);
        }
      });
    });
  }, [keywordDefault]);

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Kết quả tìm kiếm" />
        {/* List */}
        <div className="grid grid-cols-1 gap-[10px]">
          {/* Item */}
          {loading ? (
            <SkeletonSongList count={8} />
          ) : dataFinal && dataFinal.length > 0 ? (
            <>
              {dataFinal.map((item: any) => (
                <SongItem2 key={item.id} {...item} />
              ))}
            </>
          ) : (
            <div className="text-white text-center py-4">
              Không có bài hát trong danh mục này
            </div>
          )}
        </div>
      </div>
    </>
  );
}
