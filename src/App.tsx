import Home from "./components/Home/Home";
import RegisterPage from "./components/Register/RegisterPage";

import FirstQuestion from "./components/Register/RegistrationQuestions/FirstQuestion";
import SecondQuestion from "./components/Register/RegistrationQuestions/SecondQuestion";
import ThirdQuestion from "./components/Register/RegistrationQuestions/ThirdQuestion";
import FouthQuestion from "./components/Register/RegistrationQuestions/FouthQuestion";
import RegisterationCongrats from "./components/Register/RegisterationCongrats";
import AuthHome from "./components/AuthHome/AuthHome";
import AboutItemCard from "./components/AuthHome/ItemsCardList/AboutItem/AbouItemCard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//

function App() {
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
        path: "/about/user/potflio/f/q",
        element: <FirstQuestion />,
      },
      {
        path: "/about/user/potflio/s/q",
        element: <SecondQuestion />,
      },
      {
        path: "/about/user/potflio/t/q",
        element: <ThirdQuestion />,
      },
      {
        path: "/about/user/potflio/fr/q",
        element: <FouthQuestion />,
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
