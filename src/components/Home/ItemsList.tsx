import ItemCard from "../Card/ItemCard";
function ItemsList() {
  return (
    <div className="h-fit pt-6 pb-6 pl-8 w-full bg-[#f0eded] mt-7 ">
      <span className="">
        <h5 className="text-[1.5rem] text-[#060685] font-bold">Top Deals</h5>
      </span>
      <div className="ml-[-2rem] pl-[10%] pr-[10%] mt-7">
        <div className="flex flex-wrap gap-4">
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </div>
  );
}
export default ItemsList;
