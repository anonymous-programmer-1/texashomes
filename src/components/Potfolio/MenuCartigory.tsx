import { useState, useRef, useEffect } from "react";
import PortfolioCartigory from "./portfolioCartigory/PortfolioCartigory";

function MenuCartigory() {
  const [overview, setOverView] = useState<boolean>(true);
  const [returns, setReturns] = useState<boolean>(false);
  const [transaction, setTransaction] = useState<boolean>(false);
  const overviewRef = useRef<HTMLHeadingElement>(null);
  const returnsRef = useRef<HTMLHeadingElement>(null);
  const transactionRef = useRef<HTMLHeadingElement>(null);
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
  useEffect(() => {
    if (!overviewRef.current || !returnsRef.current || !transactionRef.current)
      return;
    if (overview) {
      overviewRef.current.style.color = "#0e0e77";
    } else {
      overviewRef.current.style.color = "#D1D5DB";
    }
    if (returns) {
      returnsRef.current.style.color = "#0e0e77";
    } else {
      returnsRef.current.style.color = "#D1D5DB";
    }
    if (transaction) {
      transactionRef.current.style.color = "#0e0e77";
    } else {
      transactionRef.current.style.color = "#D1D5DB";
    }
  }, [overview, returns, transaction]);
  return (
    <>
      <div className="bg-baseCard-color w-full flex h-fit  ">
        <div className="flex w-full lg:gap-8 gap-4 lg:pl-10 pl-5 pt-2 pb-2 overflow-hidden">
          <span
            className="pt-1 pb-1 border-[#0e0e77]   border-opacity-0 border-b-2 hover:border-baseDark-blue  hover:transition-all pointer"
            onClick={toOverview}
          >
            <h5
              className="text-[0.9rem] font-bold text-gray-300"
              ref={overviewRef}
            >
              OVERVIEW
            </h5>
          </span>
          <span
            className="pt-1 pb-1 border-[#0e0e77]  border-opacity-0 border-b-2 hover:border-baseDark-blue  hover:transition-all pointer"
            onClick={toReturns}
          >
            <h5
              className="text-[0.9rem] font-bold text-[#b9b8b8]"
              ref={returnsRef}
            >
              RETURNS
            </h5>
          </span>
          <span
            className="pt-1 pb-1 border-[#0e0e77]  border-opacity-0 border-b-2 hover:border-baseDark-blue  hover:transition-all pointer"
            onClick={toTransaction}
          >
            <h5
              className="text-[0.9rem] font-bold text-gray-300"
              ref={transactionRef}
            >
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
