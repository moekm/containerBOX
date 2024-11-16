import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../components/LandingPage.jsx";
import ErrorPage from "../components/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage code={404} message="Page not found" />,
    element: <LandingPage />,
  },
]);

export default router;
