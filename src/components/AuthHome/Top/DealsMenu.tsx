import MenuCategory from "./MenuCategory";
import { useState } from "react";
function DealsMenu() {
  const [withdrawAndDeposit, setWithdrawAndDeposit] = useState<boolean>(false);
  return (
    <>
      <div className="w-full flex h-14 bg-[#171718] items-center">
        <span className="lg:pl-10 pl-5 text-gray-200 text-[1.5rem]">
          <h5>Deals</h5>
        </span>
        <span className="w-fit h-fit  bg-[#3a3ac5] hover:bg-[#0e0e77]  hover:transition-all p-1 pl-2 pr-2 font-semibold text-gray-100 rounded-md ml-auto mr-5 pointer">
          <h5
            className="hidden lg:block"
            onClick={() => setWithdrawAndDeposit(!withdrawAndDeposit)}
          >
            ADD/WITHDRAW FUNDS
          </h5>
          <h5
            className="lg:hidden block"
            onClick={() => setWithdrawAndDeposit(!withdrawAndDeposit)}
          >
            ADD/WITHDRAW
          </h5>
          <div>
            {withdrawAndDeposit && (
              <div className="absolute mt-2 border-[1px] bg-baseCard-color border-baseCard-borderColor  rounded-lg pt-0.5 pb-0.5 transition-all">
                <span className="block pl-4 pr-4 pt-2 pb-2 hover:bg-baseCard-borderColor transition-all">
                  <h5>Fund Account</h5>
                </span>
                <span className="block mt-1 pl-4 pr-4 pt-2 pb-2 hover:bg-baseCard-borderColor transition-all">
                  <h5>Withdraw</h5>
                </span>
              </div>
            )}
          </div>
        </span>
      </div>
      <MenuCategory />
    </>
  );
}
export default DealsMenu;
