import MenuCategory from "./MenuCategory";
function DealsMenu() {
  return (
    <>
      <div className="w-full flex h-14 bg-[#171718] items-center">
        <span className="lg:pl-10 pl-5 text-gray-200 text-[1.5rem]">
          <h5>Deals</h5>
        </span>
        <span className="w-fit h-fit bg-[#4b4bdd] p-1 pl-2 pr-2 font-semibold text-gray-100 rounded-md ml-auto mr-5">
          <h5 className="hidden lg:block">ADD/WITHDRAW FUNDS</h5>
          <h5 className="lg:hidden block">ADD/WITHDRAW</h5>
        </span>
      </div>
      <MenuCategory />
    </>
  );
}
export default DealsMenu;
