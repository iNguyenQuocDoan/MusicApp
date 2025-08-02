/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Title from "../../../components/title/Title";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authFirebase } from "@/app/firebaseConfig";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const handleLogin = (event: any) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(authFirebase, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        if (user) {
          console.log("Đăng nhập thành công");
          router.push("/");
        }
      })
      .catch((error) => {
        console.error("Lỗi đăng nhập:", error);
      });
  };
  return (
    <>
      <div className="mt-[60px] w-[500px] mx-auto">
        <Title text="Đăng nhập tài khoản" className="text-center" />
        <form className="" onSubmit={handleLogin}>
          <div className="mb-[15px]">
            <label className="block mb-[5px] font-[600] text-[14px]" htmlFor="">
              <span className="text-white">Email</span>
              <span className="text-red-500 ml-[5px]">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="abc@gmail.com hoặc là tự đăng kí"
              className="h-[50px] w-full bg-white rounded-[6px] px-[16px] font-[600] text-[14px] outline-none"
              required={true}
            />
          </div>

          <div className="mb-[15px]">
            <label
              className="block mb-[5px] font-[600] text-[14px]"
              htmlFor="password"
            >
              <span className="text-white">Password</span>
              <span className="text-red-500 ml-[5px]">*</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password: 123456"
              className="h-[50px] w-full bg-white rounded-[6px] px-[16px] font-[600] text-[14px] outline-none"
              required={true}
            />
          </div>

          <button
            type="submit"
            className="h-[50px] w-full bg-[#00ADEF] text-white rounded-[6px] font-[600] text-[16px]"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </>
  );
}
