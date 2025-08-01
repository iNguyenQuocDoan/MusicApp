/* eslint-disable @typescript-eslint/no-explicit-any */

import Section1 from "./Section1";
import Section2 from "./Section2";

export default async function SingerDetailPage({ params }: any) {
  const { id } = await params; // Lấy id từ params
  console.log(id, "id");
  return (
    <>
      {/* Card info */}
      <Section1 id={id} />
      {/* Section1 - danh sách bài hát*/}
      <Section2 id={id} />
    </>
  );
}
