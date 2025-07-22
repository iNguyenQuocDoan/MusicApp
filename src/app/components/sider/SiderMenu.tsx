"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaMusic } from "react-icons/fa";
import { GiPerson } from "react-icons/gi";
import { IoIosLogOut } from "react-icons/io";
import { MdFavorite, MdOutlinePersonAdd } from "react-icons/md";
import { TbLogin } from "react-icons/tb";
import { TiHomeOutline } from "react-icons/ti";

export default function SiderMenu() {
  const pathName = usePathname(); // lay path name
  console.log(pathName);
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
    },
    {
      icon: <IoIosLogOut />,
      title: "Đăng xuất",
      link: "/logout",
    },
    {
      icon: <TbLogin />,
      title: "Đăng nhập",
      link: "/login",
    },
    {
      icon: <MdOutlinePersonAdd />,
      title: "Đăng kí",
      link: "/register",
    },
  ];
  return (
    <>
      <nav className="py-[30px] px-[20px]">
        <ul className="">
          {menu.map((item, index) => (
            <li className="mb-[30px]" key={index}>
              <Link
                href={item.link}
                className={
                  " flex items-center hover:text-[#00ADEF] capitalize " +
                  (pathName === item.link ? "text-[#00ADEF]" : "text-white")
                }
              >
                <span className="text-[20px] mr-[20px]">{item.icon}</span>
                <span className="font-[700]">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
