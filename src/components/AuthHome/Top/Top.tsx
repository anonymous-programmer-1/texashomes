import logodark from "/images/logo/logodark.png";
import { userAppContext } from "../../ContextApi/UserContext";
import { useState, lazy } from "react";
const Menu = lazy(() => import("./Menu"));
const UserMenu = lazy(() => import("./UserMenu"));
type UserDetailsProp = {
  firstName: string;
  lastName: string;
};
function Top() {
  const userDetails = userAppContext();
  const [menuContrl, setMenuControl] = useState<boolean>(false);
  const [userMenuControl, setUserMenuControl] = useState<boolean>(false);
  if (!userDetails) return;
  const { userData } = userDetails;
  const userName = {
    firstName: userData.firstname,
    lastName: userData.lastname,
  };
  const formatedLastName = `${userName.lastName.split("")[0]}/${userName.lastName.split("")[1]}`;
  const userDetailsProp: UserDetailsProp = {
    firstName: userData.firstname,
    lastName: formatedLastName,
  };
  return (
    <>
      <div className="bg-[#0d0d13] sticky top-0 z-10">
        <div className="w-full flex lg:pl-10 pl-5 ">
          <span className="w-24 h-20 rounded-full ">
            <img className="w-full h-full " alt="logo" src={logodark}></img>
          </span>
          <div className="items-center gap-7 ml-16 hidden lg:flex">
            <span className=" text-gray-400 font-semibold">
              <h5>DEALS</h5>
            </span>
            <span className=" text-gray-400 font-semibold">
              <h5>MANAGERS</h5>
            </span>

            <span className=" text-gray-400 font-semibold">
              <h5>PORTFOLIO</h5>
            </span>
            <span className=" text-gray-400 font-semibold">
              <h5>COMPANY</h5>
            </span>
          </div>
          <span className="flex items-center  text-gray-400 text-[1rem] ml-4 lg:hidden">
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
            <span className="flex items-center w-fit h-fit p-1.5 pl-2.5 pr-2.5 rounded-full gap-1 bg-[#4b4bdd] ">
              <i className="fa fa-message font-light text-gray-100"></i>
              <h5 className="text-gray-100 font-bold text-[0.9rem]">CHAT</h5>
            </span>
          </span>
          <span className="flex items-center ml-[25px] pr-5">
            <span className="flex text-gray-400 gap-1.5">
              <i
                className="fa fa-user font-light mt-[5px] text-[1.3rem]"
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
                  className="fas fa-angle-up mt-[5px] lg:block hidden"
                  onClick={() => {
                    setUserMenuControl(!userMenuControl);
                    setMenuControl(false);
                  }}
                ></i>
              ) : (
                <i
                  className="fas fa-angle-down mt-[5px] lg:block hidden"
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
