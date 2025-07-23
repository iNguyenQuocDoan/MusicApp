"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import SongItem2 from "../../../components/song/SongItem2";
import Title from "../../../components/title/Title";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebaseConfig";

export default function Section2(prop: { id: string }) {
  const { id } = prop;

  const [dataFinal, setDataFinal] = useState<any>();

  useEffect(() => {
    const songsRef = ref(dbFirebase, "songs");
    onValue(songsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Lặp qua mảng singerId xong tìm bản ghi ca sĩ có id đó
        // Object.keys(data) để lặp qua từ key của object data
        let songsArray = Object.keys(data).map((key) => ({
          id: key,
          image: data[key].image,
          title: data[key].title,
          singer: "Hồ Quang Hiếu, Huỳnh Văn",
          listen: data[key].listen,
          singerId: data[key].singerId,
          categoryId: data[key].categoryId,
          time: "4:32",
          audio: data[key].audio,
          wishlist: data[key].wishlist,
        }));

        songsArray = songsArray.filter((item) => item.categoryId === id);

        setDataFinal(songsArray);
      }
    });
  }, []);

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
