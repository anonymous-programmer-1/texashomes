function MenuCartigory() {
  return (
    <div className="bg-baseCard-color w-full flex h-fit  ">
      <div className="lg:flex w-full gap-8 lg:pl-10 pl-5 pt-2 pb-2 hidden">
        <span className="pt-1 pb-1 border-[#0e0e77]   border-opacity-0 border-b-2 hover:border-baseDark-blue  hover:transition-all pointer">
          <h5 className="text-[0.9rem] font-bold text-gray-300">OVERVIEW</h5>
        </span>
        <span className="pt-1 pb-1 border-[#0e0e77]  border-opacity-0 border-b-2 hover:border-baseDark-blue  hover:transition-all pointer">
          <h5 className="text-[0.9rem] font-bold text-gray-300">RETURNS</h5>
        </span>
        <span className="pt-1 pb-1 border-[#0e0e77]  border-opacity-0 border-b-2 hover:border-baseDark-blue  hover:transition-all pointer">
          <h5 className="text-[0.9rem] font-bold text-gray-300">
            TRANSACTION HISTORY
          </h5>
        </span>
      </div>
    </div>
  );
}
export default MenuCartigory;
