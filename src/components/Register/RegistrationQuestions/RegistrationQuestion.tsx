import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import ThirdQuestion from "./ThirdQuestion";
import FouthQuestion from "./FouthQuestion";
import { userAppContext } from "../../ContextApi/UserContext";

function RegistrationQuestion() {
  const userDetails = userAppContext();
  if (!userDetails) return null;
  const { questionPage, setQuestionPage } = userDetails;
  function questionState() {
    let page = null;
    switch (questionPage) {
      case 1:
        page = <FirstQuestion setPageFunc={setQuestionPage} />;
        break;
      case 2:
        page = <SecondQuestion setPageFunc={setQuestionPage} />;

        break;
      case 3:
        page = <ThirdQuestion setPageFunc={setQuestionPage} />;

        break;
      case 4:
        page = <FouthQuestion setPageFunc={setQuestionPage} />;
        break;
      default:
        break;
    }
    return page;
  }
  return <>{questionState() && questionState()}</>;
}
export default RegistrationQuestion;
