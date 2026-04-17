function OverviewTop() {
  return (
    <div className="bg-[#171718] p-4">
      <div className="flex flex-wrap gap-4  justify-around  overflow-hidden">
        <span className="min-w-[21rem] h-[10rem] ] border-[1px] p-4 border-baseCard-borderColor bg-baseCard-color rounded-md flex-grow">
          <span className="flex flex-col gap-2">
            <i className="fa fa-ring text-[#060685] text-[1.3rem]"></i>
            <h5 className="text-gray-400 text-[1rem] font-semibold">
              TOTAL VALUE
            </h5>
            <h5 className="text-gray-200 text-[1.2rem] font-semibold">$0.00</h5>
          </span>
        </span>
        <span className="min-w-[21rem] h-[10rem] ] border-[1px] p-4 border-baseCard-borderColor bg-baseCard-color rounded-md flex-grow">
          <span className="flex flex-col gap-2">
            <i className="fa fa-signal text-[#060685] text-[1.3rem]"></i>
            <h5 className="text-gray-400 text-[1rem] font-semibold">
              INTEREST RECEIVED
            </h5>
            <span className="flex ">
              <h5 className="text-gray-300">Year-To-Date</h5>
              <h5 className="text-gray-200 text-[1.2rem] font-semibold ml-auto">
                -
              </h5>
            </span>
            <span className="flex mt-[-8px]">
              <h5 className="text-gray-300">All-Time</h5>
              <h5 className="text-gray-200 text-[1.2rem] font-semibold ml-auto">
                -
              </h5>
            </span>
          </span>
        </span>
        <span className="min-w-[21rem] h-[10rem] ] border-[1px] p-4 border-baseCard-borderColor bg-baseCard-color rounded-md flex-grow">
          <span className="flex flex-col gap-2">
            <i className="fa fa-percent text-[#060685] text-[1.3rem]"></i>
            <h5 className="text-gray-400 text-[1rem] font-semibold">
              WAVE INTERAST RATE
            </h5>
            <h5 className="text-gray-200 text-[1.2rem] font-semibold">-</h5>
          </span>
        </span>
      </div>
    </div>
  );
}
export default OverviewTop;
