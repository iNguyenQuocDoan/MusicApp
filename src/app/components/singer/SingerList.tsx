"use client";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebaseConfig";
import Image from "next/image";
import Link from "next/link";

interface Singer {
  id: string;
  name: string;
  count: number; // Số lượng bài hát của ca sĩ
  songs: string[]; // Danh sách tên bài hát
  image?: string;
}

export default function SingerList() {
  const [singers, setSingers] = useState<Singer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const songsRef = ref(dbFirebase, "songs");
    const singersRef = ref(dbFirebase, "singers");

    // Lấy dữ liệu singers trước
    onValue(singersRef, (singerSnapshot) => {
      const singerData = singerSnapshot.val();

      if (singerData) {
        // Lấy dữ liệu songs
        onValue(songsRef, (songSnapshot) => {
          const songData = songSnapshot.val();

          if (songData) {
            // Tạo map để đếm bài hát của mỗi ca sĩ
            const singerMap = new Map<string, Singer>();

            // Duyệt qua tất cả bài hát
            Object.keys(songData).forEach((songKey) => {
              const song = songData[songKey];
              const songTitle = song.title || "";

              if (Array.isArray(song.singerId)) {
                // Nếu bài hát có nhiều ca sĩ
                song.singerId.forEach((singerId: string) => {
                  const singerInfo = singerData[singerId];
                  if (singerInfo && singerInfo.title) {
                    const singerName = singerInfo.title.trim();

                    if (singerMap.has(singerId)) {
                      const existing = singerMap.get(singerId)!;
                      existing.count += 1;
                      existing.songs.push(songTitle);
                    } else {
                      singerMap.set(singerId, {
                        id: singerId,
                        name: singerName,
                        count: 1,
                        songs: [songTitle],
                        image: singerInfo.image || undefined,
                      });
                    }
                  }
                });
              } else if (song.singerId) {
                // Nếu bài hát chỉ có một ca sĩ
                const singerInfo = singerData[song.singerId];
                if (singerInfo && singerInfo.title) {
                  const singerName = singerInfo.title.trim();

                  if (singerMap.has(song.singerId)) {
                    const existing = singerMap.get(song.singerId)!;
                    existing.count += 1;
                    existing.songs.push(songTitle);
                  } else {
                    singerMap.set(song.singerId, {
                      id: song.singerId,
                      name: singerName,
                      count: 1,
                      songs: [songTitle],
                      image: singerInfo.image || undefined,
                    });
                  }
                }
              }
            });

            // Chuyển map thành array và sắp xếp
            const singersArray = Array.from(singerMap.values())
              .filter((singer) => singer.name && singer.name !== "")
              .sort((a, b) => {
                // Sắp xếp theo số bài hát (giảm dần) rồi theo tên (A-Z)
                if (a.count !== b.count) {
                  return b.count - a.count;
                }
                return a.name.localeCompare(b.name);
              });

            setSingers(singersArray);
          }
          setLoading(false);
        });
      }
    });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">Đang tải danh sách ca sĩ...</p>
      </div>
    );
  }

  return (
    <div className="mt-[30px]">
      <h2 className="text-white text-2xl font-bold mb-6">
        Danh Sách Ca Sĩ Thực Tế ({singers.length})
      </h2>

      {singers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {singers.map((singer) => (
            <Link key={singer.id} href={`/singers/${singer.id}`}>
              <div className="bg-[#212121] rounded-lg p-4 hover:bg-[#333] transition-colors duration-200 cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-600 flex-shrink-0 relative">
                    {singer.image ? (
                      <Image
                        src={singer.image}
                        alt={singer.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <span className="text-2xl">🎤</span>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-lg truncate">
                      {singer.name}
                    </h3>
                    <p className="text-[#00ADEF] text-sm">
                      {singer.count} bài hát
                    </p>
                    {singer.songs.length > 0 && (
                      <p className="text-gray-400 text-xs mt-1 truncate">
                        Bài hát nổi bật: {singer.songs[0]}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-400">
            Không có ca sĩ nào trong cơ sở dữ liệu
          </p>
        </div>
      )}
    </div>
  );
}
