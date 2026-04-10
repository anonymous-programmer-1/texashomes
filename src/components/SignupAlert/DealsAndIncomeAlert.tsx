import { useNavigate } from "react-router-dom";
function DealsAndIncomeAlert() {
  const urlNavigator = useNavigate();
  function signIn() {
    const url = "/signin";
    urlNavigator(url, { replace: false });
  }
  return (
    <div className="w-full pl-2 pr-2 mt-16 mb-16 appear-element">
      <div className="flex flex-col w-full h-fit  pt-8 pb-8 pl-12 pr-12  rounded-2xl  bg-[#060685]">
        <h5 className="lg:text-[3rem] text-[2rem] text-gray-100 font-semibold font-sans ">
          Make your first investment and get up to $500.
        </h5>
        <h5 className="mt-5 text-[1.2rem] text-gray-100 font-semibold">
          Get $500 after you make your first investment.
        </h5>
        <span
          className="flex justify-center items-center pl-3 pr-3 w-fit h-10 bg-gray-100 rounded-lg mt-2 text-[#060685] hover:bg-[#0e0edf] transition-all hover:text-gray-100"
          onClick={signIn}
        >
          <h5 className="text-[1rem] font-semibold ">VIEW AVALABLE DEALS</h5>
        </span>
      </div>
    </div>
  );
}
export default DealsAndIncomeAlert;
