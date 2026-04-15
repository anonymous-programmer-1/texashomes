function Rating() {
  return (
    <div className="bg-[#171718] flex flex-wrap gap-4 p-4 pt-0 justify-around  overflow-hidden">
      <div className="min-w-[21rem] h-[10rem]  border-[1px] p-4 border-gray-400 bg-[#0a0a14ee] rounded-md  flex-grow">
        <span className="flex flex-col gap-2">
          <i className="fa fa-location text-[#060685] text-[1.3rem]"></i>
          <h5 className="text-gray-400 text-[1rem] font-semibold">
            PRICIPAL OUTSTANDING
          </h5>
        </span>
        <h5 className="text-gray-300 font-semibold text-[1.4rem] mt-2">
          $846,033,0
        </h5>
      </div>
      <div className="min-w-[21rem] h-[10rem] ] border-[1px] p-4 border-gray-400 bg-[#0a0a14ee] rounded-md flex-grow ">
        <span className="flex flex-col gap-2">
          <i className="fa fa-signal text-[#060685] text-[1.3rem]"></i>
          <h5 className="text-gray-400 text-[1rem] font-semibold">Deals</h5>
        </span>
        <h5 className="text-gray-300 font-semibold text-[1.4rem] mt-2">600</h5>
      </div>
      <div className="min-w-[21rem] h-[10rem]  border-[1px] p-4 border-gray-400 bg-[#0a0a14ee] rounded-md flex-grow">
        <span className="flex flex-col gap-2">
          <i className="fa fa-chart-line text-[#060685] text-[1.3rem]"></i>
          <h5 className="text-gray-400 text-[1rem] font-semibold">
            STASTISTICS
          </h5>
        </span>
        <span className="flex mt-2">
          <h5 className="text-gray-300 font-semibold text-[1.1rem] ">
            Avg Deals size
          </h5>
          <h5 className="ml-auto text-gray-300 font-semibold text-[1.1rem] ">
            $4,846,033,0
          </h5>
        </span>
        <span className="flex mt-1">
          <h5 className="text-gray-300 font-semibold text-[1.1rem] ">
            Avg Intarest Rate
          </h5>
          <h5 className="ml-auto text-gray-300 font-semibold text-[1.1rem] ">
            16.2%
          </h5>
        </span>
      </div>
    </div>
  );
}
export default Rating;
