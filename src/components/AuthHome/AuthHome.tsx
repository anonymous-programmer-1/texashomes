import Top from "./Top/Top";
import DealsMenu from "./Top/DealsMenu";
import ItemCards from "./ItemsCardList/ItemCards";
import End from "./End";
function AuthHome() {
  return (
    <div className="bg-[#171718]">
      <Top />
      <DealsMenu />
      <ItemCards />
      <End />
    </div>
  );
}
export default AuthHome;
