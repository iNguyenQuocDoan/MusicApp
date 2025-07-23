/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { CiPause1, CiPlay1 } from "react-icons/ci";
import { FaStepBackward, FaStepForward } from "react-icons/fa";

export default function PlayActions() {
  const handlePlay = () => {
    const elementPlayAudio = document.querySelector(".play-audio");
    if (elementPlayAudio) {
      const elementButtonPlay: any =
        elementPlayAudio.querySelector(".inner-button-play");
      const elementAudio: any = elementPlayAudio.querySelector(".inner-audio");

      if (elementButtonPlay?.classList.contains("play")) {
        elementButtonPlay.classList.remove("play");
        elementAudio.pause();
      } else {
        elementButtonPlay?.classList.add("play");
        elementAudio.play();
      }
    }
  };

  const handlePrevious = () => {
    const elementPlayAudio: any = document.querySelector(".play-audio");
    const idSongCurrent = elementPlayAudio.getAttribute("song-id");
    console.log("Current song ID:", idSongCurrent);

    if (idSongCurrent) {
      const songList: any = document.querySelector("[song-list]");

      if (songList) {
        const elementSongCurrent = songList.querySelector(
          `[data-song="${idSongCurrent}"]`
        );

        const elementSongPrevious = elementSongCurrent?.previousElementSibling;

        if (elementSongPrevious) {
          const buttonPlay =
            elementSongPrevious.querySelector(".inner-button-play");

          if (buttonPlay) {
            buttonPlay.click();
          }
        } else {
          console.log("No previous song available");
        }
      }
    }
  };

  const handleNext = () => {
    const elementPlayAudio: any = document.querySelector(".play-audio");
    const idSongCurrent = elementPlayAudio.getAttribute("song-id");
    console.log("Current song ID:", idSongCurrent);

    if (idSongCurrent) {
      const songList: any = document.querySelector("[song-list]");

      if (songList) {
        const elementSongCurrent = songList.querySelector(
          `[data-song="${idSongCurrent}"]`
        );

        const elementSongNext = elementSongCurrent?.nextElementSibling;

        if (elementSongNext) {
          const buttonPlay =
            elementSongNext.querySelector(".inner-button-play");

          if (buttonPlay) {
            buttonPlay.click();
          }
        } else {
          console.log("No next song available");
        }
      }
    }
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <button className="text-white text-[16px]">
          <FaStepBackward onClick={handlePrevious} />
        </button>
        <button
          onClick={handlePlay}
          className="bg-[#00ADEF] text-[16px] h-[32px] w-[32px] text-white rounded-full  inline-flex justify-center items-center mx-[52px] inner-button-play"
        >
          <CiPlay1 className="inner-icon-play" />
          <CiPause1 className="inner-icon-pause" />
        </button>
        <button className="text-white text-[16px]" onClick={handleNext}>
          <FaStepForward />
        </button>
      </div>
    </>
  );
}
