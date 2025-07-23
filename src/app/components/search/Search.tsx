/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function Search() {
  // chuyển trang mà không load lại
  const router = useRouter();
  // Lấy các tham số tìm kiếm từ URL
  const params = useSearchParams();

  const keywordDefault = params.get("keyword") || "";

  const [dataFinal, setDataFinal] = useState<any>([]);

  useEffect(() => {
    const songsRef = ref(dbFirebase, "songs");
    onValue(songsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Lặp qua mảng singerId xong tìm bản ghi ca sĩ có id đó
        // Object.keys(data) để lặp qua từ key của object data
        let songsArray = Object.keys(data).map((key) => ({
          id: key,
          image: data[key].image,
          title: data[key].title,
          singer: "Hồ Quang Hiếu, Huỳnh Văn",
          listen: data[key].listen,
          singerId: data[key].singerId,
          categoryId: data[key].categoryId,
          time: "4:32",
          audio: data[key].audio,
          wishlist: data[key].wishlist,
        }));
        const regex = new RegExp(keywordDefault, "i");
        songsArray = songsArray.filter((item) => regex.test(item.title));

        setDataFinal(songsArray);
      }
    });
  }, [keywordDefault]);
  console.log("Data final:", dataFinal);
  console.log("Search params:", keywordDefault);

  const handleSearch = (event: any) => {
    event.preventDefault();
    const keyword = event.target.keyword.value;
    if (keyword) {
      // Chuyển hướng đến trang tìm kiếm với từ khóa
      router.push(`/search?keyword=${keyword}`);
    } else {
      // Nếu không có từ khóa, chuyển đến trang chính
      router.push("/");
    }
  };
  return (
    <>
      <form
        onSubmit={handleSearch}
        className="bg-[#212121] sticky rounded-[50px] mt-[20px] top-[20px] z-[999] flex py-[15px] px-[30px]"
      >
        <input
          type="text"
          name="keyword"
          placeholder="Search song...abc"
          className="order-2 text-[16px] font-[600] text-white bg-transparent outline-none flex-1"
          defaultValue={keywordDefault}
          autoComplete="off"
          autoFocus={true}
        />
        <button
          type="submit"
          className="order-1 text-[22px] text-white mr-[20px] cursor-pointer "
        >
          {" "}
          <IoSearchOutline />
        </button>
      </form>
    </>
  );
}
