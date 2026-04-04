import Top from "../../Top/Top";
import ItemNameAndInvest from "./ItemNameAndInvest";
import ItemCard from "./ItemCard";
import Overview from "./Overview";
import End from "../../End";
function AboutItemCard() {
  return (
    <div className="bg-[#171718]">
      <Top />
      <ItemNameAndInvest />
      <ItemCard />
      <Overview />
      <End />
    </div>
  );
}
export default AboutItemCard;
