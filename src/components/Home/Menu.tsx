import { useNavigate } from "react-router-dom";
import imageLogo from "/images/logo/logo.png";
type MenuProps = {
  control: () => void;
  setControlA: React.Dispatch<React.SetStateAction<boolean>>;
  setIcontrol: React.Dispatch<React.SetStateAction<boolean>>;
};
function Menu(props: MenuProps) {
  const control = props.control;
  const urlNavigator = useNavigate();
  function signIn() {
    const url = "/signin";
    urlNavigator(url, { replace: false });
  }
  return (
    <div className="w-full lg:hidden block">
      <div className="absolute top-0 z-50 w-[80%] max-w-[350px] bg-[#171718] h-screen">
        <span className="flex p-2 pl-7 pr-7 pb-2 items-center">
          <div className="flex items-center">
            <span className="w-20 h-16 rounded-full ">
              <img className="w-full h-full " alt="logo" src={imageLogo}></img>
            </span>
            <span className="flex flex-col ml-[-12px] text-gray-300">
              <h5 className="lg:text-[1.4rem] text-[1.2rem] font-bold">
                Texas
              </h5>
              <h5 className="ml-[16px] mt-[-10px] lg:text-[1rem] text-[0.9rem] font-semibold">
                Homes
              </h5>
            </span>
          </div>

          <i
            className="fa fa-xmark ml-auto text-xl text-gray-200 "
            onClick={control}
          ></i>
        </span>
        <span className="flex p-7 pt-10 flex-col gap-7">
          <span
            className="flex pt-2 pb-2 border-b-2 border-gray-200"
            onClick={signIn}
          >
            <h5 className="text-[1rem] text-gray-200" onClick={signIn}>
              SIGN IN
            </h5>
            <i
              className="fas fa-angle-right text-xl text-gray-200 ml-auto"
              onClick={signIn}
            ></i>
          </span>
          <span
            className="flex pt-2 pb-2 border-b-2 border-gray-200"
            onClick={() => props.setIcontrol(true)}
          >
            <h5 className="text-[1rem] text-gray-200">INVESTMENT PLAN</h5>
            <i
              className="fas fa-angle-right text-xl text-gray-200 ml-auto"
              onClick={() => props.setIcontrol(true)}
            ></i>
          </span>
          <span
            className="flex pt-2 pb-2 border-b-2 border-gray-200"
            onClick={() => props.setControlA(true)}
          >
            <h5 className="text-[1rem] text-gray-200 ">ABOUT</h5>
            <i
              className="fas fa-angle-right text-xl text-gray-200 ml-auto"
              onClick={() => props.setControlA(true)}
            ></i>
          </span>
          <span className="flex pt-2 pb-2 border-b-2 border-gray-200">
            <h5 className="text-[1rem] text-gray-200">CONTACT US</h5>
            <i className="fas fa-angle-right text-xl text-gray-200 ml-auto"></i>
          </span>
        </span>
      </div>
    </div>
  );
}
export default Menu;
