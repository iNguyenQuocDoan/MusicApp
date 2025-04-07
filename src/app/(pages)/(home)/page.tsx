import SongItem from "@/app/components/song/SongItem";
import Title from "@/app/components/title/Title";
import Link from "next/link";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

export default function Home() {
  return (
    <>
      {/* Section1  */}
      <Section1 />
      {/* Section1 end */}

      {/* Section2 */}
      <Section2 />
      {/* Section2 end */}

      {/* Section3 */}
      <Section3 />
      {/* Section3 end */}
    </>
  );
}
