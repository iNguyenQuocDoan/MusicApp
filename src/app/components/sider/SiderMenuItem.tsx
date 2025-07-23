/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiderMenuItem(props: any) {
  const { item, isLogin } = props;
  const pathName = usePathname(); // lay path name

  // Kiểm tra nếu item không tồn tại
  if (!item) {
    return null;
  }

  // Nếu item không có thuộc tính isLogin, hiển thị luôn
  // Nếu có thuộc tính isLogin, kiểm tra với trạng thái đăng nhập
  const shouldShow = item.isLogin === undefined || item.isLogin === isLogin;

  return (
    <>
      {shouldShow && (
        <li className="mb-[30px]">
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
      )}
    </>
  );
}
