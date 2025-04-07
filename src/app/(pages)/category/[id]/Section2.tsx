import SongItem2 from "@/app/components/song/SongItem2";
import Title from "@/app/components/title/Title";

export default function Section2() {
  const data = [
    {
      image: "",
      title: "",
      singer: "1",
      time: "11",
    },
    {
      image: "",
      title: "22",
      singer: "22",
      time: "22",
    },
    {
      image: "",
      title: "",
      singer: "3",
      time: "33",
    },
  ];
  return (
    <>
      <div className="mt-[30px]">
        <Title text="Danh Sach Bai Hat" />
        {/* List */}
        <div className="grid grid-cols-1 gap-[10px]">
          {/* Item */}
          {data.map((item, index) => (
            <SongItem2 key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
