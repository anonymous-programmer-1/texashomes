import { useState, useEffect, useRef } from "react";
type CloseControl = {
  setIsFunding: React.Dispatch<React.SetStateAction<boolean>>;
};
function Funding(props: CloseControl) {
  const [selectBankOption, setSelectBankOption] = useState<boolean>(false);
  const elementDiv = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!elementDiv.current) return;
    elementDiv.current.style.overflowY = "auto";
  }, []);
  return (
    <div
      className="max-w-[500px] sm:max-w-[400px] text-gray-200 w-full h-screen max-h-fit  bg-[#3a3a3a] right-0 absolute top-0 z-50"
      ref={elementDiv}
    >
      <span className="flex items-center p-5  border-b-[0.7px] border-gray-500">
        <span className=" lg:text-[1.3rem] text-[1.1rem] font-medium">
          <h5>Found Your Account</h5>
        </span>
        <span className="ml-auto  lg:text-[1.3rem] text-[1.1rem] font-medium">
          <i
            className="fa fa-xmark"
            onClick={() => props.setIsFunding(false)}
          ></i>
        </span>
      </span>
      <div className=" pl-5 pr-5 mt-32">
        <div className="mt-10">
          <h5 className="lg:text-[1.1rem] font-bold text-[1rem]">Type*</h5>
          <div className="flex mt-3 gap-7">
            <span className="flex items-center gap-2">
              <input className="w-4 h-4" type="radio"></input>
              <h5 className="lg:text-[1.2rem] text-[1rem] font-semibold text-[#919090]">
                Crypto Transfer
              </h5>
            </span>
            <span className="flex items-center gap-2">
              <input className="w-4 h-4" type="radio"></input>
              <h5 className="lg:text-[1.2rem] text-[1rem] font-semibold text-[#919090]">
                Wire Transfer
              </h5>
            </span>
          </div>
          <div className="flex flex-col mt-5 gap-6">
            <div className="">
              <span className="flex flex-col gap-1">
                <h5 className="lg:text-[1.1rem] text-[1rem] font-bold">From</h5>
                <span
                  className="flex items-center w-full text-gray-500 h-8 border-2 border-gray-500 bg-[#0d0d13] pl-3 pr-3"
                  onClick={() => setSelectBankOption(!selectBankOption)}
                >
                  <h5>Select Bank Account</h5>
                  {selectBankOption ? (
                    <i className="fas fa-angle-up  ml-auto "></i>
                  ) : (
                    <i className="fas fa-angle-down  ml-auto "></i>
                  )}
                </span>
              </span>
              {selectBankOption && (
                <div className="flex flex-col mt-4 gap-4 max-h-[80px] pl-4 w-full overflow-y-auto lg:text-[1.3rem] text-[1.1rem] transition-all">
                  <span className="flex items-center  h-10 ">
                    <i className="fa-brands fa-paypal text-blue-500"></i>
                    <h5>PayPal</h5>
                  </span>
                  <span className="flex items-center  h-10 ">
                    <i className="fa fa-skull"></i>
                    <h5>Venmo</h5>
                  </span>
                  <span className="flex items-center  h-10 ">
                    <i className="fa-brands fa-cash-app text-green-500"></i>
                    <h5>CashApp</h5>
                  </span>
                  <span className="flex items-center  h-10 ">
                    <i className="fas fa-bell"></i>
                    <h5>Chime</h5>
                  </span>
                </div>
              )}
            </div>
            <span className="flex flex-col gap-1">
              <h5 className="lg:text-[1.1rem] text-[1rem] font-bold">
                How much do you want to contribute ?*
              </h5>
              <input
                className="flex items-center w-full text-gray-500 h-8 border-2 border-gray-500 bg-[#181820] pl-3 pr-3"
                placeholder="$ Enter Amount"
              ></input>
            </span>
          </div>
          <div className="font-semibold mt-20">
            <h5>
              By clicking the "FUND ACCOUNT" button, you authorize Percent to
              initiate an ACH debit from the designated bank account for the
              amount you have entered above to fund your Percent Account, as
              more fully described in our Terms of Use. Deposit requests made on
              business days prior to 2:00PM ET will be processed the same day.
              Requests after this time will be processed the following business
              day. Funds will be credited to your Percent account in 1-3
              business days, depending on your bank. Please be aware that while
              Percent does not charge fees for ACH transfers, you may incur
              processing fees from your bank. Please see our Terms of Use for
              additional details regarding newly funded accounts, including the
              ability to use funds transferred into your Percent Account
              pursuant to this authorization.
            </h5>
          </div>
          <div className="mt-10 flex justify-end gap-4 pb-16 items-center">
            <span>
              <h5 className="text-[1.2rem] text-baseDark-blue font-bold">
                CANCEL
              </h5>
            </span>
            <span className="flex items-center justify-center w-fit h-fit pl-4 pr-4 p-1.5 rounded-lg bg-[#585757] ">
              <h5 className="text-[1.2rem] text-gray-500 font-bold">
                FUND ACCOUNT
              </h5>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Funding;
