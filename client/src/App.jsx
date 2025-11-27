import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  ErrorPage,
  LandingPage,
  LoginPage,
  MainLayout,
  RegisterPage,
  EventsPage,
  AddEvent,
  MyEvents,
} from "./pages";

import { action as registerAction } from "./pages/register/registerAction.js";
import { action as loginAction } from "./pages/login/loginAction.js";
import { action as addEventAction } from "./pages/add-event/addEventAction.js";

import { loader as myEventsLoader } from "./pages/my-events/myEventsLoader.js";

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
        path: "events",
        element: <EventsPage />,
        children: [
          {
            index: true,
            element: <MyEvents />,
            loader: myEventsLoader,
            hydrateFallbackElement: <p>Loading route...</p>,
          },
          {
            path: "add",
            element: <AddEvent />,
            action: addEventAction,
          },
        ],
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
