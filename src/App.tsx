import { lazy } from "react";
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
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const test = import.meta.env.VITE_test;
console.log(test);
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
