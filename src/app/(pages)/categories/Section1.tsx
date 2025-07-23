"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import CardItem from "../../components/Card/CardItem";
import Title from "../../components/title/Title";
import { dbFirebase } from "../../firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section1() {
  const [dataFinal, setDataFinal] = useState<any>([]);

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
        // Lấy 5 danh mục đầu tiên
        setDataFinal(categoryArr);
      }
    });
  }, []);
  return (
    <>
      <div className="mt-[30px]">
        <Title text={"Danh Muc Bai Hat"} />
        <div className="grid grid-cols-5 gap-[20px]">
          {dataFinal && (
            <>
              {dataFinal.map((item: any, index: number) => (
                <CardItem key={index} {...item} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
