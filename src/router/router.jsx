import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import DashboardLayout from "../pages/dashboard/DashboardLayout.jsx";

import Error from "../components/UI/Error.jsx";

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
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <p>Soon.</p>,
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
