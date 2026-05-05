import { useState } from "react";
import Top from "./Top/Top";
import DealsMenu from "./Top/DealsMenu";
import ItemCards from "./ItemsCardList/ItemCards";
import End from "./End";
function AuthHome() {
  const [noData, setNoData] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const loadingAnimation = [
    "loadingData",
    "loadingData",
    "loadingData",
    "loadingData",
    "loadingData",
    "loadingData",
    "loadingData",
    "loadingData",
    "loadingData",
    "loadingData",
    "loadingData",
    "loadingData",
    "loadingData",
    "loadingData",
    "loadingData",
    "loadingData",
    "loadingData",
    "loadingData",
    "loadingData",
    "loadingData",
    "loadingData",
    "loadingData",
  ];
  function isDataTrue(boolean: boolean) {
    setNoData(boolean);
  }
  return (
    <div className="bg-[#171718] w-full relative ">
      <Top />
      <DealsMenu isDataTrue={isDataTrue} setIsLoaded={setIsLoaded} />
      <ItemCards
        loadInData={loadingAnimation}
        isData={noData}
        isDataTrue={isDataTrue}
        isLoaded={isLoaded}
        setIsLoaded={setIsLoaded}
      />
      <End />
    </div>
  );
}
export default AuthHome;
