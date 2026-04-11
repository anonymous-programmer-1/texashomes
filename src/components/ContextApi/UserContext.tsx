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
type ProductsData = {
  name: string;
  price: string;
  manager: string;
  minimumOrder: string;
  fundingEnd: string;
  investors: string;
  investmentRate: string;
  fundingParcent: string;
  returnPrice: string;
  investmentTerm: string;
  imageUrl: string[];
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
  productData: ProductsData[];
  setProductData: React.Dispatch<React.SetStateAction<ProductsData[]>>;
  singleProductData: ProductsData;
  setSingleProductData: React.Dispatch<React.SetStateAction<ProductsData>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [productData, setProductData] = useState<ProductsData[]>([
    {
      name: "",
      price: "",
      manager: "",
      minimumOrder: "",
      fundingEnd: "",
      investors: "",
      investmentRate: "",
      fundingParcent: "",
      returnPrice: "",
      investmentTerm: "",
      imageUrl: [],
    },
  ]);
  const [singleProductData, setSingleProductData] = useState<ProductsData>({
    name: "",
    price: "",
    manager: "",
    minimumOrder: "",
    fundingEnd: "",
    investors: "",
    investmentRate: "",
    fundingParcent: "",
    returnPrice: "",
    investmentTerm: "",
    imageUrl: [],
  });
  const [isLoading, setIsLoading] = useState(false);
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
        productData,
        setProductData,
        singleProductData,
        setSingleProductData,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const userAppContext = () => useContext(UserContext);
