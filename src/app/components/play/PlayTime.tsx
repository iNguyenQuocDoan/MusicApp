export default function PlayTime() {
  return (
    <>
      <div className="mt-[11px] relative">
        <div className="h-[4px] w-0 bg-[#00ADEF] rounded-[50px] absolute left-0 top-[13px]"></div>
        <input
          type="range"
          min={0}
          max={100}
          defaultValue={0}
          className="w-full h-[4px] bg-[#FFFFFF0A] cursor-pointer range-sm"
        />
      </div>
    </>
  );
}
