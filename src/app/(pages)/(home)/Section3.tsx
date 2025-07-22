"use client";

import { useEffect, useState } from "react";
import CardItem from "../../components/card/CardItem";
import Title from "../../components/title/Title";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebaseConfig";

export default function Section3() {
  const [dataFinal, setDataFinal] = useState<any>([]);

  useEffect(() => {
    const categoryRef = ref(dbFirebase, "categories");
    onValue(categoryRef, (snapshot) => {
      const resData = snapshot.val();
      if (resData) {
        // Object.keys(resData) để lặp qua từ key của object dât
        // lặp quảng mảng singerid xong tìm bản ghi ca sĩ có id đó
        let singersArr = Object.keys(resData).map((key) => ({
          id: key,
          image: resData[key].image,
          title: resData[key].title,
          description: resData[key].description,
          link: `/singers/${key}`,
        }));
        singersArr = singersArr.slice(0, 5); // Lấy 5 danh mục đầu tiên
        setDataFinal(singersArr);
      }
    });
  }, []);
  return (
    <>
      <div className="mt-[30px]">
        <Title text={"Danh Ca Si Noi Bat"} />
        <div className="grid grid-cols-5 gap-[20px]">
          {dataFinal && (
            <>
              {dataFinal.map((item, index) => (
                <CardItem key={index} {...item} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
