"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import CardInfo from "@/app/components/Card/CardInfo";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section1(props: { id: string }) {
  const { id } = props;
  const [dataFinal, setDataFinal] = useState<any>([]);

  useEffect(() => {
    const categoryRef = ref(dbFirebase, "categories" + `/${id}`);
    onValue(categoryRef, (snapshot) => {
      const resData = snapshot.val();
      if (resData) {
        setDataFinal({
          image: resData.image,
          title: resData.title,
          description: resData.description,
          link: `/categories/${id}`,
          id: id,
        });
      }
    });
  }, []);
  console.log(dataFinal);
  return (
    <>
      {dataFinal && (
        <>
          <CardInfo
            image={dataFinal.image}
            title={dataFinal.title}
            description={dataFinal.description}
            link={dataFinal.link}
          />
        </>
      )}
    </>
  );
}
