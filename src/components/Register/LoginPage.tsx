import logodark from "/images/logo/logodark.png";
import { useNavigate } from "react-router-dom";
import { useRef, lazy, type RefObject } from "react";
import { userAppContext } from "../ContextApi/UserContext";
const LoadingRing = lazy(() => import("../Loading animation/loadingRing"));

function LoginPage() {
  return (
    <div className="full flex justify-center bg-[#101025e1] min-h-screen max-h-fit  items-center p-5 flex-shrink">
      <div className="flex flex-wrap w-[180%] max-h-fit max-w-[75rem] bg-[#1f1e1e] rounded-3xl border-[0.6px] border-[#4b4b4b]  p-10 gap-8">
        <div className="inline-flex flex-col flex-grow ">
          <span className="w-24 h-20 rounded-full ">
            <img className="w-full h-full " alt="logo" src={logodark}></img>
          </span>
          <span className="flex flex-col">
            <h5 className="font-normal text-[1.3rem] text-gray-100 mt-5">
              Sign up for Texas Homes
            </h5>
            <h5 className="text-gray-100 font-sans mt-1.5">
              We're excited to have you on bord let's get started by creatinf
              your investor account
            </h5>
          </span>
          <span className="flex mt-6">
            <h5 className="text-gray-100 font-sans mr-1">
              Don't have an account?
            </h5>
            <a className="text-[#4b4bdd] font-sans" href="signin">
              Sign up
            </a>
          </span>
        </div>
        <div className="inline-flex flex-col w-full lg:w-[40%] mt-5">
          <span className="flex flex-col">
            <h5 className="text-gray-400 font-sans mt-1.5">Email</h5>
            <input
              className="bg-transparent pl-2 border-[0.5px] rounded-md mt-1 text-gray-100"
              placeholder="johndeo@gmail.com"
            ></input>
          </span>
          <span className="flex flex-col mb-5 mt-3">
            <h5 className="text-gray-400 font-sans mt-1.5">Password</h5>
            <input
              className="bg-transparent pl-2 border-[0.5px] rounded-md mt-1 text-gray-100"
              placeholder="*********"
            ></input>
          </span>
          <span>
            <h5 className="text-gray-400 font-sans mt-0.5">
              Use * or more characters with a mix of upper and lower case
              letters, numbers and symbols (!@#$%&*)
            </h5>
          </span>
          <span className="w-full h-9 flex bg-[#4b4bdd] justify-center items-center mt-4 rounded-md">
            <h5 className="text-[1rem] font-bold text-gray-100">SIGN IN</h5>
          </span>
          <span className="flex justify-center mt-6">
            <span className="w-full h-[2px] bg-gray-500"></span>
            <h5 className="text-gray-400 font-sans ml-3 mr-3 mt-[-14px] font-semibold">
              or
            </h5>
            <span className="w-full h-[2px] bg-gray-500"></span>
          </span>
          <span className="w-full h-9 flex bg-transparent border-[0.5px] border-[#4b4bdd] justify-center items-center mt-4 rounded-md">
            <i className="fa-brands fa-google text-[1rem] font-bold text-[#7474c5] mr-1"></i>
            <h5 className="text-[1rem] font-bold text-[#4b4bdd]">
              SIGN UP WITH GOOGLE
            </h5>
          </span>
          <span className="flex justify-center w-full mt-2">
            <h5 className=" text-gray-300">
              By continuing, you agree to the{" "}
              <strong className="ml-1 mr-1 text-[#4b4bdd]">Terms of Use</strong>{" "}
              and
              <strong className="ml-1  text-[#4b4bdd]">Privacy Policy</strong>
            </h5>
          </span>
        </div>
      </div>
      <div className="fixed z-50 top-0 ">
        <span className="hidden ">
          <LoadingRing />
        </span>
      </div>
    </div>
  );
}
export default LoginPage;
