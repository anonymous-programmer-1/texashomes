import Top from "../AuthHome/Top/Top";
import HeadText from "./HeadText";
import Rating from "./Ratings";
import End from "../AuthHome/End";

import ChatList from "./ChartList";

function Company() {
  return (
    <div className="bg-[#171718]">
      <Top />
      <HeadText />
      <Rating />
      <ChatList />
      <End />
    </div>
  );
}
export default Company;
