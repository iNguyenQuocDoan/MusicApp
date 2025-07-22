import Title from "@/app/components/title/Title";

export default function RegisterPage() {
  return (
    <>
      <div className="mt-[60px] w-[500px] mx-auto">
        <Title text="Đăng ký tài khoản" className="text-center" />
        <form action="" className="">
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
            Đăng nhập
          </button>
        </form>
      </div>
    </>
  );
}
