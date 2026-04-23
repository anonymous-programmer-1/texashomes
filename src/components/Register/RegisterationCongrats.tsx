import congratsImg from "/images/logo/congrats.png";
import logodark from "/images/logo/logodark.png";
import { useNavigate } from "react-router-dom";
function RegisterationCongrats() {
  const urlNavigator = useNavigate();
  function registed() {
    const url = "/auth/home";
    urlNavigator(url, { replace: true });
  }
  return (
    <div className="full flex justify-center bg-[#101025e1] min-h-screen max-h-fit  items-center p-5 flex-shrink">
      <div className="flex flex-wrap w-full max-h-fit max-w-[75rem] bg-[#1f1e1e] rounded-3xl border-[0.6px] border-[#4b4b4b]  p-10 gap-8">
        <div className="inline-flex flex-col flex-grow w-[50%]">
          <div className=" flex  items-center">
            <span className="w-20 h-16 rounded-full ">
              <img className="w-full h-full " alt="logo" src={logodark}></img>
            </span>
            <span className="flex flex-col ml-[-12px] text-baseDark-blue">
              <h5 className="lg:text-[1.4rem] text-[1.2rem] font-bold">
                Texas
              </h5>
              <h5 className="ml-[16px] mt-[-10px] lg:text-[1rem] text-[0.9rem] font-semibold">
                Homes
              </h5>
            </span>
          </div>
          <span className="flex flex-col">
            <h5 className="font-normal text-[1.3rem] text-gray-100 mt-5">
              Congratulations 🎉
            </h5>
            <h5 className="text-gray-100 font-sans mt-1.5">
              You have successfully set up your account.
            </h5>
          </span>
          <span className="flex mt-1.5">
            <h5 className="text-gray-100 font-sans mt-1.5">
              Start exploring propartys by browsing through our high-yield
              investment opportunities, learn more about borrowers on the
              platform and analyze historical market data.
            </h5>
          </span>
          <span className="flex flex-col mt-1.5">
            <h5 className="text-gray-100 font-sans mt-1.5">
              If you have any questions, please do not hesitate to contact us at
            </h5>
            <a className="text-[#4b4bdd] font-sans">texassupport@gmail.com</a>
          </span>
        </div>
        <div className="flex flex-col">
          <span className="w-full max-w-[25rem] h-[22rem]">
            <img className="w-full h-full  rounded-xl" src={congratsImg}></img>
          </span>
          <span className="flex justify-center mt-4">
            <span
              className="w-fit pl-4 pr-4 pt-1 pb-1 h-fit bg-[#060685] rounded-md"
              onClick={registed}
            >
              <h5 className="font-bold text-[1rem] text-gray-100">EXPLORE</h5>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
export default RegisterationCongrats;
