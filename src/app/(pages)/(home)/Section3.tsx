"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

import Title from "../../components/title/Title";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebaseConfig";
import CardItem from "../../components/Card/CardItem";

export default function Section3() {
  const [dataFinal, setDataFinal] = useState<any>([]);

  useEffect(() => {
    const singersRef = ref(dbFirebase, "singers");
    onValue(singersRef, (snapshot) => {
      const resData = snapshot.val();
      if (resData) {
        // Object.keys(resData) để lặp qua từ key của object data
        let singersArr = Object.keys(resData).map((key) => ({
          id: key,
          image: resData[key].image,
          title: resData[key].title,
          description: resData[key].description,
          link: `/singers/${key}`,
        }));
        singersArr = singersArr.slice(0, 5); // Lấy 5 ca sĩ nổi bật
        setDataFinal(singersArr);
      }
    });
  }, []);
  return (
    <>
      <div className="mt-[30px]">
        <Title text={"Ca Sĩ Nổi Bật"} />
        <div className="grid grid-cols-5 gap-[20px]">
          {dataFinal && (
            <>
              {dataFinal.map((item: any, index: number) => (
                <CardItem key={item.id || index} {...item} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
