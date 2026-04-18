import logodark from "/images/logo/logodark.png";
import { userAppContext } from "../../ContextApi/UserContext";
import { useState, lazy, useEffect, useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
const Menu = lazy(() => import("./Menu"));
const UserMenu = lazy(() => import("./UserMenu"));

type UserDetailsProp = {
  firstName: string;
  lastName: string;
};
type MenuBarData = {
  deals: boolean;
  manager: boolean;
  portfolio: boolean;
  company: boolean;
};
function Top() {
  const urlNavigator = useNavigate();
  const userDetails = userAppContext();
  const [menuContrl, setMenuControl] = useState<boolean>(false);
  const [userMenuControl, setUserMenuControl] = useState<boolean>(false);
  const [deals, setDeals] = useState<boolean>(true);
  const [manager, setManager] = useState<boolean>(false);
  const [portfolio, setPortfolio] = useState<boolean>(false);
  const [company, setCompany] = useState<boolean>(false);
  const dealsRef = useRef<HTMLHeadingElement>(null);
  const managerRef = useRef<HTMLHeadingElement>(null);
  const portfolioRef = useRef<HTMLHeadingElement>(null);
  const companyRef = useRef<HTMLHeadingElement>(null);
  if (!userDetails) return;
  const { userData } = userDetails;
  if (!userData) return;
  const userName = {
    firstName: userData.firstname,
    lastName: userData.lastname,
  };
  const locationPath = window.location.pathname;
  useEffect(() => {
    const test = userName.firstName === "" || userName.lastName === "";
    if (test) {
      urlNavigator("/", { replace: true });
    }
  }, [userName.firstName, userName.lastName, urlNavigator]);
  useEffect(() => {
    if (
      !dealsRef.current ||
      !managerRef.current ||
      !portfolioRef.current ||
      !companyRef.current
    )
      return;
    if (deals) {
      dealsRef.current.style.color = "#0e0e77";
    } else {
      dealsRef.current.style.color = "#9CA3AF";
    }
    if (manager) {
      managerRef.current.style.color = "#0e0e77";
    } else {
      managerRef.current.style.color = "#9CA3AF";
    }
    if (portfolio) {
      portfolioRef.current.style.color = "#0e0e77";
    } else {
      portfolioRef.current.style.color = "#9CA3AF";
    }
    if (company) {
      companyRef.current.style.color = "#0e0e77";
    } else {
      companyRef.current.style.color = "#9CA3AF";
    }
  }, [deals, manager, portfolio, company]);
  useEffect(() => {
    const MenuBar = "MENU_BAR";
    const data: MenuBarData | null = JSON.parse(localStorage.getItem(MenuBar));
    if (data) {
      setDeals(data.deals);
      setManager(data.manager);
      setPortfolio(data.portfolio);
      setCompany(data.company);
    }
  }, []);
  useLayoutEffect(() => {
    const path = "/texashomes/auth/home";
    if (locationPath === path) {
      const MenuBar = "MENU_BAR";
      const control = {
        deals: true,
        manager: false,
        portfolio: false,
        company: false,
      };
      localStorage.setItem(MenuBar, JSON.stringify(control));
    }
  }, [locationPath]);
  // Cleaner approach using slice
  const formatedLastName = userName.lastName
    ? `${userName.lastName.slice(0, 2).split("").join("/")}`
    : "";

  const userDetailsProp: UserDetailsProp = {
    firstName: userData.firstname,
    lastName: formatedLastName,
  };
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
    <>
      <div className="bg-[#0d0d13] sticky top-0 z-10 overflow-hidden">
        <div className="w-full flex lg:pl-10 pl-5 ">
          <span className="w-24 h-20 rounded-full ">
            <img className="w-full h-full " alt="logo" src={logodark}></img>
          </span>
          <div className="items-center gap-7 ml-16 hidden lg:flex">
            <span
              className=" font-semibold border-[#0e0e77] border-opacity-0 border-b-2 hover:border-[#0e0e77]  hover:transition-all pt-4 pb-4 pointer "
              onClick={toHome}
            >
              <h5 onClick={toHome} ref={dealsRef}>
                DEALS
              </h5>
            </span>
            <span className=" text-gray-400 font-semibold  border-[#0e0e77] border-opacity-0 border-b-2 hover:border-[#0e0e77]  hover:transition-all pt-4 pb-4 pointer">
              <h5 ref={managerRef}>MANAGERS</h5>
            </span>

            <span
              className=" text-gray-400 font-semibold  border-[#0e0e77] border-opacity-0 border-b-2 hover:border-[#0e0e77]  hover:transition-all pt-4 pb-4 pointer"
              onClick={toPotfolio}
            >
              <h5 ref={portfolioRef}>PORTFOLIO</h5>
            </span>
            <span
              className=" text-gray-400 font-semibold  border-[#0e0e77] border-opacity-0 border-b-2 hover:border-[#0e0e77]  hover:transition-all pt-4 pb-4 pointer"
              onClick={toCompany}
            >
              <h5 ref={companyRef}>COMPANY</h5>
            </span>
          </div>
          <span className="flex items-center  text-gray-400 text-[1rem] ml-4 lg:hidden pointer">
            <i
              className="fa fa-bars text-[1.3rem]"
              onClick={() => {
                setMenuControl(!menuContrl);
                setUserMenuControl(false);
              }}
            ></i>
            {menuContrl && <Menu func={setMenuControl} />}
          </span>
          <span className="flex items-center ml-auto">
            <span className="flex items-center w-fit h-fit p-1.5 pl-2.5 pr-2.5 rounded-full gap-1 bg-[#3a3ac5] hover:bg-[#0e0e77]  hover:transition-all  pointer">
              <i className="fa fa-message font-light text-gray-100"></i>
              <h5 className="text-gray-100 font-bold text-[0.9rem]">CHAT</h5>
            </span>
          </span>
          <span className="flex items-center ml-[25px] pr-5">
            <span className="flex text-gray-400 gap-1.5">
              <i
                className="fa fa-user font-light mt-[5px] text-[1.3rem] pointer"
                onClick={() => {
                  setUserMenuControl(!userMenuControl);
                  setMenuControl(false);
                }}
              ></i>
              <h5 className="font-bold lg:block hidden">
                {userName.firstName}
              </h5>
              <h5 className="font-bold lg:block hidden">{formatedLastName}</h5>
              {userMenuControl ? (
                <i
                  className="fas fa-angle-up mt-[5px] lg:block hidden pointer"
                  onClick={() => {
                    setUserMenuControl(!userMenuControl);
                    setMenuControl(false);
                  }}
                ></i>
              ) : (
                <i
                  className="fas fa-angle-down mt-[5px] lg:block hidden pointer"
                  onClick={() => {
                    setUserMenuControl(!userMenuControl);
                    setMenuControl(false);
                  }}
                ></i>
              )}
              <i></i>
            </span>
            {userMenuControl && <UserMenu body={userDetailsProp} />}
          </span>
        </div>
      </div>
    </>
  );
}
export default Top;
