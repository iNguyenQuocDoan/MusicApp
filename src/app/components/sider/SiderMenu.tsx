import Link from "next/link";

export default function SiderMenu() {
  const menu = [
    {
      icon: <>Icon</>,
      title: "Trang chu",
      link: "/",
    },
  ];
  return (
    <>
      <nav className="py-[30px] px-[20px]">
        <ul className="">
          {menu.map((item, index) => (
            <li className="" key={index}>
              <Link href={item.link} className="text-white">
                <span className="">{item.icon}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
