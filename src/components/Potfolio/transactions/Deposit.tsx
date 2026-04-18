function Deposit() {
  return (
    <div className="transition-all w-full h-fit flex flex-col items-center  p-6 border-[1px] border-baseCard-borderColor bg-baseCard-color rounded-md">
      <h5 className="text-[1.2rem] self-start font-semibold text-gray-300">
        Deposit
      </h5>
      <div className="flex flex-col items-center mt-6">
        <span className="fa fa-book text-[8rem] text-[#52515193]  rounded-lg "></span>
        <h5 className="text-[1.2rem] text-gray-300 mt-3 font-semibold">
          No Results
        </h5>
        <h5 className="mt-2 text-gray-300">You haven't made any deposit</h5>
      </div>
    </div>
  );
}
export default Deposit;
