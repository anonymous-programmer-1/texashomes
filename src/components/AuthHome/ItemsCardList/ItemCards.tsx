import { useState, useEffect, lazy } from "react";
const ItemCard = lazy(() => import("./ItemCard"));
const LoadingAnimation = lazy(
  () => import("../../../../../Loading animation/loadingRing"),
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
        console.log(error);
      }
    }
    getProducts();
  }, []);

  return (
    <>
      {!isLoaded ? (
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
      )}
    </>
  );
}
export default ItemCards;
