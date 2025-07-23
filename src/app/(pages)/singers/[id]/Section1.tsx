/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import CardInfo from "@/app/components/card/CardInfo";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section1(props: { id: string }) {
  const { id } = props; // Lấy id từ props nếu cần sử dụng
  const [dataFinal, setDataFinal] = useState<any>([]);

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
      }
    });
  }, []);
  return (
    <>
      <CardInfo
        image={dataFinal.image}
        title={dataFinal.title}
        description={dataFinal.description}
      />
    </>
  );
}
