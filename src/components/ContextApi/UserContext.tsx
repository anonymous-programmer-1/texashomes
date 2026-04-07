import { createContext, useState, useContext } from "react";

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
const UserContext = createContext(null);
export const UserContextProvider = ({ children }) => {
  const [registerationData, setRegisterationData] =
    useState<RegisterationDataType>();
  const [userData, setUserData] = useState<UserDataType>();
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
