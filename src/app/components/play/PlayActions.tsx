/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { CiPause1, CiPlay1 } from "react-icons/ci";
import { FaStepBackward, FaStepForward } from "react-icons/fa";

export default function PlayActions() {
  const handlePlay = () => {
    const elementPlayAudio = document.querySelector(".play-audio");
    if (elementPlayAudio) {
      const elementButtonPlay: any =
        document.querySelector(".inner-button-play");
      const elementAudio: any = document.querySelector(".inner-audio");

      if (elementButtonPlay?.classList.contains("play")) {
        elementButtonPlay.classList.remove("play");
        elementAudio.pause();
      } else {
        elementButtonPlay?.classList.add("play");
        elementAudio.play();
      }
    }
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <button className="text-white text-[16px]">
          <FaStepBackward />
        </button>
        <button
          onClick={handlePlay}
          className="bg-[#00ADEF] text-[16px] h-[32px] w-[32px] text-white rounded-full  inline-flex justify-center items-center mx-[52px] inner-button-play"
        >
          <CiPlay1 className="inner-icon-play" />
          <CiPause1 className="inner-icon-pause" />
        </button>
        <button className="text-white text-[16px]">
          <FaStepForward />
        </button>
      </div>
    </>
  );
}
