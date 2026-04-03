function RegisterationCongrats() {
  return (
    <div className="full flex justify-center bg-[#101025e1] min-h-screen max-h-fit  items-center p-5 flex-shrink">
      <div className="flex flex-wrap w-full max-h-fit max-w-[75rem] bg-[#1f1e1e] rounded-3xl border-[0.6px] border-[#4b4b4b]  p-10 gap-8">
        <div className="inline-flex flex-col flex-grow w-[50%]">
          <span className="flex flex-col text-[1.3rem] text-gray-100">
            <h5 className="font-bold">Texas</h5>
            <h5 className="font-semibold ml-4 mt-[-8px]">Homes</h5>
          </span>
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
              Start exploring Percent by browsing through our high-yield
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
        <div className="inline-flex flex-col w-full lg:w-[40%]">
          <span className="flex flex-col">
            <h5 className="text-gray-400 font-sans">First Name</h5>
            <input
              className="bg-transparent pl-2 border-[0.5px] rounded-md mt-1"
              placeholder="john"
            ></input>
          </span>
          <span className="flex flex-col">
            <h5 className="text-gray-400 font-sans mt-1.5">Last Name</h5>
            <input
              className="bg-transparent pl-2 border-[0.5px] rounded-md mt-1"
              placeholder="Dep"
            ></input>
          </span>
          <span className="flex flex-col">
            <h5 className="text-gray-400 font-sans mt-1.5">Email</h5>
            <input
              className="bg-transparent pl-2 border-[0.5px] rounded-md mt-1"
              placeholder="johndeo@gmail.com"
            ></input>
          </span>
          <span className="flex flex-col">
            <h5 className="text-gray-400 font-sans mt-1.5">Password</h5>
            <input
              className="bg-transparent pl-2 border-[0.5px] rounded-md mt-1"
              placeholder="*********"
            ></input>
          </span>
          <span>
            <h5 className="text-gray-400 font-sans mt-0.5">
              Use * or more characters with a mix of upper and lower case
              letters, numbers and symbols (!@#$%&*)
            </h5>
          </span>
          <span className="flex flex-col">
            <h5 className="text-gray-400 font-sans mt-1.5">Confirm Password</h5>
            <input
              className="bg-transparent pl-2 border-[0.5px] rounded-md mt-1"
              placeholder="*********"
            ></input>
          </span>
          <span className="w-full h-9 flex bg-[#4b4bdd] justify-center items-center mt-4 rounded-md">
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
        </div>
      </div>
    </div>
  );
}
export default RegisterationCongrats;
