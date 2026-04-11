import ItemCard from "../Card/ItemCard";
import { useEffect, useState } from "react";
import { userAppContext } from "../ContextApi/UserContext";

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
  const userDetails = userAppContext();
  if (!userDetails) return null;
  const { setProductData, productData, isLoading, setIsLoading } = userDetails;

  useEffect(() => {
    async function getProducts() {
      const url = "https://texashomes-backend-3.onrender.com/house/deals";
      try {
        const data = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        const responds = await data.json();
        console.log(responds);
        if (responds.status !== 200) return;
        const products: ProductsData[] = responds.data;
        setDeals(products);
        setProductData(products);
        setIsLoading(true);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);
  console.log(productData);
  console.log(isLoading);
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
