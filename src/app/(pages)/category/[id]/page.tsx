import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";

export default function SongsByCategoryPage() {
  return (
    <>
      {/* CardInfo */}
      <CardInfo
        image="/Song/Top100NhacTre.png"
        title="Nhac gia"
        description="    Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của
              thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp dựa trên thông
              tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên
              bản web và phiên bản Mobile. Dữ liệu sẽ được lấy trong 30 ngày gần
              nhất và được cập nhật liên tục."
      />
      {/* CardInfo end*/}

      {/* Section2 */}
      <Section2 />
      {/* Section2 end */}
    </>
  );
}
