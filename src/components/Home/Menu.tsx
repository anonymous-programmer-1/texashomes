import { useNavigate } from "react-router-dom";
type MenuProps = {
  control: () => void;
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
      <div className="absolute z-50 w-[80%] max-w-[350px] bg-[#171718] h-screen">
        <span className="flex p-7 pb-2 justify-end">
          <i
            className="fa fa-xmark text-xl text-gray-200 "
            onClick={control}
          ></i>
        </span>
        <span className="flex p-7 flex-col gap-7">
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
          <span className="flex pt-2 pb-2 border-b-2 border-gray-200">
            <h5 className="text-[1rem] text-gray-200">INVESTMENT PLAN</h5>
            <i className="fas fa-angle-right text-xl text-gray-200 ml-auto"></i>
          </span>
          <span className="flex pt-2 pb-2 border-b-2 border-gray-200">
            <h5 className="text-[1rem] text-gray-200 ">ABOUT</h5>
            <i className="fas fa-angle-right text-xl text-gray-200 ml-auto"></i>
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
