"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa6";

import ButtonPlay from "../button/ButtonPlay";
import ButtonHeart2 from "../button/ButtonHeart2";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SongItem2(props: any) {
  const { id, image, title, singer, time, link } = props;
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
        className={`flex items-center justify-between py-[10px] px-[18px] rounded-[15px] transition-colors ${
          isCurrentSong
            ? "bg-[#00ADEF20] border border-[#00ADEF]"
            : "bg-[#212121] hover:bg-[#2a2a2a]"
        }`}
        data-song={id}
      >
        {/* Left */}
        <div className="flex items-center w-[40%]">
          {isCurrentSong ? (
            <button
              onClick={handlePlayPause}
              className="text-[20px] text-[#00ADEF] mr-2"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
          ) : (
            <ButtonPlay
              {...props}
              className="text-[20px] text-white inner-button-play"
            />
          )}
          <div className="aspect-square w-[42px] h-[42px] rounded-[8px] truncate mx-[12px] relative">
            <Image
              src={image}
              alt={title || "Song image"}
              fill
              sizes="42px"
              className="object-cover"
            />
          </div>
          <div
            className={`font-[500] text-[16px] mb-[2px] flex items-center ${
              isCurrentSong ? "text-[#00ADEF]" : "text-[#FFFFFF]"
            }`}
          >
            {link ? (
              <Link
                href={link}
                className="hover:text-blue-400 transition-colors"
              >
                {title}
              </Link>
            ) : (
              title
            )}
            {isCurrentSong && isPlaying && (
              <div className="ml-2 flex space-x-1">
                <div className="w-1 h-3 bg-[#00ADEF] animate-pulse"></div>
                <div
                  className="w-1 h-3 bg-[#00ADEF] animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-1 h-3 bg-[#00ADEF] animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            )}
          </div>
        </div>
        {/* Center */}
        <div className=" w-[30%]">
          <div className="font-[400] text-[14px] text-[#BBBBBB]">{singer}</div>
        </div>
        {/* Right */}
        <div className="w-[30%] text-right flex items-center justify-end">
          <div className="font-[400] text-[14px] text-white mr-[18px]">
            {time}
          </div>
          <ButtonHeart2 {...props} />
        </div>
      </div>
    </>
  );
}
