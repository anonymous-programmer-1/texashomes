function HeadText() {
  return (
    <div className="w-full h-16 bg-[#171718] overflow-hidden flex lg:pl-10 pl-5">
      <span className="flex h-full  text-gray-200 text-[1.3rem] items-center">
        <h5>Portfolio</h5>
      </span>
      <span className="flex items-center ml-auto mr-5">
        <span className="w-fit h-fit flex  bg-[#3a3ac5] hover:bg-[#0e0e77]  hover:transition-all p-1 pl-2 pr-2 font-semibold text-gray-100 rounded-md  pointer">
          <h5 className="hidden lg:block">ADD/WITHDRAW FUNDS</h5>
          <h5 className="lg:hidden block">ADD/WITHDRAW</h5>
        </span>
      </span>
    </div>
  );
}
export default HeadText;
