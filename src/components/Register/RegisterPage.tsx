import logodark from "/images/logo/logodark.png";
import { useNavigate } from "react-router-dom";
import { useRef, lazy, type RefObject } from "react";
import { userAppContext } from "../ContextApi/UserContext";
const LoadingRing = lazy(() => import("../Loading animation/loadingRing"));
const ServerBaseUrl = import.meta.env.VITE_SERVER_BASE_URL;
//*
type UserDataType = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  portfolio: {
    amount: string;
    friends: object[];
    wallet: string;
    transactions: object[];
    totalReturnsPi: string;
  };
  chats: object[];
};
function RegisterPage() {
  const urlNavigator = useNavigate();
  const firstName = useRef<HTMLInputElement | null>(null);
  const lastName = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const emailText = useRef<HTMLHeadingElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
  const passwordText = useRef<HTMLHeadingElement | null>(null);
  const comfirmPassword = useRef<HTMLInputElement | null>(null);
  const comfirmPasswordText = useRef<HTMLHeadingElement | null>(null);
  const loadingAnimation = useRef<HTMLSpanElement>(null);
  const userDetails = userAppContext();
  if (!userDetails) return null;
  const { setUserData } = userDetails;
  function saveRegistrationDetails(data: UserDataType) {
    setUserData(data);
    const url = "/about/user/portfolio/q";
    urlNavigator(url, { replace: false });
  }
  function login() {
    const url = "/login";
    urlNavigator(url, { replace: false });
  }
  function ValidateInput(
    firstName: RefObject<HTMLInputElement | null>,
    lastName: RefObject<HTMLInputElement | null>,
    email: RefObject<HTMLInputElement | null>,
    emailText: RefObject<HTMLHeadingElement | null>,
    password: RefObject<HTMLInputElement | null>,
    passwordText: RefObject<HTMLHeadingElement | null>,
    comfirmPassword: RefObject<HTMLInputElement | null>,
    comfirmPasswordText: RefObject<HTMLHeadingElement | null>,
    callBack: (
      firstName: RefObject<HTMLInputElement | null>,
      lastName: RefObject<HTMLInputElement | null>,
      email: RefObject<HTMLInputElement | null>,
      password: RefObject<HTMLInputElement | null>,
    ) => void,
  ) {
    if (
      !firstName.current ||
      !lastName.current ||
      !email.current ||
      !emailText.current ||
      !password.current ||
      !passwordText.current ||
      !comfirmPassword.current ||
      !comfirmPasswordText.current
    ) {
      return;
    }
    if (firstName.current.value.trim() === "") {
      return (firstName.current.style.borderColor = "#b11515");
    } else {
      firstName.current.style.borderColor = "#ccc9c9";
    }
    if (lastName.current.value.trim() === "") {
      return (lastName.current.style.borderColor = "#b11515");
    } else {
      lastName.current.style.borderColor = "#ccc9c9";
    }
    if (email.current.value.trim() === "") {
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
      if (password.current.value.trim() === "") {
        return (password.current.style.borderColor = "#b11515");
      } else {
        password.current.style.borderColor = "#ccc9c9";
      }
      if (comfirmPassword.current.value !== password.current.value) {
        passwordText.current.textContent = "Password didn't macth";
        passwordText.current.style.color = "#d31414";
        comfirmPasswordText.current.textContent = "Password didn't macth";
        comfirmPasswordText.current.style.color = "#d31414";
        return;
      } else {
        comfirmPassword.current.style.borderColor = "#ccc9c9";
        password.current.style.borderColor = "#ccc9c9";
        passwordText.current.textContent = "Password ";
        passwordText.current.style.color = "#ccc9c9";
        comfirmPasswordText.current.textContent = "Comfirm Password";
        comfirmPasswordText.current.style.color = "#ccc9c9";
      }
      if (comfirmPassword.current.value.trim() === "") {
        return (comfirmPassword.current.style.borderColor = "#b11515");
      } else {
        comfirmPassword.current.style.borderColor = "#ccc9c9";
      }
      renderLoading(true, loadingAnimation);
      //!
      setTimeout(() => {
        callBack(firstName, lastName, email, password);
      }, 1000);
    }
  }
  async function registerUser(
    firstName: RefObject<HTMLInputElement | null>,
    lastName: RefObject<HTMLInputElement | null>,
    email: RefObject<HTMLInputElement | null>,
    password: RefObject<HTMLInputElement | null>,
  ) {
    if (
      !firstName.current ||
      !lastName.current ||
      !email.current ||
      !password.current
    ) {
      return;
    }
    try {
      const registerationData = {
        firstname: firstName.current.value,
        lastname: lastName.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      const serverUrl = `${ServerBaseUrl}/user/register`; //!https://texashomes-backend-3.onrender.com
      const sendData = await fetch(serverUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerationData),
      });
      const responds = await sendData.json();
      renderLoading(false, loadingAnimation);
      if (responds.status === 201) {
        saveRegistrationDetails(responds.data);
      }
      alert(responds.massage);
    } catch (error) {
      console.log(error);
    }
  }
  function signUp() {
    ValidateInput(
      firstName,
      lastName,
      email,
      emailText,
      password,
      passwordText,
      comfirmPassword,
      comfirmPasswordText,
      registerUser,
    );
  }
  function renderLoading(
    swicth: boolean,
    loadingAnimation: RefObject<HTMLSpanElement | null>,
  ) {
    if (!loadingAnimation.current) return;
    if (swicth) {
      loadingAnimation.current.style.display = "block";
      return;
    }
    loadingAnimation.current.style.display = "none";
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
              Already have an account?
            </h5>
            <a className="text-[#4b4bdd] font-sans" onClick={login}>
              Sign in
            </a>
          </span>
        </div>
        <div className="inline-flex flex-col w-full lg:w-[40%]">
          <span className="flex flex-col">
            <h5 className="text-gray-400 font-sans">First Name</h5>
            <input
              className="bg-transparent pl-2 border-[0.5px] border-[#ccc9c9]  rounded-md mt-1 text-gray-100"
              placeholder="john"
              ref={firstName}
            ></input>
          </span>
          <span className="flex flex-col">
            <h5 className="text-gray-400 font-sans mt-1.5 ">Last Name</h5>
            <input
              className="bg-transparent pl-2 border-[0.5px] rounded-md mt-1 text-gray-100 "
              placeholder="Dep"
              ref={lastName}
            ></input>
          </span>
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
          <span className="flex flex-col">
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
          <span className="flex flex-col">
            <h5
              className="text-gray-400 font-sans mt-1.5"
              ref={comfirmPasswordText}
            >
              Confirm Password
            </h5>
            <input
              className="bg-transparent pl-2 border-[0.5px] rounded-md mt-1 text-gray-100"
              placeholder="*********"
              ref={comfirmPassword}
            ></input>
          </span>
          <span
            className="w-full h-9 flex bg-[#4b4bdd] justify-center items-center mt-4 rounded-md"
            onClick={signUp}
          >
            <h5 className="text-[1rem] font-bold text-gray-100">SIGN UP</h5>
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
        <span className="hidden " ref={loadingAnimation}>
          <LoadingRing />
        </span>
      </div>
    </div>
  );
}
export default RegisterPage;
