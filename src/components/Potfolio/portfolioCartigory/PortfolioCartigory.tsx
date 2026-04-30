import { useState, useEffect, type ReactElement } from "react";
import Overview from "../Overview/Overview";
import Return from "../returns/Returns";
import Transactions from "../transactions/Transactions";
type ViewControl = {
  overview: boolean;
  returns: boolean;
  transactions: boolean;
};
function PortfolioCartigory(props: ViewControl) {
  const overview = props.overview;
  const returns = props.returns;
  const transaction = props.transactions;

  const [diplay, setDisplay] = useState<ReactElement>();
  useEffect(() => {
    if (overview) {
      (() => {
        setDisplay(<Overview />);
      })();
    } else if (returns) {
      (() => {
        setDisplay(<Return />);
      })();
    } else if (transaction) {
      (() => {
        setDisplay(<Transactions />);
      })();
    }
  }, [overview, returns, transaction]);
  return <>{diplay}</>;
}
export default PortfolioCartigory;
