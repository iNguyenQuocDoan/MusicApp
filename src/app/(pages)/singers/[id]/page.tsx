import CardInfo from "@/app/components/card/CardInfo";
import Section1 from "./Section1";

export default function SingerDetailPage() {
  return (
    <>
      {/* Card info */}
      <CardInfo
        image="/Banner/image8.png"
        title="Tùng lùn"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, quae
      provident qui cum impedit unde repellendus. Aut quisquam quos quibusdam
      pariatur dolor repellat alias deserunt autem. Soluta quam aut dicta?"
      />

      {/* Section1 - danh sách bài hát*/}
      <Section1 />
    </>
  );
}
