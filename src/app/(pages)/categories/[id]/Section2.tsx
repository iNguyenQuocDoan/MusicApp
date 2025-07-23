"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import SongItem2 from "../../../components/song/SongItem2";
import Title from "../../../components/title/Title";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebaseConfig";
import { getSingerNames } from "@/app/utils/songUtils";

export default function Section2(prop: { id: string }) {
  const { id } = prop;

  const [dataFinal, setDataFinal] = useState<any[]>([]);

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

          songsArray = songsArray.filter((item) => item.categoryId === id);

          setDataFinal(songsArray);
        }
      });
    });
  }, [id]);

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Danh Sách Bài Hát Cùng Danh Mục" />
        {/* List */}
        <div className="grid grid-cols-1 gap-[10px]">
          {/* Item */}
          {dataFinal && dataFinal.length > 0 ? (
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
