import { useNavigate } from "react-router-dom";
import { userAppContext } from "../../ContextApi/UserContext";
type ProductsData = {
  data: {
    name: string;
    price: string;
    manager: string;
    minimumOrder: string;
    returnType: string;
    investors: string;
    investmentRate: string;
    fundingParcent: string;
    returnPrice: string;
    investmentTerm: string;
    monthlyPay: string;
    riskLevel: string;
    amontToRaise: string;
    imageUrl: string[];
  };
  isMinimum: boolean;
};

function ItemCard(prop: ProductsData) {
  const urlNavigator = useNavigate();
  const userDetails = userAppContext();
  const deals = prop.data;
  const isMinimum = prop.isMinimum;
  if (!userDetails) return;
  const { setSingleProductData } = userDetails;
  function moreInfo() {
    setSingleProductData(deals);
    const url = "/proparty/info";
    urlNavigator(url, { replace: false });
  }
  return (
    <span className="mt-2 flex  flex-col gap-2 p-4 border-[1px]  border-gray-400 bg-baseCard-color   w-full   h-full max-h-[45rem]  rounded-md relative items-stretch  flex-grow hover:border-baseDark-blue hover:-translate-y-1 transition-all">
      <span className="flex w-full absolute top-0 mt-[-0.5px] gap-2 l-2">
        <span className="w-fit h-fit p-1 pl-2 pr-2 bg-[#14148f] rounded-b-md">
          <h5 className="text-gray-200 font-semibold">FUNDING</h5>
        </span>
        {isMinimum && (
          <span className="w-fit h-fit p-1 pl-2 pr-2 bg-baseLight-blue rounded-b-md">
            <h5 className="text-gray-200 font-semibold">
              ${deals.minimumOrder} MINIMUM!
            </h5>
          </span>
        )}
      </span>
      <span className="w-full  h-[10rem]">
        <img className="w-full h-full rounded-md" src={deals.imageUrl[0]}></img>
      </span>
      <span className="text-gray-300 font-semibold text-[0.9rem]">
        <h5>{deals.name}</h5>
      </span>

      <span className="flex flex-col">
        <span className="font-semibold text-[0.9rem] flex  gap-2">
          <h5 className="text-gray-100 ">INVESTORS:</h5>
          <h5 className="text-gray-100 text-[1rem] ">{deals.investors}/500</h5>
        </span>
        <div className="flex w-full gap-2 items-center">
          <span className="flex w-full h-4 bg-[#505052ea]">
            <span
              className=" w-full h-4 bg-baseDark-blue "
              style={{
                width: `${deals.fundingParcent}%`,
              }}
            ></span>
          </span>
          <span className="font-semibold text-[0.9rem] flex gap-1">
            <h5 className="text-baseDark-blue text-[1rem]">
              {deals.fundingParcent}%
            </h5>
            <h5 className="text-gray-100">FUNDED</h5>
          </span>
        </div>
      </span>
      <span className="flex flex-col w-full h-fit text-[1rem] p-2 gap-1 bg-[#06060cc5] rounded-md">
        <span className="flex w-full p-2 text-gray-300 border-b-[1px] border-gray-400 font-semibold overflow-hidden  ">
          <h5 className="mr-4">ASSET</h5>
          <h5 className="ml-auto text-gray-50">RENTAL PROPERTY </h5>
        </span>
        <span className="flex p-2 text-gray-300 font-semibold  border-b-[1px] border-gray-400">
          <h5>MINIMUM ORDER </h5>
          <h5 className="ml-auto">${deals.minimumOrder}</h5>
        </span>
        <span className="flex p-2 text-gray-300 font-semibold  border-b-[1px] border-gray-400">
          <h5>RETURN RATE</h5>
          <h5 className="ml-auto">{deals.investmentRate}%APY</h5>
        </span>
        <span className="flex p-2 text-gray-300 border-b-[1px] border-gray-400 font-semibold ">
          <h5>INVESTMENT TERM</h5>
          <h5 className="ml-auto text-gray-50">
            {deals.investmentTerm.toLocaleUpperCase()}
          </h5>
        </span>
        <span className="flex p-2 text-gray-300 font-semibold border-b-[1px] border-gray-400">
          <h5>PROJECTED RETURN</h5>
          <h5 className="ml-auto">${deals.returnPrice}</h5>
        </span>
        <span className="flex w-full  p-2 text-gray-300  font-semibold ">
          <h5>PAYOUT</h5>
          <h5 className="ml-auto text-gray-50">MONTHLY/END OF TERM</h5>
        </span>
      </span>
      <div className="flex w-full gap-2">
        <span
          className="flex w-full h-fit pl-2 pr-2 justify-center items-center border-2 border-baseDark-blue rounded-full p-2 pointer hover:bg-blue-600"
          onClick={moreInfo}
        >
          <h5 className="text-[1.2rem] font-semibold text-gray-200">
            View Details
          </h5>
        </span>
      </div>
    </span>
  );
}
export default ItemCard;
