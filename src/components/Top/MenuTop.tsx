import imageLogo from "/images/logo/logo.png";
import { useNavigate } from "react-router-dom";
import { lazy, useState } from "react";
const Menu = lazy(() => import("../Home/Menu"));
type Controls = {
  setControlA: React.Dispatch<React.SetStateAction<boolean>>;
  setIcontrol: React.Dispatch<React.SetStateAction<boolean>>;
};
function MenuTop(props: Controls) {
  const urlNavigator = useNavigate();
  function signIn() {
    const url = "/signin";
    urlNavigator(url, { replace: false });
  }
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  function sideMenu() {
    setMenuVisible(!menuVisible);
  }
  return (
    <div className=" sticky top-0   z-10 pointer">
      <div className="flex  w-full bg-[white] border-b-2 pt-1 pb-1 items-center shadow-lg ">
        <span className="block ml-8 lg:hidden">
          <i
            className="fa fa-bars text-[1.3rem] text-[#060685]"
            onClick={sideMenu}
          ></i>
        </span>
        <div className=" flex lg:pl-10  items-center mr-[-40px]">
          <span className="w-20 h-16 rounded-full ">
            <img className="w-full h-full " alt="logo" src={imageLogo}></img>
          </span>
          <span className="flex flex-col ml-[-12px] text-[#000000ce]">
            <h5 className="lg:text-[1.4rem] text-[1.2rem] font-bold">Texas</h5>
            <h5 className="ml-[16px] mt-[-10px] lg:text-[1rem] text-[0.9rem] font-semibold">
              Homes
            </h5>
          </span>
        </div>

        <span className="ml-auto hidden lg:flex ">
          <span
            className=" border-b-2 border-white hover:border-[#060685]  hover:transition-all"
            onClick={() => props.setIcontrol(true)}
          >
            <h5 className="text-[1rem] text-[#060685] ">INVESTMENT PLAN</h5>
          </span>
          <span
            className="ml-10 mr-10  border-b-2 border-white hover:border-[#060685]  hover:transition-all"
            onClick={() => props.setControlA(true)}
          >
            <h5 className="text-[1rem] text-[#060685]  ">ABOUT</h5>
          </span>
          <span className="text-[1rem] text-[#060685]  border-b-2 border-white hover:border-[#060685]  hover:transition-all">
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
      {menuVisible && (
        <Menu
          control={sideMenu}
          setControlA={props.setControlA}
          setIcontrol={props.setIcontrol}
        />
      )}
    </div>
  );
}
export default MenuTop;
