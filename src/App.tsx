import { lazy, useEffect } from "react";
const Home = lazy(() => import("./components/Home/Home"));
const RegisterPage = lazy(() => import("./components/Register/RegisterPage"));
const LoginPage = lazy(() => import("./components/Register/LoginPage"));
const RegistrationQuestion = lazy(
  () =>
    import("./components/Register/RegistrationQuestions/RegistrationQuestion"),
);
const RegisterationCongrats = lazy(
  () => import("./components/Register/RegisterationCongrats"),
);
const AuthHome = lazy(() => import("./components/AuthHome/AuthHome"));
const AboutItemCard = lazy(
  () => import("./components/AuthHome/ItemsCardList/AboutItem/AbouItemCard"),
);
const Potfolio = lazy(() => import("./components/Potfolio/Potfolio"));
const Company = lazy(() => import("./components/Company/Company"));

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { userAppContext } from "./components/ContextApi/UserContext";
//
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
function App() {
  const userDetails = userAppContext();
  if (!userDetails) return;
  const { userData, setUserData } = userDetails;
  useEffect(() => {
    if (window.location.pathname.split(" ")[0] === "/texashomes/") return;
    if (userData.email.trim() === "") {
      const USER_DATA = "USER_DATA";
      const data: string | null = localStorage.getItem(USER_DATA);
      if (!data) return;
      const parseData: UserDataType = JSON.parse(data);
      setUserData(parseData);
    }
  });
  const routers = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/about/user/potflio/q",
        element: <RegistrationQuestion />,
      },
      {
        path: "/about/user/potflio/registed",
        element: <RegisterationCongrats />,
      },
      {
        path: "/auth/home",
        element: <AuthHome />,
      },
      {
        path: "/proparty/info",
        element: <AboutItemCard />,
      },
      {
        path: "/company/potfolio",
        element: <Company />,
      },
      {
        path: "/user/potfolio",
        element: <Potfolio />,
      },
    ],
    { basename: "/texashomes/" },
  );
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}
export default App;
