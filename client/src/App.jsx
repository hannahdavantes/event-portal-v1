import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  ErrorPage,
  LandingPage,
  LoginPage,
  MainLayout,
  RegisterPage,
  DashboardPage,
} from "./pages";

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
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
