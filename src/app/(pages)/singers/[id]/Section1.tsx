/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import CardInfo from "@/app/components/Card/CardInfo";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section1(props: { id: string }) {
  const { id } = props; // Lấy id từ props nếu cần sử dụng
  const [dataFinal, setDataFinal] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const categoryRef = ref(dbFirebase, "singers" + `/${id}`);
    onValue(categoryRef, (snapshot) => {
      const resData = snapshot.val();
      if (resData) {
        setDataFinal({
          image: resData.image,
          title: resData.title,
          description: resData.description,
          link: `/singers/${id}`,
          id: id,
        });
        setLoading(false);
      }
    });
  }, [id]);
  return (
    <>
      {loading ? (
        <div className="animate-pulse">
          <div className="bg-gray-300 rounded-lg h-64 w-full mb-4"></div>
          <div className="space-y-2">
            <div className="h-6 bg-gray-300 rounded w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          </div>
        </div>
      ) : (
        <CardInfo
          image={dataFinal.image}
          title={dataFinal.title}
          description={dataFinal.description}
        />
      )}
    </>
  );
}
