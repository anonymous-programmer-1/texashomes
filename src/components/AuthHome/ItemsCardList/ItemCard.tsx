import productImage from "/images/house0.jpg";
function ItemCard() {
  return (
    <span className="mt-2 flex flex-col gap-2 p-4 border-[1px] border-gray-400 bg-[#0a0a14ee] w-fit max-w-[23rem]  h-fit max-h-[45rem] rounded-md relative items-stretch flex-grow ">
      <span className="flex absolute top-0 mt-[-0.5px] gap-2 ml-2">
        <span className="w-fit h-fit p-1 pl-2 pr-2 bg-[#060685] rounded-b-md">
          <h5 className="text-gray-200 font-semibold">FUNDING</h5>
        </span>
        <span className="w-fit h-fit p-1 pl-2 pr-2 bg-[#4545dfe7] rounded-b-md">
          <h5 className="text-gray-200 font-semibold">$500 MINIMUM!</h5>
        </span>
      </span>
      <span className="w-full h-[12rem]">
        <img className="w-full h-full rounded-md" src={productImage}></img>
      </span>
      <span className="text-gray-300 font-semibold text-[0.9rem]">
        <h5>FUND</h5>
      </span>
      <span className="flex w-full">
        <h5 className="text-[1rem] text-gray-400 font-semibold">
          Aurora, CO 8009
        </h5>
        <h5 className="font-bold text-[#060685] ml-1">303.416.8080</h5>
      </span>
      <span className="flex flex-col">
        <span className="w-full h-3 bg-[#060685] rounded-full"></span>
        <span className="flex mt-1">
          <span className="font-semibold text-[0.9rem] flex gap-1">
            <h5 className="text-[#060685]">100%</h5>
            <h5 className="text-gray-100">FUNDED</h5>
          </span>
          <span className="font-semibold text-[0.9rem] flex gap-1 ml-auto">
            <h5 className="text-gray-100">FUNING ENDS MAR 30</h5>
          </span>
        </span>
      </span>
      <span className="flex flex-col w-full h-fit p-2 gap-1 bg-[#06060cc5] rounded-md">
        <span className="flex p-2 text-gray-300 font-semibold border-b-[1px] border-gray-400">
          <h5>PROPERTY PRICE</h5>
          <h5 className="ml-auto">$424,990</h5>
        </span>
        <span className="flex p-2 text-gray-300 font-semibold border-b-[1px] border-gray-400">
          <h5>INVESTORS</h5>
          <h5 className="ml-auto">700</h5>
        </span>
        <span className="flex p-2 text-gray-300 font-semibold border-b-[1px] border-gray-400">
          <h5>MANAGER</h5>
          <h5 className="ml-auto text-[#060685] font-semibold">Texas Homes</h5>
        </span>
        <span className="flex p-2 text-gray-300 font-semibold border-b-[1px] border-gray-400">
          <h5>MINIMUM ORDER </h5>
          <h5 className="ml-auto">$500</h5>
        </span>
        <span className="flex p-2 text-gray-300 font-semibold border-b-[1px] border-gray-400">
          <h5>INVESTMENT RATE</h5>
          <h5 className="ml-auto">[12.00 - 14.00]%</h5>
        </span>
        <span className="flex p-2 text-gray-300 font-semibold ">
          <h5>INVESTMENT TERM</h5>
          <h5 className="ml-auto text-gray-50">6 months</h5>
        </span>
      </span>
    </span>
  );
}
export default ItemCard;
