import imageLogo from "/images/logo/logo.jpg";
import { useNavigate } from "react-router-dom";
function MenuTop() {
  const urlNavigator = useNavigate();
  function signIn() {
    const url = "signin";
    urlNavigator(url, { replace: false });
  }
  return (
    <div className=" sticky top-0   z-10">
      <div className="flex  w-full bg-[white] border-b-2 pt-1 pb-1 items-center shadow-lg ">
        <div className=" flex lg:pl-10 pl-5">
          <span className="w-20 h-16 rounded-full ">
            <img className="w-full h-full " alt="logo" src={imageLogo}></img>
          </span>
        </div>
        <span className="block ml-8 lg:hidden">
          <i className="fa fa-bars text-[1.3rem] text-[#060685]"></i>
        </span>
        <span className="ml-auto  hidden lg:flex">
          <span>
            <h5 className="text-[1rem] text-[#060685]">INVESTMENT PLAN</h5>
          </span>
          <span>
            <h5 className="text-[1rem] text-[#060685] ml-10 mr-10">ABOUT</h5>
          </span>
          <span className="text-[1rem] text-[#060685]">
            <h5>CONTACT US</h5>
          </span>
        </span>
        <span className=" ml-auto">
          <i className="fa fa-search text-[1.2rem] text-[#060685]"></i>
        </span>
        <span className="pr-8 ml-5">
          <i
            className="fa fa-user font-normal text-[1.2rem] text-[#060685]"
            onClick={signIn}
          ></i>
        </span>
      </div>
    </div>
  );
}
export default MenuTop;
