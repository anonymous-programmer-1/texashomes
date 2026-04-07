import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import ThirdQuestion from "./ThirdQuestion";
import FouthQuestion from "./FouthQuestion";
import { userAppContext } from "../../ContextApi/UserContext";
import { type Dispatch, type SetStateAction } from "react";

type RegisterationDataType = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};
type UserDataType = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  portfolio: {
    amount: string;
    friends: object[];
    wallet: string;
    transactions: object[];
    totalReturnsPi: string;
  };
  chats: object[];
};

type userContextType = {
  registerationData: RegisterationDataType;
  setRegisterationData: Dispatch<SetStateAction<RegisterationDataType>>;
  setUserData: Dispatch<SetStateAction<UserDataType>>;
  userData: UserDataType;
  questionPage: number;
  setQuestionPage: Dispatch<SetStateAction<number>>;
};
function RegistrationQuestion() {
  const userDetails: userContextType = userAppContext();
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
