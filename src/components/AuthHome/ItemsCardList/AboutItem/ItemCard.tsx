import { userAppContext } from "../../../ContextApi/UserContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ItemCard() {
  const urlNavigator = useNavigate();
  const userDetails = userAppContext();
  const [imageIndex, setImageIndex] = useState<number>(0);
  useEffect(() => {
    if (!userDetails) return;
    const { singleProductData } = userDetails;
    if (singleProductData.name === "") {
      urlNavigator("/auth/home", { replace: true });
    }
  }, []);
  if (!userDetails) return;
  const { singleProductData } = userDetails;

  function decressImage() {
    if (imageIndex === 0) return;
    setImageIndex((prevIndex) => {
      return prevIndex - 1;
    });
  }
  function incressImgae() {
    if (singleProductData.imageUrl.length === imageIndex + 1) return;
    setImageIndex((prevIndex) => {
      return prevIndex + 1;
    });
  }
  return (
    <div className="flex p-5 justify-center bg-[#171718] ">
      <div className="inline-flex flex-wrap rounded-lg gap-3 w-full h-fit border-[1px] border-baseCard-borderColor  bg-[#1e1e22ee] p-5 ">
        <span className="lg:w-[30%] min-h-full max-h-fit w-full flex relative">
          <span className="flex justify-center items-center w-9 h-9 rounded-full bg-baseDark-blue hover:bg-[#0e0e77]  hover:h-10 hover:w-10 hover:transition-all hover:mt-[-3px] absolute top-[45%]  ml-4">
            <i
              className="fa fa-arrow-left text-[1rem] text-gray-100"
              onClick={decressImage}
            ></i>
          </span>
          <img
            className="min-w-52 min-h-40 w-full h-full rounded-md"
            src={singleProductData.imageUrl[imageIndex]}
          ></img>
          <span className="flex justify-center items-center w-9 h-9 rounded-full bg-baseDark-blue hover:bg-[#0e0e77]  hover:h-10 hover:w-10 hover:transition-all hover:mt-[-3px] absolute top-[45%] right-0 mr-4 ">
            <i
              className="fa fa-arrow-right text-[1rem] text-gray-100"
              onClick={incressImgae}
            ></i>
          </span>
        </span>
        <span className="w-full lg:w-[68%]">
          <span className="flex border-b-[1px] pb-2 border-gray-500 lg:text-[1.5rem] text-[1.2rem] text-gray-200">
            <h5>Austin 3BR Rental - Oak Street</h5>
          </span>
          <div className="flex flex-wrap lg:gap-4 gap-2 items-center mt-2">
            <div className="flex w-full  max-w-[500px] gap-2 items-center">
              <span className="flex w-full h-4 bg-[#505052ea]">
                <span
                  className=" w-full h-4 bg-baseDark-blue "
                  style={{
                    width: `${singleProductData.fundingParcent}%`,
                  }}
                ></span>
              </span>
              <span className="font-semibold text-[0.9rem] flex gap-1">
                <h5 className="text-baseDark-blue text-[1rem]">
                  {singleProductData.fundingParcent}%
                </h5>
                <h5 className="text-gray-100">FUNDED</h5>
              </span>
            </div>
            <span>
              <h5 className="text-[1rem] font-sans font-bold text-gray-200 max-[690px]:ml-auto">
                {"$160K of $250K raised".toLocaleUpperCase()}
              </h5>
            </span>
          </div>

          <div className="flex w-full flex-col mt-3 lg:gap-4 gap-3">
            <span className="flex gap-2">
              <h5 className="text-[1rem] font-semibold text-gray-400 ">
                ASSET TYPE:
              </h5>
              <h5 className="text-[1rem] font-sans font-bold text-gray-200 max-[690px]:ml-auto">
                RENTAL PROPERTY
              </h5>
            </span>
            <span className="flex gap-2">
              <h5 className="text-[1rem] font-semibold text-gray-400 ">
                INVESTORS:
              </h5>
              <h5 className="text-[1rem] font-sans font-bold text-gray-200 max-[690px]:ml-auto">
                320/500
              </h5>
            </span>
            <span className="flex gap-2">
              <h5 className="text-[1rem] font-semibold text-gray-400">
                MINIMUM INVESTMENT:
              </h5>
              <h5 className="text-[1.2rem] mt-[-3px] font-bold text-gray-200 max-[690px]:ml-auto">
                ${singleProductData.minimumOrder}
              </h5>
            </span>
            <span className="flex gap-2">
              <h5 className="text-[1rem] font-semibold text-gray-400">
                TARGET RETURN:
              </h5>
              <h5 className="text-[1.2rem] mt-[-3px] font-bold text-gray-200 max-[690px]:ml-auto">
                {singleProductData.investmentRate}
              </h5>
            </span>
            <span className="flex gap-2">
              <h5 className="text-[1rem] font-semibold text-gray-400">
                PROJECTED RETURN:
              </h5>
              <h5 className="text-[1.2rem] mt-[-3px] font-bold text-gray-200 max-[690px]:ml-auto">
                ${Number(singleProductData.minimumOrder) * 1.5}
              </h5>
            </span>
            <span className="flex gap-2">
              <h5 className="text-[1rem] font-semibold text-gray-400">
                RISK LEVEL:
              </h5>
              <h5 className="text-[1rem] mt-[-3px] font-semibold text-gray-200 max-[690px]:ml-auto">
                LOW-MEDIUM
              </h5>
            </span>
          </div>
          <div className="flex lg:mt-6 mt-4 gap-4 flex-wrap max-[690px]:mt-5">
            <span className=" flex flex-col gap-2 pr-3 max-[690px]:pb-2 max-[690px]:w-full max-[690px]:border-b-[2px] min-[691px]:border-r-[2px] border-gray-600">
              <h5 className="text-[1rem] font-semibold text-gray-400">
                INVESTMENT TERM
              </h5>
              <h5 className="text-[1.1rem] font-sans font-semibold text-gray-200">
                {singleProductData.investmentTerm.toLocaleUpperCase()}
              </h5>
              <h5 className=" font-sans text-gray-400 mt-[-12px]">
                ends june 4th, 2026
              </h5>
            </span>
            <span className=" flex flex-col gap-2 pr-3 max-[690px]:pb-2 max-[690px]:w-full max-[690px]:border-b-[2px] min-[691px]:border-r-[2px] border-gray-600">
              <h5 className="text-[1rem] font-semibold text-gray-400">
                PAYOUT
              </h5>
              <h5 className="text-[1.1rem] mt-[-3px] font-semibold text-gray-200">
                MONTHLY TO WALLET
              </h5>
            </span>
            <span className=" flex flex-col gap-2 pr-3 max-[690px]:pb-2 max-[690px]:w-full max-[690px]:border-b-[2px] min-[691px]:border-r-[2px] border-gray-600">
              <h5 className="text-[1rem] font-semibold text-gray-400">
                EST. MONTHLY
              </h5>
              <h5 className="text-[1.1rem] mt-[-3px] font-semibold text-gray-200">
                $18.12 starting Nov 30
              </h5>
            </span>
            <span className=" flex flex-col gap-2 pr-3 max-[690px]:pb-2 max-[690px]:w-full max-[690px]:border-b-[2px] min-[691px]:border-r-[2px] border-gray-600">
              <h5 className="text-[1rem] font-semibold text-gray-400">
                LOCK-UP
              </h5>
              <h5 className="text-[1.1rem] mt-[-3px] font-semibold text-gray-200">
                FUNDS LOCKED{" "}
                {singleProductData.investmentTerm.toLocaleUpperCase()}
              </h5>
            </span>

            <span className=" flex flex-col gap-2 pr-3 max-[690px]:pb-2 max-[690px]:w-full max-[690px]:border-b-[2px]  border-gray-600">
              <h5 className="text-[1rem] font-semibold text-gray-400">
                PROPERTY PRICE
              </h5>
              <span className="flex gap-2">
                <h5 className="text-[1.1rem]  font-bold text-gray-200">
                  ${singleProductData.price}
                </h5>
                <span className="flex p-1 font-semibold text-gray-200 bg-[#4545dfe7] rounded-md gap-1 mt-[-3px]">
                  <h5>Appraised</h5>
                </span>
              </span>
            </span>
          </div>
        </span>
      </div>
    </div>
  );
}
export default ItemCard;
