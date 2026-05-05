import type { SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import logodark from "/images/logo/logodark.png";
type MenuControl = {
  func: React.Dispatch<SetStateAction<boolean>>;
};
function Menu(props: MenuControl) {
  const control = props.func;
  const urlNavigator = useNavigate();
  function saveMenuBar(type: string) {
    const MenuBar = "MENU_BAR";
    const control = {
      deals: type === "d" ? true : false,
      manager: type === "m" ? true : false,
      portfolio: type === "p" ? true : false,
      company: type === "c" ? true : false,
    };
    localStorage.setItem(MenuBar, JSON.stringify(control));
  }
  function toPotfolio() {
    saveMenuBar("p");
    const url = "/user/potfolio";
    urlNavigator(url, { replace: false });
  }
  function toCompany() {
    saveMenuBar("c");
    const url = "/company/potfolio";
    urlNavigator(url, { replace: false });
  }
  function toHome() {
    saveMenuBar("d");
    const url = "/auth/home";
    urlNavigator(url, { replace: false });
  }
  return (
    <div className="">
      <div className="flex gap-6 flex-col fixed bg-[#0d0d13] w-[80%] max-w-[350px] top-0 z-50 left-0 p-4 h-screen">
        <div className="flex items-center">
          <div className="flex  items-center mr-[-40px]">
            <span className="w-20 h-16 rounded-full ">
              <img className="w-full h-full " alt="logo" src={logodark}></img>
            </span>
            <span className="flex flex-col ml-[-12px] ">
              <h5 className="lg:text-[1.4rem] text-[1.2rem] font-bold">
                Texas
              </h5>
              <h5 className="ml-[16px] mt-[-10px] lg:text-[1rem] text-[0.9rem] font-semibold">
                Homes
              </h5>
            </span>
          </div>
          <span className="ml-auto mb-2">
            <i
              className="fa fa-xmark text-[1.2rem]"
              onClick={() => {
                control((prevControl) => !prevControl);
              }}
            ></i>
          </span>
        </div>

        <span className="flex text-[1rem] items-center mt-10" onClick={toHome}>
          <h5>DEALS</h5>
          <i className="fas fa-angle-right ml-auto" onClick={toCompany}></i>
        </span>
        <span className="flex text-[1rem] items-center">
          <h5>MANAGERS</h5>
          <i className="fas fa-angle-right ml-auto"></i>
        </span>
        <span className="flex text-[1rem] items-center" onClick={toPotfolio}>
          <h5>PORTFOLIO</h5>
          <i className="fas fa-angle-right ml-auto" onClick={toPotfolio}></i>
        </span>
        <span className="flex text-[1rem] items-center" onClick={toCompany}>
          <h5>COMPANY</h5>
          <i className="fas fa-angle-right ml-auto" onClick={toCompany}></i>
        </span>
      </div>
    </div>
  );
}
export default Menu;
