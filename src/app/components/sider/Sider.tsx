import Link from "next/link";
import SiderMenu from "./SiderMenu";

export default function Sider() {
  return (
    <>
      <div className="bg-[#212121] w-[280px] h-full fixed">
        <div className="bg-[#1C1C1C] py-[25px] px-[30px]">
          <Link href="/">
            {/* // eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/image.png"
              alt="Logo"
              className="h-[66px] w-auto ml-auto mr-auto"
            ></img>
          </Link>
        </div>
        <SiderMenu />
      </div>
    </>
  );
}
