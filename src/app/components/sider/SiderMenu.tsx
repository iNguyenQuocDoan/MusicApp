"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TiHomeOutline } from "react-icons/ti";

export default function SiderMenu() {
  const pathName = usePathname();
  console.log(pathName);
  const menu = [
    {
      icon: <TiHomeOutline />,
      title: "Trang chu",
      link: "/",
    },
    {
      icon: <TiHomeOutline />,
      title: "Danh muc bai hat",
      link: "/category",
    },
    {
      icon: <TiHomeOutline />,
      title: "Ca sĩ",
      link: "/singers",
    },
    {
      icon: <TiHomeOutline />,
      title: "Bài hát yêu thích",
      link: "/wishlist",
    },
    {
      icon: <TiHomeOutline />,
      title: "Đăng xuất",
      link: "/logout",
    },
    {
      icon: <TiHomeOutline />,
      title: "Đăng nhập",
      link: "/login",
    },
    {
      icon: <TiHomeOutline />,
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
