import logodark from "/images/logo/logodark.png";
import { useNavigate } from "react-router-dom";
import { useRef, lazy, type RefObject } from "react";
import { userAppContext } from "../ContextApi/UserContext";
const LoadingRing = lazy(() => import("../Loading animation/loadingRing"));
const ServerBaseUrl = import.meta.env.VITE_SERVER_BASE_URL;
function LoginPage() {
  const urlNavigator = useNavigate();
  const email = useRef<HTMLInputElement | null>(null);
  const emailText = useRef<HTMLHeadingElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
  const passwordText = useRef<HTMLHeadingElement | null>(null);
  const loadingAnimation = useRef<HTMLSpanElement>(null);
  const useDeatails = userAppContext();
  if (!useDeatails) return;
  const { setUserData } = useDeatails;
  function signin() {
    const url = "/signin";
    urlNavigator(url, { replace: false });
  }
  async function sigIn(
    email: RefObject<HTMLInputElement | null>,
    password: RefObject<HTMLInputElement | null>,
  ) {
    if (!email.current || !password.current) return;
    if (!loadingAnimation.current) return;
    try {
      const data = {
        email: email.current.value,
        password: password.current.value,
      }; //!https://texashomes-backend-3.onrender.com
      const url = `${ServerBaseUrl}/user/login`;
      const validateUserSignin = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responds = await validateUserSignin.json();
      loadingAnimation.current.style.display = "none";
      if (responds.status !== 200) return alert(responds.massage);
      setUserData(responds.data);
      const route = "/auth/home";
      urlNavigator(route, { replace: true });
    } catch (error) {
      console.log(error);
    }
  }
  function validateRequst() {
    if (
      !email.current ||
      !emailText.current ||
      !password.current ||
      !passwordText.current
    )
      return;
    if (email.current?.value.trim() === "") {
      return (email.current.style.borderColor = "#b11515");
    } else {
      email.current.style.borderColor = "#ccc9c9";
      emailText.current.textContent = "Email";
      emailText.current.style.color = "#a7a6a6";
      if (!email.current.value.includes("@")) {
        emailText.current.textContent = "Enter a valid email";
        emailText.current.style.color = "#d31414";
        return;
      }
    }
    if (password.current.value.trim() === "") {
      return (password.current.style.borderColor = "#b11515");
    } else {
      password.current.style.borderColor = "#ccc9c9";
    }
    if (!loadingAnimation.current) return;
    loadingAnimation.current.style.display = "block";
    sigIn(email, password);
  }
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
            <a className="text-[#4b4bdd] font-sans" onClick={signin}>
              Sign up
            </a>
          </span>
        </div>
        <div className="inline-flex flex-col w-full lg:w-[40%] mt-5">
          <span className="flex flex-col">
            <h5 className="text-gray-400 font-sans mt-1.5" ref={emailText}>
              Email
            </h5>
            <input
              className="bg-transparent pl-2 border-[0.5px] rounded-md mt-1 text-gray-100"
              placeholder="johndeo@gmail.com"
              ref={email}
            ></input>
          </span>
          <span className="flex flex-col mb-5 mt-3">
            <h5 className="text-gray-400 font-sans mt-1.5" ref={passwordText}>
              Password
            </h5>
            <input
              className="bg-transparent pl-2 border-[0.5px] rounded-md mt-1 text-gray-100"
              placeholder="*********"
              ref={password}
            ></input>
          </span>
          <span>
            <h5 className="text-gray-400 font-sans mt-0.5">
              Use * or more characters with a mix of upper and lower case
              letters, numbers and symbols (!@#$%&*)
            </h5>
          </span>
          <span
            className="w-full h-9 flex bg-[#4b4bdd] justify-center items-center mt-4 rounded-md"
            onClick={validateRequst}
          >
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
              SIGN IN WITH GOOGLE
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
        <span className="hidden " ref={loadingAnimation}>
          <LoadingRing />
        </span>
      </div>
    </div>
  );
}
export default LoginPage;
