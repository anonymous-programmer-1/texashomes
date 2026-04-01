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
function Home() {
  return (
    <>
      <Top />
      <ListAndPath />
      <MenuCategory />
      <ItemsList />
      <BultFor />
      <FeaturedIn />
      <SignUpAlert1 />
      <ItemsList />
      <Comments />
      <DealsAndIncomeAlert />
      <WhyAbout />
      <End />
    </>
  );
}
export default Home;
