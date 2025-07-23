/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
export default function PlayVolume() {
  const handleChange = (event: any) => {
    const elementPlayAudio = document.querySelector(".play-audio");

    if (elementPlayAudio) {
      const elementAudio: any = elementPlayAudio.querySelector(".inner-audio");
      elementAudio.volume = event.target.value / 100; // Âm lượng
    }
    console.log(event.target.value);
  };
  return (
    <>
      <div className="w-[184px] flex items-end inner-volume">
        {" "}
        <div className="mt-[11px] relative">
          <div className="h-[4px] w-0 bg-[#00ADEF] rounded-[50px] absolute left-0 top-[13px] inner-current"></div>
          <input
            type="range"
            min={0}
            max={100}
            defaultValue={100}
            className="w-full h-[4px] bg-[#FFFFFF0A] cursor-pointer range-sm innter-total"
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}
