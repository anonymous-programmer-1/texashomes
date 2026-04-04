import productImage from "/images/house0.jpg";

function ItemCard() {
  return (
    <div className="flex p-5 justify-center bg-[#171718]">
      <div className="inline-flex flex-wrap rounded-lg gap-3 w-full h-fit border-[1px] border-gray-400 bg-[#0a0a14ee] p-5 ">
        <span className="lg:w-[30%] min-h-full max-h-fit w-full flex relative">
          <span className="flex justify-center items-center w-9 h-9 rounded-full bg-[#060685] absolute top-[45%]  ml-4">
            <i className="fa fa-arrow-left text-[1rem] text-gray-100"></i>
          </span>
          <img className="w-full h-full rounded-md" src={productImage}></img>
          <span className="flex justify-center items-center w-9 h-9 rounded-full bg-[#060685] absolute top-[45%] right-0 mr-4 ">
            <i className="fa fa-arrow-right text-[1rem] text-gray-100"></i>
          </span>
        </span>
        <span className="w-full lg:w-[68%]">
          <span className="flex border-b-[1px] pb-2 border-gray-500 lg:text-[1.5rem] text-[1.2rem] text-gray-200">
            <h5>NYT Inventory Financing Sr. 2026-2</h5>
          </span>
          <div className="flex w-full flex-col mt-8 gap-4">
            <span className="flex gap-2">
              <h5 className="text-[1rem] font-semibold text-gray-400 ">
                FINANCING TYPE:
              </h5>
              <h5 className="text-[1rem] font-sans text-gray-200 max-[690px]:ml-auto">
                Asset Based
              </h5>
            </span>
            <span className="flex gap-2">
              <h5 className="text-[1rem] font-semibold text-gray-400 ">
                MANAGER:
              </h5>
              <h5 className="text-[1rem] font-sans text-[#060685] max-[690px]:ml-auto">
                Texas Homes
              </h5>
            </span>
            <span className="flex gap-2">
              <h5 className="text-[1rem] font-semibold text-gray-400">
                FUNDING ENDS:
              </h5>
              <h5 className="text-[1rem] font-sans text-gray-200 max-[690px]:ml-auto">
                April 07, 2026 2:00PM
              </h5>
            </span>
            <span className="flex gap-2">
              <h5 className="text-[1rem] font-semibold text-gray-400">
                MINIMUM INVESTMENT:
              </h5>
              <h5 className="text-[1.2rem] mt-[-3px] font-bold text-gray-200 max-[690px]:ml-auto">
                $500
              </h5>
            </span>
            <span className="flex gap-2">
              <h5 className="text-[1rem] font-semibold text-gray-400">
                INVESTMENT RATE:
              </h5>
              <h5 className="text-[1.2rem] mt-[-3px] font-bold text-gray-200 max-[690px]:ml-auto">
                17%
              </h5>
            </span>
          </div>
          <div className="flex lg:mt-6 mt-4 gap-4 flex-wrap max-[690px]:mt-5">
            <span className=" flex flex-col gap-2 pr-3 max-[690px]:pb-2 max-[690px]:w-full max-[690px]:border-b-[2px] min-[691px]:border-r-[2px] border-gray-600">
              <h5 className="text-[1rem] font-semibold text-gray-400">
                INVESTMENT TERM
              </h5>
              <h5 className="text-[1.1rem] font-sans text-gray-200">
                6 months
              </h5>
              <h5 className=" font-sans text-gray-400 mt-[-12px]">
                martures june 4th, 2026
              </h5>
            </span>
            <span className=" flex flex-col gap-2 pr-3 max-[690px]:pb-2 max-[690px]:w-full max-[690px]:border-b-[2px] min-[691px]:border-r-[2px] border-gray-600">
              <h5 className="text-[1rem] font-semibold text-gray-400">
                RETURN ON INVESTMENT
              </h5>
              <h5 className="text-[1.1rem] mt-[-3px] font-bold text-gray-200">
                $1200
              </h5>
            </span>
            <span className=" flex flex-col gap-2 pr-3 max-[690px]:pb-2 max-[690px]:w-full max-[690px]:border-b-[2px]  border-gray-600">
              <h5 className="text-[1rem] font-semibold text-gray-400">
                PROPERTY PRICE
              </h5>
              <span className="flex gap-2">
                <h5 className="text-[1.1rem]  font-bold text-gray-200">
                  $462,00
                </h5>
                <span className="flex p-1 font-semibold text-gray-200 bg-[#4545dfe7] rounded-md gap-1 mt-[-3px]">
                  <h5>80%</h5>
                  <h5>FUNDED</h5>
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
