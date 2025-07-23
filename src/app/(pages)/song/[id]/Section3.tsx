"use client";
import { useEffect, useState } from "react";
import SongItem2 from "../../../components/song/SongItem2";
import Title from "../../../components/title/Title";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebaseConfig";

interface SongType {
  id: string;
  image: string;
  title: string;
  singer: string;
  time: string;
  link: string;
}

export default function Section3(props: { id: string }) {
  const { id } = props;

  // Lưu danh sách bài hát cùng danh mục
  const [relatedSongs, setRelatedSongs] = useState<SongType[]>([]);
  // Lưu trạng thái loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    console.log("Current song ID:", id);

    // Bước 1: Lấy thông tin bài hát hiện tại để biết categoryId
    const songRef = ref(dbFirebase, `songs/${id}`);

    onValue(songRef, (snapshot) => {
      const currentSong = snapshot.val();
      console.log("Current song:", currentSong);

      if (!currentSong || !currentSong.categoryId) {
        console.log("No categoryId found for this song");
        setLoading(false);
        return;
      }

      const currentCategoryId = currentSong.categoryId;
      console.log("Current song categoryId:", currentCategoryId);

      // Bước 2: Lấy tất cả các bài hát có cùng categoryId
      const allSongsRef = ref(dbFirebase, "songs");
      onValue(allSongsRef, (snapshot) => {
        const allSongs = snapshot.val();
        if (!allSongs) {
          setLoading(false);
          return;
        }

        // Lọc các bài hát cùng danh mục nhưng không phải bài hát hiện tại
        const filteredSongs = Object.keys(allSongs)
          .filter((key) => {
            return allSongs[key].categoryId === currentCategoryId && key !== id;
          })
          .map((key) => ({
            id: key,
            image: allSongs[key].image,
            title: allSongs[key].title,
            singer: allSongs[key].singer || "",
            time: allSongs[key].time || "",
            link: `/song/${key}`,
          }))
          .slice(0, 5); // Giới hạn 5 bài hát

        console.log("Related songs found:", filteredSongs.length);
        setRelatedSongs(filteredSongs);
        setLoading(false);
      });
    });
  }, [id]); // Thêm id vào dependency array
  return (
    <>
      <div className="mt-[30px]">
        <Title text="Bài hát cùng danh mục" />
        {/* List */}
        <div className="grid grid-cols-1 gap-[10px]">
          {/* Item */}
          {loading ? (
            // Hiển thị loading skeleton
            <>
              <div className="animate-pulse bg-gray-700 h-16 rounded-lg"></div>
              <div className="animate-pulse bg-gray-700 h-16 rounded-lg"></div>
              <div className="animate-pulse bg-gray-700 h-16 rounded-lg"></div>
            </>
          ) : relatedSongs.length > 0 ? (
            // Hiển thị danh sách bài hát liên quan
            relatedSongs.map((item, index) => (
              <SongItem2 key={index} {...item} />
            ))
          ) : (
            // Không có bài hát liên quan
            <div className="text-white text-center py-4">
              Không có bài hát cùng danh mục
            </div>
          )}
        </div>
      </div>
    </>
  );
}
