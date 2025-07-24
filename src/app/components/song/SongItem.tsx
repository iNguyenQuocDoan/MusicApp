import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa6";

import ButtonPlay from "../button/ButtonPlay";
import ButtonHeart from "../button/ButtonHeart";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SongItem(props: any) {
  const { id, image, title, singer, listen, link } = props;
  const [isCurrentSong, setIsCurrentSong] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const checkCurrentSong = () => {
      const elementPlayAudio = document.querySelector(".play-audio");
      if (elementPlayAudio) {
        const currentSongId = elementPlayAudio.getAttribute("song-id");
        const audio = elementPlayAudio.querySelector(
          ".inner-audio"
        ) as HTMLAudioElement;

        if (currentSongId === id) {
          setIsCurrentSong(true);
          setIsPlaying(!audio.paused);
        } else {
          setIsCurrentSong(false);
          setIsPlaying(false);
        }
      }
    };

    // Kiểm tra ban đầu
    checkCurrentSong();

    // Theo dõi sự thay đổi audio
    const elementPlayAudio = document.querySelector(".play-audio");
    if (elementPlayAudio) {
      const audio = elementPlayAudio.querySelector(
        ".inner-audio"
      ) as HTMLAudioElement;
      if (audio) {
        const handlePlay = () => checkCurrentSong();
        const handlePause = () => checkCurrentSong();

        audio.addEventListener("play", handlePlay);
        audio.addEventListener("pause", handlePause);

        // Cleanup
        return () => {
          audio.removeEventListener("play", handlePlay);
          audio.removeEventListener("pause", handlePause);
        };
      }
    }
  }, [id]);

  const handlePlayPause = () => {
    const elementPlayAudio = document.querySelector(".play-audio");
    if (elementPlayAudio) {
      const currentSongId = elementPlayAudio.getAttribute("song-id");
      const audio = elementPlayAudio.querySelector(
        ".inner-audio"
      ) as HTMLAudioElement;

      if (currentSongId === id) {
        // Cùng bài hát - toggle play/pause
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
      } else {
        // Bài hát khác - phát bài mới
        // Trigger ButtonPlay logic
        const buttonPlay = document.querySelector(
          `[data-song="${id}"] .inner-button-play`
        );
        if (buttonPlay) {
          (buttonPlay as HTMLButtonElement).click();
        }
      }
    }
  };

  return (
    <>
      <div
        className={`rounded-[15px] p-[10px] flex items-center transition-colors ${
          isCurrentSong
            ? "bg-[#00ADEF20] border border-[#00ADEF]"
            : "bg-[#212121] hover:bg-[#2a2a2a]"
        }`}
        data-song={id}
      >
        <div className="aspect-square truncate w-[76px] h-[76px] mr-[10px] relative">
          <Image
            src={image}
            alt={title || "Song image"}
            fill
            sizes="76px"
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="mb-[2px] flex items-center">
            <Link
              href={link}
              className={`font-[600] text-[16px] ${
                isCurrentSong ? "text-[#00ADEF]" : "text-[#FFFFFF]"
              }`}
            >
              {title}
            </Link>
            {isCurrentSong && isPlaying && (
              <div className="ml-2 flex space-x-1">
                <div className="w-1 h-4 bg-[#00ADEF] animate-pulse"></div>
                <div
                  className="w-1 h-4 bg-[#00ADEF] animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-1 h-4 bg-[#00ADEF] animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            )}
          </div>
          <div className="font-[400] text-[12px] text-[#FFFFFF80] mb-[5px]">
            {singer}
          </div>
          <div className="font-[400] text-[12px] text-[#FFFFFF]">
            {listen.toLocaleString("vi-VN")}
          </div>
        </div>
        <div className="p-[10px]">
          {isCurrentSong ? (
            <button
              onClick={handlePlayPause}
              className="w-[34px] h-[34px] rounded-full border border-white inline-flex items-center justify-center text-[15px] text-white mr-[10px] bg-[#00ADEF]"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
          ) : (
            <ButtonPlay
              {...props}
              className="w-[34px] h-[34px] rounded-full border border-white inline-flex items-center justify-center text-[15px] text-white mr-[10px] inner-button-play"
            />
          )}
          <ButtonHeart {...props} />
        </div>
      </div>
    </>
  );
}
