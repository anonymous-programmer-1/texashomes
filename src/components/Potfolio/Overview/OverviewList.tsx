function OverviewList() {
  const locationOrigin = window.location.origin;
  return (
    <div className="p-4 flex flex-wrap gap-4">
      <div className="transition-all w-full h-fit flex flex-col items-center  p-6 border-[1px] border-baseCard-borderColor bg-baseCard-color rounded-md">
        <h5 className="text-[1.2rem] self-start font-semibold text-gray-300">
          Historical Value
        </h5>
        <div className="flex flex-col items-center mt-6">
          <span className="fa fa-book text-[8rem] text-[#52515193]  rounded-lg "></span>
          <h5 className="text-[1.2rem] text-gray-300 mt-3 font-semibold">
            No Results
          </h5>
          <h5 className="mt-2 text-gray-300">
            Fund your account and invest in a deal to build your portfolio
          </h5>
        </div>
      </div>
      <div className="transition-all w-full h-fit flex flex-col items-center  p-6 border-[1px] border-baseCard-borderColor bg-baseCard-color rounded-md">
        <h5 className="text-[1.2rem] self-start font-semibold text-gray-300">
          Team Investors
        </h5>
        <div className="flex flex-col items-center mt-6">
          <span className="fa fa-users text-[8rem] text-[#52515193]  rounded-lg "></span>
          <h5 className="text-[1.2rem] text-gray-300 mt-3 font-semibold">
            No Results
          </h5>
          <h5 className="mt-2 text-gray-300">
            Invite friends to invest on top deals and get $20 invite bonuses
          </h5>
        </div>
      </div>
      <div className="transition-all w-full h-fit flex flex-col items-center  p-6 border-[1px] border-baseCard-borderColor bg-baseCard-color rounded-md">
        <h5 className="text-[1.2rem] self-start font-semibold text-gray-300">
          Invite Link
        </h5>
        <div className="flex flex-col items-center mt-6">
          <span className="flex felx-col">
            <i className="fa fa-copy text-[3rem] text-baseDark-blue"></i>
            <span className="w-fit h-fit border-[1px] border-baseCard-borderColor bg-[#52515193] p-2 rounded-md hover:bg-baseLight-blue transition-all pointer  text-gray-300">
              <h5 className="text-[1rem] font-bold ">COPY LINK</h5>
            </span>
          </span>
          <span className="flex flex-wrap pl-1 pr-1 overflow-hidden text-baseDark-blue font-semibold">
            <h5 className="text-clip mt-2  ">{locationOrigin}</h5>
            <h5 className="text-clip mt-2  ">/invite</h5>
            <h5 className="text-clip mt-2  ">/anonymousprogramer</h5>
            <h5 className="text-clip mt-2  ">/8467</h5>
          </span>
        </div>
      </div>
    </div>
  );
}
export default OverviewList;
