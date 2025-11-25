import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  ErrorPage,
  LandingPage,
  LoginPage,
  MainLayout,
  RegisterPage,
  DashboardPage,
} from "./pages";

import { action as registerAction } from "./pages/register/registerAction.js";
import { action as loginAction } from "./pages/login/loginAction.js";

import { loader as dashboardLoader } from "./pages/dashboard/dashboardLoader.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
        action: registerAction,
      },
      {
        path: "login",
        element: <LoginPage />,
        action: loginAction,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
        loader: dashboardLoader,
      },
    ],
  },
  {
    hydrateFallbackElement: <div>Loading...</div>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
