import Deposit from "./Deposit";
import Returns from "./Return";
import Withdrawal from "./Withdrawal";
function TransactionList() {
  return (
    <div className="p-4 flex flex-wrap gap-4">
      <Deposit />
      <Returns />
      <Withdrawal />
    </div>
  );
}
export default TransactionList;
