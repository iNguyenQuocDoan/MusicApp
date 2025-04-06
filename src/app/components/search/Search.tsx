import { IoSearchOutline } from "react-icons/io5";

export default function Search() {
  return (
    <>
      <form className="bg-[#212121] sticky rounded-[50px] mt-[20px] top-[20px] z-[999] flex py-[15px] px-[30px]">
        <input
          type="text"
          name="keyword"
          placeholder="Search song...abc"
          className="order-2 text-[16px] font-[600] text-white bg-transparent outline-none flex-1"
        />
        <button
          type="submit"
          className="order-1 text-[22px] text-white mr-[20px] cursor-pointer "
        >
          {" "}
          <IoSearchOutline />
        </button>
      </form>
    </>
  );
}
