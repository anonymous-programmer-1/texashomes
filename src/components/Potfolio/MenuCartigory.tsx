import { useState } from "react";
import PortfolioCartigory from "./portfolioCartigory/PortfolioCartigory";

function MenuCartigory() {
  const [overview, setOverView] = useState<boolean>(true);
  const [returns, setReturns] = useState<boolean>(false);
  const [transaction, setTransaction] = useState<boolean>(false);
  function toOverview() {
    setOverView(!overview);
    setReturns(false);
    setTransaction(false);
  }
  function toReturns() {
    setOverView(false);
    setReturns(!returns);
    setTransaction(false);
  }
  function toTransaction() {
    setOverView(false);
    setReturns(false);
    setTransaction(!transaction);
  }
  return (
    <>
      <div className="bg-baseCard-color w-full flex h-fit  ">
        <div className="flex w-full lg:gap-8 gap-4 lg:pl-10 pl-5 pt-2 pb-2 overflow-hidden">
          <span
            className="pt-1 pb-1 border-[#0e0e77]   border-opacity-0 border-b-2 hover:border-baseDark-blue  hover:transition-all pointer"
            onClick={toOverview}
          >
            <h5 className="text-[0.9rem] font-bold text-gray-300">OVERVIEW</h5>
          </span>
          <span
            className="pt-1 pb-1 border-[#0e0e77]  border-opacity-0 border-b-2 hover:border-baseDark-blue  hover:transition-all pointer"
            onClick={toReturns}
          >
            <h5 className="text-[0.9rem] font-bold text-gray-300">RETURNS</h5>
          </span>
          <span
            className="pt-1 pb-1 border-[#0e0e77]  border-opacity-0 border-b-2 hover:border-baseDark-blue  hover:transition-all pointer"
            onClick={toTransaction}
          >
            <h5 className="text-[0.9rem] font-bold text-gray-300">
              TRANSACTION HISTORY
            </h5>
          </span>
        </div>
      </div>
      <PortfolioCartigory
        overview={overview}
        returns={returns}
        transactions={transaction}
      />
    </>
  );
}
export default MenuCartigory;
