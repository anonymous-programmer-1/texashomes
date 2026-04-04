function MenuCategory() {
  return (
    <div className="w-full  bg-white   ">
      <div className="flex pl-8  gap-4 flex-wrap pt-5  pb-5">
        <span className="flex w-36 border-2 h-9 items-center pl-2 pr-2">
          <h5 className="text-[1rem] mr-auto font-serif text-gray-500">
            $500-$2000k
          </h5>
          <i className="fas fa-angle-down text-[1rem]"></i>
        </span>
        <span className="flex w-36 border-2 h-9 items-center pl-2 pr-2">
          <h5 className="text-[1rem] mr-auto font-serif text-gray-500">
            Status
          </h5>
          <i className="fas fa-angle-down text-[1rem]"></i>
        </span>
        <span className="flex w-36 border-2 h-9 items-center pl-2 pr-2">
          <h5 className="text-[1rem] mr-auto font-serif text-gray-500">
            2 Months
          </h5>
          <i className="fas fa-angle-down text-[1rem]"></i>
        </span>
        <span className="flex w-36 border-2 h-9 items-center pl-2 pr-2">
          <h5 className="text-[1rem] mr-auto font-serif text-gray-500">
            Avalable
          </h5>
          <i className="fas fa-angle-down text-[1rem]"></i>
        </span>
      </div>
    </div>
  );
}
export default MenuCategory;
