import { useState, useEffect, lazy } from "react";
const ItemCard = lazy(() => import("./ItemCard"));
const LoadingAnimation = lazy(
  () => import("../../Loading animation/loadingRing"),
);
const ServerBaseUrl = import.meta.env.VITE_SERVER_BASE_URL;
//
type ProductsData = {
  name: string;
  price: string;
  manager: string;
  minimumOrder: string;
  fundingEnd: string;
  investors: string;
  investmentRate: string;
  fundingParcent: string;
  returnPrice: string;
  investmentTerm: string;
  imageUrl: string[];
};
function ItemCards() {
  const [deals, setDeals] = useState<ProductsData[]>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [noData, setNoData] = useState<boolean>(false);
  useEffect(() => {
    async function getProducts() {
      //!https://texashomes-backend-3.onrender.com/house/deals
      const url = `${ServerBaseUrl}/house/deals`;
      try {
        const data = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        const responds = await data.json();
        const products: ProductsData[] = responds.data;
        //const shuffledData = shuffleArray(products);
        setDeals(products);
        setIsLoaded(true);
      } catch (error) {
        setNoData(true);
        console.log(error);
      }
    }
    getProducts();
  }, []);
  const noDeals = (
    <div className="p-4">
      <div className="transition-all w-full h-fit flex flex-col items-center  p-6 border-[1px] border-baseCard-borderColor bg-baseCard-color rounded-md">
        <span className="fa fa-book text-[8rem] text-[#52515193]  rounded-lg "></span>
        <h5 className="text-[1.2rem] text-gray-300 mt-3 font-semibold">
          No Deals Found
        </h5>
        <h5 className="mt-2 text-gray-300">
          There are currently no deals available
        </h5>
      </div>
    </div>
  );
  const display = !noData ? (
    !isLoaded ? (
      <div className="w-full flex h-[60vh] justify-center items-center">
        <div>
          <LoadingAnimation />
        </div>
      </div>
    ) : (
      <div className="flex flex-wrap gap-2 p-4 justify-around  bg-[#171718]">
        {deals &&
          deals.map((e, i) => {
            return <ItemCard data={e} key={i} />;
          })}
      </div>
    )
  ) : (
    noDeals
  );
  return <>{display}</>;
}
export default ItemCards;
