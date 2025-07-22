"use client";

import CardItem from "@/app/components/card/CardItem";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect } from "react";

export default function Section1() {
  const data = [
    {
      image: "/Banner/AllanWalker.png",
      title: "nhac gia",
      description: "1",
      link: "",
    },
    {
      image: "/Banner/AllanWalker.png",
      title: "nhac khong gia",
      description: "2",
      link: "",
    },
    {
      image: "/Banner/AllanWalker.png",
      title: "nhac chua gia",
      description: "3",
      link: "",
    },
    {
      image: "/Banner/AllanWalker.png",
      title: "nhac chua tre",
      description: "4",
      link: "",
    },
    {
      image: "/Banner/AllanWalker.png",
      title: "nhac da tre",
      description: "5",
      link: "",
    },
    {
      image: "/Banner/AllanWalker.png",
      title: "nhac da tre",
      description: "5",
      link: "",
    },
  ];

  useEffect(() => {
    const res = ref(dbFirebase, "categories");
    onValue(res, (snapshot) => {
      const resData = snapshot.val();
      console.log(resData);
    });
  }, []);
  return (
    <>
      <div className="mt-[30px]">
        <Title text={"Danh Muc Bai Hat"} />
        <div className="grid grid-cols-5 gap-[20px]">
          {data.map((item, index) => (
            <CardItem key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
