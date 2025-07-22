import CardItem from "@/app/components/card/CardItem";
import Title from "@/app/components/title/Title";

export default function Section1() {
  const data = [
    {
      image: "/Banner/AllanWalker.png",
      title: "nhac gia",
      description: "1",
      link: "",
    },
    {
      image: "/Banner/AllanWalker.png",
      title: "nhac khong gia",
      description: "2",
      link: "",
    },
    {
      image: "/Banner/AllanWalker.png",
      title: "nhac chua gia",
      description: "3",
      link: "",
    },
    {
      image: "/Banner/AllanWalker.png",
      title: "nhac chua tre",
      description: "4",
      link: "",
    },
    {
      image: "/Banner/AllanWalker.png",
      title: "nhac da tre",
      description: "5",
      link: "",
    },
    {
      image: "/Banner/AllanWalker.png",
      title: "nhac da tre",
      description: "5",
      link: "",
    },
  ];
  return (
    <>
      <div className="mt-[30px]">
        <Title text="Danh Sách Ca Sĩ" />
        {/* List */}
        <div className="grid grid-cols-1 gap-[10px]">
          {/* Item */}
          <div className="grid grid-cols-5 gap-[20px]">
            {data.map((item, index) => (
              <CardItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
