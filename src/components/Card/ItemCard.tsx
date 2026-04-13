import { useState } from "react";
import { useNavigate } from "react-router-dom";
type ProductsData = {
  data: {
    name: string;
    price: string;
    manager: string;
    minimumOrder: string;
    fundingEnd: string;
    investors: string;
    investmentRate: string;
    fundingParcent: string;
    returnPrice: string;
    investmentTerm: string;
    imageUrl: string[];
  };
};
function ItemCard(props: ProductsData) {
  const urlNavigator = useNavigate();
  const deals = props.data;
  const [imageCount, setImageCount] = useState(0);
  function imageLeft() {
    if (imageCount === 0) return;
    setImageCount((prevCount) => (prevCount -= 1));
  }
  function imageRight() {
    const length = deals.imageUrl.length;
    if (length === imageCount + 1) return;
    setImageCount((prevCount) => (prevCount += 1));
  }
  function signIn() {
    const url = "/signin";
    urlNavigator(url, { replace: false });
  }
  return (
    <div className="w-[400px] h-fit flex flex-col bg-white  rounded-md items-stretch flex-grow hover:shadow-lg hover:-translate-y-1 transition-all">
      <span className="block w-full h-[22rem] relative">
        <div className="flex absolute w-full flex-col  mt-2">
          <span className="block w-full h-4 bg-transparent rounded-lg pl-2 pr-2">
            <span
              className="block bg-[#060685]   transition-all h-full rounded-lg"
              style={{
                width: `${deals.fundingParcent}%`,
              }}
            ></span>
          </span>
          <span className="block">
            <h5 className="pl-4 text-[1rem] font-semibold text-[#060685]">
              {deals.fundingParcent}%
            </h5>
          </span>
        </div>

        <span className="flex justify-center items-center w-9 h-9 rounded-full bg-[#060685] hover:bg-[#0e0edf]  transition-all absolute top-[40%]  ml-4">
          <i
            className="fa fa-arrow-left text-[1rem]  transition-all text-gray-100"
            onClick={imageLeft}
          ></i>
        </span>
        <span className="block w-fit p-0.5 pl-2 pr-2 absolute bottom-2 ml-4 border-[1px] border-[#060685]  blur-[0.5px] rounded-lg">
          <h5 className="text-[1rem] font-sans text-[#060685]">
            {deals.investors} investors
          </h5>
        </span>
        <img
          className="w-full h-full rounded-tr-md rounded-tl-md"
          src={deals.imageUrl[imageCount]}
        ></img>
        <span className="flex justify-center items-center w-9 h-9 rounded-full bg-[#060685] hover:bg-[#0e0edf]  transition-all absolute top-[40%] right-0 mr-4">
          <i
            className="fa fa-arrow-right text-[1rem]   transition-all text-gray-100"
            onClick={imageRight}
          ></i>
        </span>
      </span>
      <div className="w-full pl-5 pr-5 mt-4 flex flex-col">
        <span className="block ">
          <h2 className="font-bold text-gray-700 text-[1.2rem]">
            Trails at Smoky Hill
          </h2>
        </span>
        <span className="flex flex-col mt-2">
          <h5 className="text-[1rem] text-gray-600 font-semibold">
            Aurora, CO 8009
          </h5>
          <h5 className="font-bold text-[#060685]">{deals.name}</h5>
        </span>
        <span className="mt-1">
          <h5 className="text-[1rem] text-gray-600 font-semibold">Manager</h5>
          <h5 className="font-bold text-[#060685]">Texas House</h5>
        </span>
        <span className="ml-auto mt-2">
          <h5 className="text-[1rem] text-gray-600 font-semibold text-center">
            House Price
          </h5>
          <h5 className="text-[1.4rem] font-bold text-[#060685]">
            ${deals.price}
          </h5>
        </span>
        <div className="flex gap-4">
          <span className="mt-1">
            <h5 className="text-[1rem] text-gray-600 font-semibold">
              Investment Terms
            </h5>
            <h5 className="font-bold text-[#060685]">{deals.investmentTerm}</h5>
          </span>
        </div>

        <span className="ml-auto mt-2">
          <h5 className="text-[1rem] text-gray-600 font-semibold text-center">
            Est
            <strong className="text-[#060685] ml-1 font-serif text-[1.2rem]">
              ${deals.minimumOrder}
            </strong>
            /shares
          </h5>
          <a className="text-[1rem] font-bold text-[#060685]">
            Estimate Your Payment
          </a>
        </span>
      </div>
      <span
        className="mt-2 w-full flex justify-center items-center bg-[#060685] hover:bg-[#0e0edf]  transition-all h-12 rounded-br-md rounded-bl-md"
        onClick={signIn}
      >
        <h5 className="font-bold text-gray-100 text-[1.3rem]">View Deal</h5>
      </span>
    </div>
  );
}
export default ItemCard;
