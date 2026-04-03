import logodark from "/images/logo/logodark.png";
import MenuCategory from "./MenuCategory";
function Top() {
  return (
    <>
      <div className="bg-[#0d0d13]">
        <div className="w-full flex lg:pl-10 pl-5">
          <span className="w-24 h-20 rounded-full ">
            <img className="w-full h-full " alt="logo" src={logodark}></img>
          </span>
          <div className="items-center gap-10 ml-16 hidden lg:flex">
            <span className=" text-gray-400 font-semibold">
              <h5>DEALS</h5>
            </span>
            <span className=" text-gray-400 font-semibold">
              <h5>MANAGERS</h5>
            </span>
            <span className=" text-gray-400 font-semibold">
              <h5>DASHBORD</h5>
            </span>
            <span className=" text-gray-400 font-semibold">
              <h5>PORTFOLIO</h5>
            </span>
          </div>
          <span className="flex items-center  text-gray-400 text-[1rem] ml-4 lg:hidden">
            <i className="fa fa-bars text-[1.3rem]"></i>
          </span>
          <span className="flex items-center ml-auto">
            <span className="flex items-center w-fit h-fit p-1.5 pl-2.5 pr-2.5 rounded-full gap-1 bg-[#4b4bdd] ">
              <i className="fa fa-message font-light text-gray-100"></i>
              <h5 className="text-gray-100 font-bold text-[0.9rem]">CHAT</h5>
            </span>
          </span>
          <span className="flex items-center ml-[25px] pr-5">
            <span className="flex text-gray-400 gap-1.5">
              <i className="fa fa-user font-light mt-[5px] text-[1.3rem]"></i>
              <h5 className="font-bold lg:block hidden">anonymous</h5>
              <h5 className="font-bold lg:block hidden">p/r</h5>
              <i className="fas fa-angle-down mt-[5px] lg:block hidden"></i>
              <i></i>
            </span>
          </span>
        </div>
      </div>
      <div className="w-full flex h-14 bg-[#090913e1] items-center">
        <span className="lg:pl-10 pl-5 text-gray-200 text-[1.5rem]">
          <h5>Deals</h5>
        </span>
        <span className="w-fit h-fit bg-[#4b4bdd] p-1 pl-2 pr-2 font-semibold text-gray-100 rounded-md ml-auto mr-5">
          <h5 className="hidden lg:block">ADD/WITHDRAW FUNDS</h5>
          <h5 className="lg:hidden block">ADD/WITHDRAW</h5>
        </span>
      </div>
      <MenuCategory />
    </>
  );
}
export default Top;
