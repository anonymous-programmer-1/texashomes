import { useState, useEffect, lazy } from "react";
import { userAppContext } from "../../ContextApi/UserContext";
import CardLoadingSeclecton from "../../Loading animation/CardLoadingSeclecton";
const ItemCard = lazy(() => import("./ItemCard"));

const ServerBaseUrl = import.meta.env.VITE_SERVER_BASE_URL;
//
type ProductsData = {
  name: string;
  price: string;
  manager: string;
  minimumOrder: string;
  returnType: string;
  investors: string;
  investmentRate: string;
  fundingParcent: string;
  returnPrice: string;
  investmentTerm: string;
  monthlyPay: string;
  riskLevel: string;
  amontToRaise: string;
  imageUrl: string[];
};
function ItemCards() {
  const userDetails = userAppContext();
  if (!userDetails) return;
  const { productsFilterData, setProductsFilterData, setProductData } =
    userDetails;
  const [deals, setDeals] = useState<ProductsData[]>(productsFilterData);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [noData, setNoData] = useState<boolean>(false);
  const [loadingAnimation, setLoadingAnimation] = useState<any>();
  useEffect(() => {
    const cards = [];
    for (let i = 0; i < 40; i++) {
      cards.push("loadingData");
    }
    setLoadingAnimation([...cards]);
  }, []);
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
        setProductData([...products]);
        setProductsFilterData([...products]);
        setIsLoaded(true);
      } catch (error) {
        setNoData(true);
        console.log(error);
      }
    }
    getProducts();
  }, []);
  useEffect(() => {
    (() => {
      setDeals([...productsFilterData]);
    })();
  }, [productsFilterData]);
  console.log(deals, "deals");
  const noDeals = (
    <div className="p-4 w-full">
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
      <div className="flex flex-wrap gap-4 w-full sm:grid sm:grid-cols-2 ms:grid-cols-2 min-[900px]:grid-cols-3 min-[1400px]:grid-cols-4 min-[1800px]:grid-cols-5  p-4 justify-around  bg-[#171718]">
        {loadingAnimation &&
          loadingAnimation.map((_, i: number) => (
            <CardLoadingSeclecton key={`animation-key/${i}`} />
          ))}
      </div>
    ) : (
      <div className="flex flex-wrap gap-4 w-full sm:grid sm:grid-cols-2 ms:grid-cols-2 min-[900px]:grid-cols-3 min-[1400px]:grid-cols-4 min-[1800px]:grid-cols-5  p-4 justify-around  bg-[#171718]">
        {deals &&
          deals.map((e, i) => {
            const pass = Number(e.minimumOrder) <= 500 ? true : false;
            return <ItemCard data={e} key={`card-key/${i}`} isMinimum={pass} />;
          })}
      </div>
    )
  ) : (
    noDeals
  );
  return <>{display}</>;
}
export default ItemCards;
