//import Top from "../Top/Top";
import { lazy, useState } from "react";
const Top = lazy(() => import("../Top/Top"));
const ListAndPath = lazy(() => import("../Top/ListingAndPath"));
const MenuCategory = lazy(() => import("../Top/MenuCategory"));
const ItemsList = lazy(() => import("./ItemsList"));
const SignUpAlert1 = lazy(() => import("../SignupAlert/SignupAlert1"));
const WhatsAbout = lazy(() => import("./WhatsAbout"));
const Comments = lazy(() => import("./Comment"));
const DealsAndIncomeAlert = lazy(
  () => import("../SignupAlert/DealsAndIncomeAlert"),
);
const BultFor = lazy(() => import("./BultFor"));
const FeaturedIn = lazy(() => import("./FeaturedIn"));
const WhyAbout = lazy(() => import("./WhyAbout"));
const TopInvestors = lazy(() => import("./TopInvestors"));
const End = lazy(() => import("../End/End"));
import { userAppContext } from "../ContextApi/UserContext";
import AboutUs from "./AboutUs";
const LoadingRing = lazy(() => import("../Loading animation/loadingRing"));

function Home() {
  const [control, setControl] = useState<boolean>(false);
  const [iControl, setIcontrol] = useState<boolean>(false);

  const useDeatails = userAppContext();

  if (!useDeatails) return null;
  const { isLoading } = useDeatails;

  return (
    <>
      {isLoading ? (
        <>
          <Top setControlA={setControl} setIcontrol={setIcontrol} />
          <ListAndPath />
          <MenuCategory />
          <ItemsList pass={true} />
          <BultFor />
          <FeaturedIn />
          <SignUpAlert1 />
          <WhatsAbout />
          <TopInvestors />
          <ItemsList
            pass={true}
            Icontrol={iControl}
            setIcontrol={setIcontrol}
          />
          <Comments />
          <DealsAndIncomeAlert />
          <ItemsList pass={true} />
          <AboutUs control={control} setControl={setControl} />
          <WhyAbout />
          <End />
        </>
      ) : (
        <>
          <div className="flex w-full h-screen justify-center items-center bg-black">
            <span>
              <LoadingRing />
            </span>
            <span className="home-loading absolute">
              <ItemsList pass={true} />
            </span>
          </div>
        </>
      )}
    </>
  );
}
export default Home;
