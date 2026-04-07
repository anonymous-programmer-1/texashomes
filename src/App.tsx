import Home from "./components/Home/Home";
import RegisterPage from "./components/Register/RegisterPage";

import RegistrationQuestion from "./components/Register/RegistrationQuestions/RegistrationQuestion";
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
