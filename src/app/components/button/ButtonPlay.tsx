/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { FaPlay } from "react-icons/fa";

export default function ButtonPlay(props: any) {
  const { id, image, title, singer, listen, link, audio } = props;
  const handlePlay = () => {
    const elementPlayAudio = document.querySelector(".play-audio");
    // phát nhạc
    if (elementPlayAudio) {
      const elementAudio: any = elementPlayAudio.querySelector(".inner-audio");
      const elementSource: any =
        elementPlayAudio.querySelector(".inner-source");
      elementSource.src = audio;
      elementAudio.load();
      elementAudio.play();
    }

    // hiện thị play audio
    if (elementPlayAudio.classList.contains("hidden")) {
      elementPlayAudio.classList.remove("hidden");
    }

    // Hiển thị ảnh
    const elementImage: any = elementPlayAudio.querySelector(".inner-image");
    if (elementImage) {
      elementImage.src = image;
      elementImage.alt = title;
    }
    // Hiển thị tiêu đề
    const elementTitle: any = elementPlayAudio.querySelector(".inner-title");
    if (elementTitle) {
      elementTitle.innerHTML = title;
    }

    // Hiển thị tên ca sĩ
    const elementSinger: any = elementPlayAudio.querySelector(".inner-singer");
    if (elementSinger) {
      elementSinger.innerHTML = singer;
    }

    // Thêm class active vào button play
    const elementButtonPlay: any = document.querySelector(".inner-button-play");
    if (elementButtonPlay) {
      elementButtonPlay.classList.add("play");
    }
  };
  return (
    <button
      onClick={handlePlay}
      className="w-[34px] h-[34px] rounded-full border border-white inline-flex items-center justify-center text-[15px] mr-[10px]"
    >
      <FaPlay />
    </button>
  );
}
