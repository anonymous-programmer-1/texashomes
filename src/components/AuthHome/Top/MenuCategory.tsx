function MenuCategory() {
  return (
    <div className="w-full min-h-14 max-h-fit pb-4 bg-[#090913e1]">
      <div className="flex flex-wrap w-full h-full items-center lg:pl-10 pl-5 gap-2.5 ">
        <span className="flex flex-col gap-0.5">
          <h5 className="text-gray-400">Deals/House</h5>
          <span className="w-[8rem] h-fit">
            <input
              className="w-full border-[0.5px] bg-transparent rounded-md pl-2"
              placeholder="Search"
            ></input>
          </span>
        </span>
        <span className="flex flex-col gap-0.5 ">
          <h5 className="text-gray-400">Financing Type</h5>
          <span className="w-[8rem] h-fit flex pl-2 border-[0.5px] bg-transparent text-gray-400 font-semibold rounded-md">
            <h5>ALL</h5>
            <i className="fas fa-angle-down mt-1 ml-auto mr-1"></i>
          </span>
        </span>
        <span className="flex flex-col gap-0.5">
          <h5 className="text-gray-400">Statues</h5>
          <span className="w-[8rem] h-fit flex pl-2 border-[0.5px] bg-transparent text-gray-200 font-semibold rounded-md">
            <h5>FUNDING</h5>
            <i className="fas fa-angle-down mt-1 ml-auto mr-1"></i>
          </span>
        </span>
      </div>
    </div>
  );
}
export default MenuCategory;
