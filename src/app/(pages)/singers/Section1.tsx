/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";

import Title from "../../components/title/Title";
import SingerList from "../../components/singer/SingerList";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebaseConfig";
import SkeletonSingerList from "../../components/skeleton/SkeletonSingerList";
import SkeletonGrid from "../../components/skeleton/SkeletonGrid";
import CardItem from "../../components/Card/CardItem";

export default function Section1() {
  const [dataFinal, setDataFinal] = useState<any>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("list"); // Mặc định hiển thị dạng list
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const singersRef = ref(dbFirebase, "singers");
    onValue(singersRef, (snapshot) => {
      const resData = snapshot.val();
      if (resData) {
        // Object.keys(resData) để lặp qua từ key của object data
        const singersArr = Object.keys(resData).map((key) => ({
          id: key,
          image: resData[key].image,
          title: resData[key].title,
          description: resData[key].description,
          link: `/singers/${key}`,
        }));

        setDataFinal(singersArr);
        setLoading(false);
      }
    });
  }, []);

  return (
    <>
      <div className="mt-[30px]">
        <div className="flex justify-between items-center mb-6">
          <Title text="Danh Sách Ca Sĩ" />
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode("list")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                viewMode === "list"
                  ? "bg-[#00ADEF] text-white"
                  : "bg-[#212121] text-gray-400 hover:bg-[#333]"
              }`}
            >
              Danh sách
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                viewMode === "grid"
                  ? "bg-[#00ADEF] text-white"
                  : "bg-[#212121] text-gray-400 hover:bg-[#333]"
              }`}
            >
              Lưới
            </button>
          </div>
        </div>

        {/* Hiển thị theo chế độ được chọn */}
        {loading ? (
          viewMode === "list" ? (
            <SkeletonSingerList />
          ) : (
            <SkeletonGrid count={10} />
          )
        ) : viewMode === "list" ? (
          <SingerList />
        ) : (
          <div className="grid grid-cols-1 gap-[10px]">
            <div className="grid grid-cols-5 gap-[20px]">
              {dataFinal && dataFinal.length > 0 ? (
                dataFinal.map((item: any, index: number) => (
                  <CardItem key={item.id || index} {...item} />
                ))
              ) : (
                <div className="col-span-5 text-center py-8">
                  <p className="text-gray-400">Đang tải danh sách ca sĩ...</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
