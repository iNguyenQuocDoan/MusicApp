/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import CardItem from "../../components/card/CardItem";
import Title from "../../components/title/Title";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebaseConfig";

export default function Section2() {
  const [dataFinal, setDataFinal] = useState<any>([]);

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
      }
    });
  }, []);
  return (
    <>
      <div className="mt-[30px]">
        <Title text="Danh Sách Ca Sĩ" />
        {/* List */}
        <div className="grid grid-cols-1 gap-[10px]">
          {/* Item */}
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
      </div>
    </>
  );
}
