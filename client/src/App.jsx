import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  ErrorPage,
  AllEvents,
  LoginPage,
  MainLayout,
  RegisterPage,
  EventsLayout,
  AddEvent,
  MyEvents,
  EditEvent,
  LandingPage,
} from "./pages";

import { action as registerAction } from "./pages/register/registerAction.js";
import { action as loginAction } from "./pages/login/loginAction.js";
import { action as addEventAction } from "./pages/add-event/addEventAction.js";
import { action as editEventAction } from "./pages/edit-event/editEventAction.js";
import { action as deleteEventAction } from "./pages/delete-event/deleteEventAction.js";

import { loader as allEventsLoader } from "./pages/all-events/allEventsLoader.js";
import { loader as myEventsLoader } from "./pages/my-events/myEventsLoader.js";
import { loader as eventsLayoutLoader } from "./pages/events/eventsLayoutLoader.js";
import { loader as editEventLoader } from "./pages/edit-event/editEventLoader.js";

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
        path: "events/all",
        element: <AllEvents />,
        loader: allEventsLoader,
        hydrateFallbackElement: <p>Loading route...</p>,
      },
      {
        path: "events",
        element: <EventsLayout />,
        loader: eventsLayoutLoader,
        hydrateFallbackElement: <p>Loading route...</p>,
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
          {
            path: "edit/:id",
            element: <EditEvent />,
            loader: editEventLoader,
            hydrateFallbackElement: <p>Loading route...</p>,
            action: editEventAction,
          },
          {
            path: "delete/:id",
            action: deleteEventAction,
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
