import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";

import "./styles/main.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
