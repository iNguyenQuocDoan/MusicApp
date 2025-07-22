import CardInfo from "../../../components/card/CardInfo";
import Title from "../../../components/title/Title";
import Section3 from "./Section3";

export default function SongsDetailPage() {
  return (
    <>
      {/* CardInfo */}
      <CardInfo image="/Banner/image7.png" title="Co phong" />
      {/* Lời bài hát */}
      <div className="mt-[30px]">
        <Title text="Lời bài hát"></Title>
        <div className="bg-black rounded-[15px] p-[20px] text-white font-[500] text-[14px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          tempore esse, impedit ut doloribus quasi facilis? Odio doloremque,
          quam excepturi iste natus cumque quo quisquam, dicta sunt doloribus ad
          a.
        </div>
      </div>
      {/* Bài hát cùng danh mục */}
      <Section3 />
    </>
  );
}
