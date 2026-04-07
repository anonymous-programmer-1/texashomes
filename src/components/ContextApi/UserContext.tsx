import { createContext, useState, useContext, type ReactNode } from "react";

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
type RegisterationDataType = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};
interface UserContextType {
  registerationData: RegisterationDataType;
  setRegisterationData: React.Dispatch<
    React.SetStateAction<RegisterationDataType>
  >;
  userData: UserDataType;
  setUserData: React.Dispatch<React.SetStateAction<UserDataType>>;
  questionPage: number;
  setQuestionPage: React.Dispatch<React.SetStateAction<number>>;
}
const UserContext = createContext<UserContextType | null>(null);
export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [registerationData, setRegisterationData] =
    useState<RegisterationDataType>({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
  const [userData, setUserData] = useState<UserDataType>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    portfolio: {
      amount: "",
      friends: [],
      wallet: "",
      transactions: [],
      totalReturnsPi: "",
    },
    chats: [],
  });
  const [questionPage, setQuestionPage] = useState<number>(1);
  return (
    <UserContext.Provider
      value={{
        registerationData,
        setRegisterationData,
        userData,
        setUserData,
        questionPage,
        setQuestionPage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const userAppContext = () => useContext(UserContext);
