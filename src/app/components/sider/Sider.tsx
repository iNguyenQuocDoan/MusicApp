import Link from "next/link";
import SiderMenu from "./SiderMenu";
import Image from "next/image";
export default function Sider() {
  return (
    <>
      <div className="bg-[#212121] w-[280px] h-full fixed">
        <div className="bg-[#1C1C1C] py-[25px] px-[30px]">
          <Link href="/">
            <Image
              width={200}
              height={66}
              src="/"
              alt="Logo"
              className="h-[66px] w-auto ml-auto mr-auto"
            ></Image>
          </Link>
        </div>
        <SiderMenu />
      </div>
    </>
  );
}
