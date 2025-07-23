"use client";

import { authFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

import { useEffect, useState } from "react";
import { FaMusic } from "react-icons/fa";
import { GiPerson } from "react-icons/gi";
import { IoIosLogOut } from "react-icons/io";
import { MdFavorite, MdOutlinePersonAdd } from "react-icons/md";
import { TbLogin } from "react-icons/tb";
import { TiHomeOutline } from "react-icons/ti";
import SiderMenuItem from "./SiderMenuItem";

export default function SiderMenu() {
  const [isLogin, setIsLogin] = useState<boolean>(false); // Khởi tạo với false thay vì undefined

  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  const menu = [
    {
      icon: <TiHomeOutline />,
      title: "Trang chu",
      link: "/",
    },
    {
      icon: <FaMusic />,
      title: "Danh muc bai hat",
      link: "/categories",
    },
    {
      icon: <GiPerson />,
      title: "Ca sĩ",
      link: "/singers",
    },
    {
      icon: <MdFavorite />,
      title: "Bài hát yêu thích",
      link: "/wishlist",
      isLogin: true, // Chỉ hiển thị nếu đã đăng nhập
    },
    {
      icon: <IoIosLogOut />,
      title: "Đăng xuất",
      link: "/logout",
      isLogin: true,
    },
    {
      icon: <TbLogin />,
      title: "Đăng nhập",
      link: "/login",
      isLogin: false, // Chỉ hiển thị nếu chưa đăng nhập
    },
    {
      icon: <MdOutlinePersonAdd />,
      title: "Đăng kí",
      link: "/register",
      isLogin: false,
    },
  ];
  return (
    <>
      <nav className="py-[30px] px-[20px]">
        <ul className="">
          {menu.map((item, index) => (
            <SiderMenuItem key={index} item={item} isLogin={isLogin} />
          ))}
        </ul>
      </nav>
    </>
  );
}
