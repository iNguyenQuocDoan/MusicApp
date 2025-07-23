/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Title from "../../../components/title/Title";
import { ref, set } from "firebase/database";
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const handleRegister = (event: any) => {
    event.preventDefault();
    const fullName = event.target.fullName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(authFirebase, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        set(ref(dbFirebase, "users/" + user.uid), {
          fullName: fullName,
        })
          .then(() => {
            console.log("User registered successfully");
            router.push("/");
          })
          .catch((error) => {
            console.error("Error registering user:", error);
          });
      }
    );
  };
  return (
    <>
      <div className="mt-[60px] w-[500px] mx-auto">
        <Title text="Đăng ký tài khoản" className="text-center" />
        <form onSubmit={handleRegister}>
          <div className="mb-[15px]">
            <label className="block mb-[5px] font-[600] text-[14px]" htmlFor="">
              <span className="text-white">Họ tên</span>
              <span className="text-red-500 ml-[5px]">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Ví dụ Nguyễn Văn A"
              className="h-[50px] w-full bg-white rounded-[6px] px-[16px] font-[600] text-[14px] outline-none"
              required={true}
            />
          </div>

          <div className="mb-[15px]">
            <label className="block mb-[5px] font-[600] text-[14px]" htmlFor="">
              <span className="text-white">Email</span>
              <span className="text-red-500 ml-[5px]">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Ví dụ abc@gmail.com"
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
              className="h-[50px] w-full bg-white rounded-[6px] px-[16px] font-[600] text-[14px] outline-none"
              required={true}
            />
          </div>

          <button
            type="submit"
            className="h-[50px] w-full bg-[#00ADEF] text-white rounded-[6px] font-[600] text-[16px]"
          >
            Đăng ký
          </button>
        </form>
      </div>
    </>
  );
}
