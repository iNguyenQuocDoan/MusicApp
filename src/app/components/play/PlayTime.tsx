/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
export default function PlayTime() {
  // tuagit
  const handleChange = (event: any) => {
    const time = parseFloat(event.target.value);
    const elementAudio: any = document.querySelector(
      ".play-audio .inner-audio"
    );
    elementAudio.currentTime = time;
  };
  return (
    <>
      <div className="mt-[11px] relative inner-play-time">
        <div className="h-[4px] w-0 bg-[#00ADEF] rounded-[50px] absolute left-0 top-[13px] inner-current"></div>
        <input
          type="range"
          min={0}
          max={0}
          defaultValue={0}
          className="w-full h-[4px] bg-[#FFFFFF0A] cursor-pointer range-sm inner-total"
          onChange={(event) => handleChange(event)}
        />
      </div>
    </>
  );
}
