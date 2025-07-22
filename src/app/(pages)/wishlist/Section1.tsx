import SongItem2 from "../../components/song/SongItem2";
import Title from "../../components/title/Title";

export default function Section1() {
  const data = [
    {
      image: "/Banner/image7.png",
      title: "bai hat 1",
      singer: "singer 1",
      time: "11",
    },
    {
      image: "/Banner/image7.png",
      title: "bai hat 2",
      singer: "singer 2",
      time: "22",
    },
    {
      image: "/Banner/image7.png",
      title: "bai hat 3",
      singer: "singer 3",
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
