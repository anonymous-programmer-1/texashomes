import { useEffect, useState, lazy } from "react";
const ItemCard = lazy(() => import("../Card/ItemCard"));
import { userAppContext } from "../ContextApi/UserContext";
const ServerBaseUrl = import.meta.env.VITE_SERVER_BASE_URL;

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
type Pass = {
  pass: boolean;
};
function ItemsList(props: Pass) {
  const pass = props.pass;
  const [deals, setDeals] = useState<ProductsData[]>();
  const [reConnect, setReConnect] = useState<boolean>(false);
  const userDetails = userAppContext();
  if (!userDetails) return null;
  const { setProductData, setIsLoading } = userDetails;
  function retryConnection() {
    setReConnect((prevConnect) => !prevConnect);
  }
  useEffect(() => {
    async function getProducts() {
      //!https://texashomes-backend-3.onrender.com
      const url = `${ServerBaseUrl}/house/deals`;
      try {
        const data = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        const responds = await data.json();
        if (responds.status !== 200) return;
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
        setProductData(products);
        setIsLoading(true);
      } catch (error) {
        setTimeout(() => {
          retryConnection();
        }, 1000);
        console.log(error);
      }
    }
    getProducts();
  }, [reConnect]);
  return (
    <div className="h-fit pt-6 pb-6 pl-8 w-full bg-[#f0eded] mt-7 ">
      <span className="">
        <h5 className="text-[1.5rem] text-[#060685] font-bold">Top Deals</h5>
      </span>
      <div className="ml-[-2rem] pl-[10%] pr-[10%] mt-7">
        <div className="flex flex-wrap gap-4">
          {deals &&
            deals.map((e, i) => {
              if (pass && i < 3) {
                return <ItemCard data={e} key={i} />;
              }
              if (!pass && i > 3) {
                if (i > 6) return;
                return <ItemCard data={e} key={i} />;
              }
            })}
        </div>
      </div>
    </div>
  );
}
export default ItemsList;
