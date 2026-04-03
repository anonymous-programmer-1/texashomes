function FeaturedIn() {
  return (
    <div className="w-full mt-20 mb-20 pl-8 pr-8 appear-element overflow-hidden whitespace-nowrap">
      <span className="flex h-full  mt-4">
        <h5 className="text-[#0c0cbe] font-semibold text-[1rem]">
          FEATURED IN
        </h5>
        <span className="block w-1 bg-[#0c0cbe] h-6 ml-1"></span>
      </span>
      <div className="w-full flex mt-4 pl-10 pr-10 gap-12 justify-evenly  track-slide">
        <span className="font-mono text-[1.7rem] font-semibold">
          <h5>FinTech</h5>
        </span>
        <span className="font-mono text-[1.7rem] font-normal">
          <h5>Nasdaq</h5>
        </span>
        <span className="font-mono text-[1.7rem] font-bold">
          <h5>Bloomberg</h5>
        </span>
        <span className=" text-[0.9rem] font-bold flex flex-row-reverse">
          <span className="flex flex-col">
            <h5 className="m-0">Private Debt</h5>
            <h5 className="mt-[-5px]">Investors</h5>
          </span>
          <span className="block w-1 bg-[black] h-9 ml-1 mt-0.5 mr-1"></span>
        </span>
        <span className="font-mono text-[1.7rem] font-bold">
          <h5>Tesla</h5>
        </span>
        <span className="flex">
          <h5 className="text-[0.6rem] font-semibold mt-3.5">REAL</h5>
          <h5 className="font-mono text-[1.9rem] font-bold ">V</h5>
          <h5 className="text-[0.6rem] font-semibold mt-3.5">ISON</h5>
        </span>
        <span>
          <span className="flex flex-col">
            <h5 className="font-mono text-[1.7rem] font-bold text-center">
              TC
            </h5>
            <h5 className="text-[0.7rem] font-semibold mt-[-10px]">
              TechCrunch
            </h5>
          </span>
        </span>
        {/**dulplicate */}
        <span className="font-mono text-[1.7rem] font-semibold">
          <h5>FinTech</h5>
        </span>
        <span className="font-mono text-[1.7rem] font-normal">
          <h5>Nasdaq</h5>
        </span>
        <span className="font-mono text-[1.7rem] font-bold">
          <h5>Bloomberg</h5>
        </span>
        <span className=" text-[0.9rem] font-bold flex flex-row-reverse">
          <span className="flex flex-col">
            <h5 className="m-0">Private Debt</h5>
            <h5 className="mt-[-5px]">Investors</h5>
          </span>
          <span className="block w-1 bg-[black] h-9 ml-1 mt-0.5 mr-1"></span>
        </span>
        <span className="font-mono text-[1.7rem] font-bold">
          <h5>Tesla</h5>
        </span>
        <span className="flex">
          <h5 className="text-[0.6rem] font-semibold mt-3.5">REAL</h5>
          <h5 className="font-mono text-[1.9rem] font-bold ">V</h5>
          <h5 className="text-[0.6rem] font-semibold mt-3.5">ISON</h5>
        </span>
        <span>
          <span className="flex flex-col">
            <h5 className="font-mono text-[1.7rem] font-bold text-center">
              TC
            </h5>
            <h5 className="text-[0.7rem] font-semibold mt-[-10px]">
              TechCrunch
            </h5>
          </span>
        </span>
      </div>
    </div>
  );
}
export default FeaturedIn;
