"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSearchParams } from "next/navigation";
import SongItem2 from "../../components/song/SongItem2";
import Title from "../../components/title/Title";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebaseConfig";

export default function Section1() {
  const params = useSearchParams();

  const keywordDefault = params.get("keyword") || "";
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

        const regex = new RegExp(keywordDefault, "i");
        songsArray = songsArray.filter((item) => regex.test(item.title));

        setDataFinal(songsArray);
      }
    });
  }, []);
  return (
    <>
      <div className="mt-[30px]">
        <Title text="Kết quả tìm kiếm" />
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
