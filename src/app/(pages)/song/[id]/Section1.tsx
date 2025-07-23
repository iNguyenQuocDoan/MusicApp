"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import CardInfo from "../../../components/Card/CardInfo";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section1(props: { id: string }) {
  const { id } = props;
  const [dataFinal, setDataFinal] = useState<any>([]);

  useEffect(() => {
    const songRef = ref(dbFirebase, "songs" + `/${id}`);
    onValue(songRef, (snapshot) => {
      const resData = snapshot.val();
      if (resData) {
        setDataFinal({
          image: resData.image,
          title: resData.title,
          description: "singer name", // Giả sử bạn có tên ca sĩ trong dữ liệu
        });
      }
    });
  }, [id]);
  return (
    <>
      {" "}
      <CardInfo
        image={dataFinal.image}
        title={dataFinal.title}
        description={dataFinal.description}
      />
    </>
  );
}
