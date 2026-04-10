import ItemCard from "./ItemCard";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    async function getProducts() {
      const url = "http://localhost:3000/house/deals";
      try {
        const data = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        const responds = await data.json();
        const products: ProductsData[] = responds.data;
        setDeals((prevDeals) => (prevDeals = products));
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);
  return (
    <div className="flex flex-wrap gap-2 p-4 justify-around  bg-[#171718]">
      {deals &&
        deals.map((e, i) => {
          return <ItemCard data={e} key={i} />;
        })}
    </div>
  );
}
export default ItemCards;
