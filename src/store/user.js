import { createContext } from "react";

const UserCTX = createContext({
  username: "",
  email: "",
  handleLogin: () => {},
  permissions: [], // for later plans
});

export default UserCTX;
