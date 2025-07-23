/* eslint-disable @typescript-eslint/no-explicit-any */
import Section1 from "./Section1";
import Section2 from "./Section2";

export default async function SongsByCategoryPage({ params }: any) {
  let { id } = await params; // Lấy id từ params
  id = `${id}`; // Chuyển đổi id sang chuỗi nếu cần
  console.log(id, "id");

  return (
    <>
      {/* CardInfo end*/}
      <Section1 id={id} />
      {/* Section1 end */}

      {/* Section2 */}
      <Section2 id={id} />
      {/* Section2 end */}
    </>
  );
}
