import { useState } from "react";
function MenuCategory() {
  const [sharesControl, setSharesControl] = useState<boolean>(false);
  const [statusControl, setStatusControl] = useState<boolean>(false);
  const [finacControl, setFinancControl] = useState<boolean>(false);
  return (
    <div className="w-full min-h-14 max-h-fit pb-4 bg-[#171718]  ">
      <div className="flex flex-wrap w-full h-full items-center lg:pl-10 pl-5 gap-2.5 ">
        <span className="flex flex-col gap-0.5">
          <h5 className="text-gray-400">Shares/Minimum</h5>
          <span className="w-[10rem] h-fit max-w-fit">
            <span
              className="w-[9.5rem]  h-fit flex pl-2 border-[0.5px] bg-transparent text-gray-400 font-semibold rounded-md"
              onClick={() => {
                setSharesControl(!sharesControl);
                setStatusControl(false);
                setFinancControl(false);
              }}
            >
              <h5>ALL</h5>
              {sharesControl ? (
                <i className="fas fa-angle-up mt-1 ml-auto mr-1"></i>
              ) : (
                <i className="fas fa-angle-down mt-1 ml-auto mr-1"></i>
              )}
            </span>
            {sharesControl && (
              <div className="pt-0.5">
                <div className="flex flex-col gap-3 max-w-fit absolute z-[5] bg-[#0d0d13] text-[1rem] p-2 pt-4 pb-4 rounded-b-sm transition-all">
                  <span className=" max-w-fit  h-fit flex   bg-transparent text-gray-400 font-semibold rounded-md">
                    <h5>$200 - $1,000k</h5>
                  </span>
                  <span className=" max-w-fit  h-fit flex   bg-transparent text-gray-400 font-semibold rounded-md">
                    <h5>$1,000k - $3,000k</h5>
                  </span>
                  <span className=" max-w-fit  h-fit flex   bg-transparent text-gray-400 font-semibold rounded-md">
                    <h5>$3,000k - $5,000k</h5>
                  </span>
                  <span className=" max-w-fit  h-fit flex   bg-transparent text-gray-400 font-semibold rounded-md">
                    <h5>$5,000k - $10,000k</h5>
                  </span>
                  <span className=" max-w-fit  h-fit flex   bg-transparent text-gray-400 font-semibold rounded-md">
                    <h5>$10,000k +</h5>
                  </span>
                </div>
              </div>
            )}
          </span>
        </span>
        <span className="flex flex-col gap-0.5 ">
          <h5 className="text-gray-400">Financing Type</h5>
          <span
            className="w-[8rem] h-fit flex pl-2 border-[0.5px] bg-transparent text-gray-400 font-semibold rounded-md"
            onClick={() => {
              setFinancControl(!finacControl);
              setSharesControl(false);
              setStatusControl(false);
            }}
          >
            <h5>ALL</h5>
            {finacControl ? (
              <i className="fas fa-angle-up mt-1 ml-auto mr-1"></i>
            ) : (
              <i className="fas fa-angle-down mt-1 ml-auto mr-1"></i>
            )}
          </span>
          {finacControl && (
            <div className="pt-0.5">
              <div className="flex flex-col gap-3  w-[8rem] absolute z-[5] bg-[#0d0d13] text-[1rem] p-2 pt-4 pb-4 rounded-b-sm transition-all">
                <span className="  w-[8rem] h-fit flex   bg-transparent text-gray-400 font-semibold rounded-md">
                  <h5>Loan</h5>
                </span>
                <span className="  w-[8rem] h-fit flex   bg-transparent text-gray-400 font-semibold rounded-md">
                  <h5>Asset Based</h5>
                </span>
              </div>
            </div>
          )}
        </span>
        <span className="flex flex-col gap-0.5">
          <h5 className="text-gray-400">Statues</h5>
          <span
            className="w-[8rem] h-fit flex pl-2 border-[0.5px] bg-transparent text-gray-200 font-semibold rounded-md"
            onClick={() => {
              setStatusControl(!statusControl);
              setSharesControl(false);
              setFinancControl(false);
            }}
          >
            <h5>FUNDING</h5>
            {statusControl ? (
              <i className="fas fa-angle-up mt-1 ml-auto mr-1"></i>
            ) : (
              <i className="fas fa-angle-down mt-1 ml-auto mr-1"></i>
            )}
          </span>
          {statusControl && (
            <div className="pt-0.5">
              <div className="flex flex-col gap-3  w-[8rem] absolute z-[5] bg-[#0d0d13] text-[1rem] p-2 pt-4 pb-4 rounded-b-sm transition-all ">
                <span className="  w-[8rem] h-fit flex   bg-transparent text-gray-400 font-semibold rounded-md">
                  <h5>NEW</h5>
                </span>
                <span className="  w-[8rem] h-fit flex   bg-transparent text-gray-400 font-semibold rounded-md">
                  <h5>ENDED</h5>
                </span>
              </div>
            </div>
          )}
        </span>
      </div>
    </div>
  );
}
export default MenuCategory;
