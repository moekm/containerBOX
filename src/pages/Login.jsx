import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Error from "../components/UI/Error";

import UserCTX from "../store/user";

import "../styles/login.css";

const MAX_STR_LENGTH = 16;

export default function Login() {
  const [err, setErr] = useState({ message: "" });
  const redirect = useNavigate();
  const userState = useContext(UserCTX);

  function handleSubmit(e) {
    // not using an action here because I need to update the store :>
    e.preventDefault();
    const form = new FormData(e.target);
    const username = form.get("username").trim();

    if (username.length > 0 && username.length <= MAX_STR_LENGTH) {
      userState.handleLogin(username);
      return 0;
    }

    setErr({ message: "Please enter a valid username." });
  }

  // May refactor this to use redirection state in the future. redirect("/loc", options)
  const isLoggedIn = userState.username.length > 0;
  useEffect(() => {
    let timeoutID;
    if (isLoggedIn) {
      timeoutID = setTimeout(() => {
        return redirect("/dashboard", { replace: true });
      }, 1000);
    }

    // cleaner
    () => clearInterval(timeoutID);
  }, [redirect, isLoggedIn]);

  if (isLoggedIn) {
    return <p id="general-message">Redirecting...</p>;
  }

  return (
    <main className="login">
      <h1>Login</h1>
      {err.message.length > 0 && <Error message={err.message} />}
      <p>
        Login with any username or password. <strong>no data is sent</strong>
      </p>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          type="text"
          maxLength={MAX_STR_LENGTH}
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          maxLength={MAX_STR_LENGTH}
        />
        <button type="submit">Continue</button>
        <Link to="/">
          <p>Cancel</p>
        </Link>
      </form>
      <p id="notice">
        All your data stays on your device — no inputs or cookies are sent over
        the network.
      </p>
    </main>
  );
}
