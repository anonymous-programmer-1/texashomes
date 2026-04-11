import Top from "../Top/Top";
import ListAndPath from "../Top/ListingAndPath";
import MenuCategory from "../Top/MenuCategory";
import ItemsList from "./ItemsList";
import SignUpAlert1 from "../SignupAlert/SignupAlert1";
import Comments from "./Comment";
import DealsAndIncomeAlert from "../SignupAlert/DealsAndIncomeAlert";
import BultFor from "./BultFor";
import FeaturedIn from "./FeaturedIn";
import WhyAbout from "./WhyAbout";
import End from "../End/End";
import LoadingRing from "../Loading animation/loadingRing";
import { userAppContext } from "../ContextApi/UserContext";
function Home() {
  const useDeatails = userAppContext();
  if (!useDeatails) return null;
  const { isLoading } = useDeatails;
  return (
    <>
      <div className=" absolute home-loading">
        <ItemsList pass={true} />
      </div>
      {isLoading ? (
        <div className="">
          <Top />
          <ListAndPath />
          <MenuCategory />
          <ItemsList pass={true} />
          <BultFor />
          <FeaturedIn />
          <SignUpAlert1 />
          <ItemsList pass={false} />
          <Comments />
          <DealsAndIncomeAlert />
          <WhyAbout />
          <End />
        </div>
      ) : (
        <div className="flex w-full h-screen justify-center items-center bg-black">
          <span>
            <LoadingRing />
          </span>
        </div>
      )}
    </>
  );
}
export default Home;
