import { userAppContext } from "../../../ContextApi/UserContext";
import { useEffect, useRef } from "react";
function ItemNameAndInvest() {
  const userDetails = userAppContext();
  const viewRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!viewRef.current) return;
    viewRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, []);
  if (!userDetails) return;
  const { singleProductData } = userDetails;

  return (
    <>
      <div className="w-full flex h-16 bg-[#171718] items-center" ref={viewRef}>
        <span className="lg:pl-10 pl-5 text-gray-200 lg:text-[1.5rem] text-[1.1rem]">
          <h5>{singleProductData.name}</h5>
        </span>
        <span className="w-fit h-fit flex  bg-[#3a3ac5] hover:bg-[#0e0e77] hover:transition-all p-2 font-semibold text-gray-100 rounded-full ml-auto mr-5 mt-1 lg:mt-0 overflow-hidden pointer">
          <i className="fas fa-circle-check mr-0.5 mt-0.5 text-[1.2rem] font-normal"></i>
          <h5 className="hidden lg:block ">INVEST IN THIS DEAL</h5>
          <h5 className="lg:hidden block text-[16px]">INVEST IN THIS DEAL</h5>
        </span>
      </div>
    </>
  );
}
export default ItemNameAndInvest;
