import { useState, useEffect, lazy } from "react";
const ItemCard = lazy(() => import("./ItemCard"));

const LoadingAnimation = lazy(
  () => import("../../Loading animation/loadingRing"),
);
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
      //!
      const url = "http://localhost:1000/house/deals";
      try {
        const data = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        const responds = await data.json();
        const products: ProductsData[] = responds.data;
        //
        const shuffleArray = (array: ProductsData[]) => {
          const shuffled = [...array];
          let currentIndex = shuffled.length,
            randomIndex;
          while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [shuffled[currentIndex], shuffled[randomIndex]] = [
              shuffled[randomIndex],
              shuffled[currentIndex],
            ];
          }
          return shuffled;
        };
        const shuffledData = shuffleArray(products);
        setDeals(shuffledData);
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
