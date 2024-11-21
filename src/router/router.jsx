import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import DashboardLayout from "../pages/dashboard/DashboardLayout.jsx";

import Error from "../components/UI/Error.jsx";
import Login from "../pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <p id="general-message">Soon.</p>,
          },
          {
            path: "*",
            element: <Error title="404" message="section not found" />,
          },
        ],
      },
    ],
  },
]);

export default router;
