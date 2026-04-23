import { useNavigate } from "react-router-dom";
function WhyAbout() {
  const urlNavigator = useNavigate();
  function signIn() {
    const url = "/signin";
    urlNavigator(url, { replace: false });
  }
  return (
    <div className=" mt-7 h-fit pt-1 pb-1 w-full relative mb-20 appear-element">
      <span className="flex flex-col pl-8 mt-4 pr-8">
        <h5 className="lg:text-[2.5rem] text-[2rem] font-serif  font-normal">
          Texas Homes is the leading platform focused on bringing private credit
          to both accredited and institutional investors.
        </h5>
        <span
          className="flex justify-center items-center pl-3 pr-3 w-fit h-10 bg-[#060685] rounded-lg mt-2 text-gray-100 hover:bg-gray-100 transition-all hover:text-[#060685]"
          onClick={signIn}
        >
          <h5 className="text-[1rem] font-semibold ">VIEW AVALABLE DEALS</h5>
        </span>
      </span>
    </div>
  );
}
export default WhyAbout;
