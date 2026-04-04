function ItemNameAndInvest() {
  return (
    <>
      <div className="w-full flex h-16 bg-[#171718] items-center">
        <span className="lg:pl-10 pl-5 text-gray-200 lg:text-[1.5rem] text-[1.1rem]">
          <h5>NYT Inventory Financing Sr. 2026-2</h5>
        </span>
        <span className="w-fit h-fit flex bg-[#4b4bdd] p-2 font-semibold text-gray-100 rounded-full ml-auto mr-5">
          <i className="fas fa-circle-check mr-0.5 mt-0.5 text-[1.2rem] font-normal"></i>
          <h5 className="hidden lg:block">INVEST IN THIS DEAL</h5>
          <h5 className="lg:hidden block">INVEST</h5>
        </span>
      </div>
    </>
  );
}
export default ItemNameAndInvest;
