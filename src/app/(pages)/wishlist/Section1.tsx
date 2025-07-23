/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import SongItem2 from "../../components/song/SongItem2";
import Title from "../../components/title/Title";
import { onValue, ref } from "firebase/database";
import { dbFirebase, authFirebase } from "@/app/firebaseConfig";

export default function Section1() {
  const [dataFinal, setDataFinal] = useState<any[]>([]); // Khởi tạo là array rỗng thay vì undefined

  useEffect(() => {
    const userId = authFirebase?.currentUser?.uid;

    if (!userId) {
      console.log("User not logged in");
      return;
    }

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
          singer: data[key].singer || "Chưa có thông tin",
          listen: data[key].listen,
          singerId: data[key].singerId,
          categoryId: data[key].categoryId,
          time: "4:32",
          audio: data[key].audio,
          wishlist: data[key].wishlist,
        }));

        // Lọc chỉ những bài hát có trong wishlist của user hiện tại
        songsArray = songsArray.filter(
          (item) => item.wishlist && item.wishlist[userId] === true
        );

        setDataFinal(songsArray);
      } else {
        setDataFinal([]);
      }
    });
  }, []);
  return (
    <>
      <div className="mt-[30px]">
        <Title text="Danh Sách Bài Hát Yêu Thích" />
        {/* List */}
        <div className="grid grid-cols-1 gap-[10px]">
          {/* Item */}
          {dataFinal && dataFinal.length > 0 ? (
            dataFinal.map((item, index) => <SongItem2 key={index} {...item} />)
          ) : (
            <div className="text-center text-gray-400 py-8">
              <p>Chưa có bài hát yêu thích nào</p>
              <p className="text-sm mt-2">
                Hãy thêm bài hát vào danh sách yêu thích!
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
