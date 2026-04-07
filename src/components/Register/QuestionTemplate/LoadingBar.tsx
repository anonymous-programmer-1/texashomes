import { userAppContext } from "../../ContextApi/UserContext";
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

type UserContextType = {
  registerationData: RegisterationDataType;
  setRegisterationData: void;
  setUserData: void;
  userData: UserDataType;
  questionPage: number;
  setQuestionPage: void;
};
function LoadingBar() {
  const userDetails: userContextType = userAppContext();
  const { questionPage } = userDetails;
  const barPacent = (questionPage: number) => {
    let pacent = null;
    switch (questionPage) {
      case 1:
        pacent = (
          <span className="flex gap-2">
            <span className="w-16 h-[3px] bg-[#4b4bdd]"></span>
            <span className="w-16 h-[3px]  bg-[#58585aef]"></span>
            <span className="w-16 h-[3px] bg-[#58585aef]"></span>
            <span className="w-16 h-[3px] bg-[#58585aef]"></span>
          </span>
        );
        break;
      case 2:
        pacent = (
          <span className="flex gap-2">
            <span className="w-16 h-[3px] bg-[#4b4bdd]"></span>
            <span className="w-16 h-[3px]  bg-[#4b4bdd]"></span>
            <span className="w-16 h-[3px] bg-[#58585aef]"></span>
            <span className="w-16 h-[3px] bg-[#58585aef]"></span>
          </span>
        );
        break;
      case 3:
        pacent = (
          <span className="flex gap-2">
            <span className="w-16 h-[3px] bg-[#4b4bdd]"></span>
            <span className="w-16 h-[3px]  bg-[#4b4bdd]"></span>
            <span className="w-16 h-[3px] bg-[#4b4bdd]"></span>
            <span className="w-16 h-[3px] bg-[#58585aef]"></span>
          </span>
        );
        break;
      case 4:
        pacent = (
          <span className="flex gap-2">
            <span className="w-16 h-[3px] bg-[#4b4bdd]"></span>
            <span className="w-16 h-[3px]  bg-[#4b4bdd]"></span>
            <span className="w-16 h-[3px] bg-[#4b4bdd]"></span>
            <span className="w-16 h-[3px] bg-[#4b4bdd]"></span>
          </span>
        );
        break;
      default:
        break;
    }
    return pacent;
  };
  const pacentRender = barPacent(questionPage);
  return <>{pacentRender && pacentRender}</>;
}
export default LoadingBar;
