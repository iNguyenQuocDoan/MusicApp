"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import Title from "../../components/title/Title";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebaseConfig";
import { useEffect, useState } from "react";
import CardItem from "../../components/Card/CardItem";
import SkeletonGrid from "../../components/skeleton/SkeletonGrid";

export default function Section2() {
  const [dataFinal, setDataFinal] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const categoryRef = ref(dbFirebase, "categories");
    onValue(categoryRef, (snapshot) => {
      const resData = snapshot.val();
      if (resData) {
        // Object.keys(resData) để lặp qua từ key của object dât
        // lặp quảng mảng singerid xong tìm bản ghi ca sĩ có id đó
        let categoryArr = Object.keys(resData).map((key) => ({
          id: key,
          image: resData[key].image,
          title: resData[key].title,
          description: resData[key].description,
          link: `/categories/${key}`,
        }));
        categoryArr = categoryArr.slice(0, 5); // Lấy 5 danh mục đầu tiên
        setDataFinal(categoryArr);
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return (
      <div className="mt-[30px]">
        <Title text={"Danh Mục Nổi Bật"} />
        <SkeletonGrid count={5} />
      </div>
    );
  }

  return (
    <>
      <div className="mt-[30px]">
        <Title text={"Danh Mục Nổi Bật"} />
        <div className="grid grid-cols-5 gap-[20px]">
          {dataFinal && (
            <>
              {dataFinal.map((item: any) => (
                <CardItem key={item.id} {...item} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
