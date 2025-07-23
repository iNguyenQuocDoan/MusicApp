import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function SongsDetailPage({ params }: any) {
  const { id } = await params; // Lấy id từ params
  return (
    <>
      {/* CardInfo */}
      <Section1 id={id} />
      {/* Lời bài hát */}
      <Section2 id={id} />
      {/* Bài hát cùng danh mục */}
      <Section3 id={id} />
    </>
  );
}
