import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import UserCTX from "./store/user.js";
import router from "./router/router.jsx";

import "./styles/main.css";

function App() {
  const [userState, setUserState] = useState({
    username: "",
    email: "",
    handleLogin: (newUsername) => {
      setUserState((state) => ({ ...state, username: newUsername }));
    },
    permissions: [],
  });

  return (
    <UserCTX.Provider value={userState}>
      <RouterProvider router={router} />
    </UserCTX.Provider>
  );
}

export default App;
