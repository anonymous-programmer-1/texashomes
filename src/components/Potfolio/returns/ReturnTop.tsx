function ReturnTop() {
  return (
    <div className="bg-[#171718] p-4">
      <div className="flex flex-wrap gap-4  justify-around  overflow-hidden">
        <span className="min-w-[21rem] h-[13rem] ] border-[1px] p-4 border-baseCard-borderColor bg-baseCard-color rounded-md flex-grow">
          <span className="flex flex-col gap-0.5">
            <i className="fa fa-chart-line text-[#060685] text-[1.3rem]"></i>
            <h5 className="text-gray-400 text-[1rem] font-semibold mt-2">
              TOTAL EARNED
            </h5>
            <span className="flex mt-1">
              <h5 className="text-gray-300 text-[0.9rem]">Interest</h5>
              <h5 className="text-gray-200 text-[1.2rem] font-semibold ml-auto">
                -
              </h5>
            </span>
            <span className="flex ">
              <h5 className="text-gray-300 text-[0.9rem]">Fees</h5>
              <h5 className="text-gray-200 text-[1.2rem] font-semibold ml-auto">
                -
              </h5>
            </span>
            <span className="flex ">
              <h5 className="text-gray-300 text-[0.9rem]">Other</h5>
              <h5 className="text-gray-200 text-[1.2rem] font-semibold ml-auto">
                -
              </h5>
            </span>
            <span className="flex ">
              <h5 className="text-gray-300 text-[0.9rem]">Net Return</h5>
              <h5 className="text-gray-200 text-[1.2rem] font-semibold ml-auto">
                -
              </h5>
            </span>
          </span>
        </span>
        <span className="min-w-[21rem] h-[13rem] ] border-[1px] p-4 border-baseCard-borderColor bg-baseCard-color rounded-md flex-grow">
          <span className="flex flex-col gap-0.5">
            <i className="fa fa-ring text-[#060685] text-[1.3rem]"></i>
            <h5 className="text-gray-400 text-[1rem] font-semibold mt-2">
              PRTFOLIO VALUE
            </h5>
            <span className="flex mt-1">
              <h5 className="text-gray-300 text-[0.9rem]">Starting Balance</h5>
              <h5 className="text-gray-200 text-[1.2rem] font-semibold ml-auto">
                -
              </h5>
            </span>
            <span className="flex ">
              <h5 className="text-gray-300 text-[0.9rem]">
                Net Withdrawals/Deposits
              </h5>
              <h5 className="text-gray-200 text-[1.2rem] font-semibold ml-auto">
                -
              </h5>
            </span>

            <span className="flex ">
              <h5 className="text-gray-300 text-[0.9rem]">Net Return</h5>
              <h5 className="text-gray-200 text-[1.2rem] font-semibold ml-auto">
                -
              </h5>
            </span>
            <span className="flex ">
              <h5 className="text-gray-300 text-[0.9rem]">
                Total Portfolio Value
              </h5>
              <h5 className="text-gray-200 text-[1.2rem] font-semibold ml-auto">
                -
              </h5>
            </span>
          </span>
        </span>
        <span className="min-w-[21rem] min-h-[13rem] max-h-fit border-[1px] p-4 border-baseCard-borderColor bg-baseCard-color rounded-md flex-grow">
          <span className="flex flex-col gap-0.5">
            <i className="fa fa-percent text-[#060685] text-[1.3rem]"></i>
            <h5 className="text-gray-400 text-[1rem] font-semibold mt-2">
              INTERNAL RATE OF RETURN
            </h5>
            <h5 className="text-gray-200 text-[1.2rem] font-semibold mt-2">
              -
            </h5>
            <span>
              <h5 className="text-gray-300 text-[0.9rem]">
                The Internal Rate of Return (IRR) is the discount rate that sets
                the net present value (NPV) of all cash flows to zero,
                calculated as of Apr 17, 2026. The calculation assumes that all
                outstanding principal is repaid as of today and excludes any
                future interest payments. Deals with no maturity date are
                excluded until the total principal has been repaid or charged
                off. See here for more information.
              </h5>
            </span>
          </span>
        </span>
      </div>
    </div>
  );
}
export default ReturnTop;
