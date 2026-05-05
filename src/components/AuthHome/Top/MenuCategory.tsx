import { useState, useRef, useEffect } from "react";
import { userAppContext } from "../../ContextApi/UserContext";
function MenuCategory() {
  const userDetails = userAppContext();
  if (!userDetails) return;
  const { setProductsFilterData, productsFilterData, productData } =
    userDetails;
  const [sharesControl, setSharesControl] = useState<boolean>(false);
  const [statusControl, setStatusControl] = useState<boolean>(false);
  const [finacControl, setFinancControl] = useState<boolean>(false);
  const sharesRef = useRef<HTMLSpanElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);
  const finacRef = useRef<HTMLSpanElement>(null);
  const [statusControlText, setStatusControlText] = useState<string>("ALL");
  useEffect(() => {
    if (!sharesRef.current || !statusRef.current || !finacRef.current) return;
    if (sharesControl) {
      sharesRef.current.style.borderColor = "#060685";
    } else {
      sharesRef.current.style.borderColor = "rgb(200 213 219)";
    }
    if (statusControl) {
      statusRef.current.style.borderColor = "#060685";
    } else {
      statusRef.current.style.borderColor = "rgb(200 213 219)";
    }
    if (finacControl) {
      finacRef.current.style.borderColor = "#060685";
    } else {
      finacRef.current.style.borderColor = "rgb(200 213 219)";
    }
  }, [statusControl, sharesControl, finacControl]);
  function less600() {
    const deals = [...productData];
    const newFilteredDeals = deals.filter((e) => {
      if (Number(e.minimumOrder) < 600) return e;
    });
    setProductsFilterData([...newFilteredDeals]);
    setStatusControlText("$300 - $500");
    setSharesControl(false);
  }
  function less1001() {
    const deals = [...productData];
    const newFilteredDeals = deals.filter((e) => {
      if (Number(e.minimumOrder) >= 600 && Number(e.minimumOrder) < 1100)
        return e;
    });
    setProductsFilterData([...newFilteredDeals]);
    setStatusControlText("$600 - $1,000");
    setSharesControl(false);
  }
  function more1000() {
    const deals = [...productData];
    const newFilteredDeals = deals.filter((e) => {
      if (Number(e.minimumOrder) > 1000) return e;
    });
    setProductsFilterData([...newFilteredDeals]);
    setStatusControlText("$1,000+");
    setSharesControl(false);
  }
  function all() {
    const deals = [...productData];
    setProductsFilterData(deals);
    setStatusControlText("ALL");
    setSharesControl(false);
  }
  return (
    <div className="w-full min-h-14 max-h-fit pb-4 bg-[#171718]  ">
      <div className="flex flex-wrap w-full h-full items-center lg:pl-10 pl-5 gap-2.5 ">
        <span className="flex flex-col gap-0.5 pointer ">
          <h5 className="text-gray-400">Shares/Minimum</h5>
          <span className="w-[10rem] h-fit max-w-fit">
            <span
              className="w-[9.5rem]  h-fit flex pl-2 border-[1px] border-baseCard-borderColor bg-transparent text-gray-400 font-semibold rounded-md"
              ref={sharesRef}
              onClick={() => {
                setSharesControl(!sharesControl);
                setStatusControl(false);
                setFinancControl(false);
              }}
            >
              <h5>{statusControlText}</h5>
              {sharesControl ? (
                <i className="fas fa-angle-up mt-1 ml-auto mr-1"></i>
              ) : (
                <i className="fas fa-angle-down mt-1 ml-auto mr-1"></i>
              )}
            </span>
            {sharesControl && (
              <div className="pt-0.5">
                <div className="flex flex-col gap-3 pl-7 pr-7 max-w-fit absolute z-[5] bg-[#0d0d13] text-[1rem] p-2 pt-4 pb-4 rounded-b-sm transition-all pointer">
                  <span
                    className=" max-w-fit  h-fit flex   bg-transparent text-gray-400 font-semibold rounded-md"
                    onClick={less600}
                  >
                    <h5>$300 - $500</h5>
                  </span>
                  <span
                    className=" max-w-fit  h-fit flex   bg-transparent text-gray-400 font-semibold rounded-md"
                    onClick={less1001}
                  >
                    <h5>$600 - $1,000</h5>
                  </span>
                  <span
                    className=" max-w-fit  h-fit flex   bg-transparent text-gray-400 font-semibold rounded-md"
                    onClick={more1000}
                  >
                    <h5>$1,000 + </h5>
                  </span>
                  <span
                    className=" max-w-fit  h-fit flex   bg-transparent text-gray-400 font-semibold rounded-md"
                    onClick={all}
                  >
                    <h5>ALL </h5>
                  </span>
                </div>
              </div>
            )}
          </span>
        </span>
        <span className="flex flex-col gap-0.5 pointer  ">
          <h5 className="text-gray-400">Financing Type</h5>
          <span
            className="w-[8rem] h-fit flex pl-2 border-[1px] border-baseCard-borderColor bg-transparent text-gray-400 font-semibold rounded-md"
            ref={finacRef}
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
        <span className="flex flex-col gap-0.5 pointer ">
          <h5 className="text-gray-400">Statues</h5>
          <span
            className="w-[8rem] h-fit flex pl-2 border-[1px] border-baseCard-borderColor bg-transparent text-gray-200 font-semibold rounded-md"
            ref={statusRef}
            onClick={() => {
              setStatusControl(!statusControl);
              setSharesControl(false);
              setFinancControl(false);
            }}
          >
            <h5 className="text-gray-400">FUNDING</h5>
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
