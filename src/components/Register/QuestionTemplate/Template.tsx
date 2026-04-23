import type { ReactNode } from "react";
import LoadingBar from "./LoadingBar";
import logodark from "/images/logo/logodark.png";

function Template({
  rightContact,
  leftContact,
}: {
  rightContact: ReactNode;
  leftContact: ReactNode;
}) {
  return (
    <div className="full flex justify-center bg-[#101025e1] min-h-screen max-h-fit  items-center p-5 flex-shrink">
      <div className="flex flex-wrap w-[180%] max-h-fit max-w-[75rem] bg-[#1f1e1e] rounded-3xl border-[0.6px] border-[#4b4b4b]  p-10 gap-8">
        <div className="inline-flex flex-col flex-grow ">
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
          <div className="flex flex-col w-full h-full">
            <span className="flex flex-col mb-auto">
              {/**Conteant */}
              {rightContact && rightContact}
              {/**End */}
            </span>
            <LoadingBar />
          </div>
        </div>
        <div className="inline-flex flex-col w-full lg:w-[40%] gap-4">
          {/**Conteant */}
          {leftContact && leftContact}
          {/**End */}
        </div>
      </div>
    </div>
  );
}
export default Template;
