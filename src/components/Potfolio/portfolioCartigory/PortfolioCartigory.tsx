import { useState, lazy, useEffect, type ReactElement } from "react";
const Overview = lazy(() => import("../Overview/Overview"));
const Return = lazy(() => import("../returns/Returns"));
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
    }
  }, [overview, returns, transaction]);
  return <>{diplay}</>;
}
export default PortfolioCartigory;
