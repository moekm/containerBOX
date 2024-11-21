import { useEffect, useContext } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

import UserCTX from "../../store/user";

import "../../styles/dashboard-layout.css";

export default function DashboardLayout() {
  const redirect = useNavigate();
  const userState = useContext(UserCTX);

  // not the best solution but it works for now
  const isLoggedIn = userState.username.length > 0;
  useEffect(() => {
    if (!isLoggedIn) {
      return redirect("/login", { replace: true });
    }
  }, [userState, isLoggedIn]);

  if (!isLoggedIn) return null;

  const username = userState.username;
  const email = userState.email;

  return (
    <main className="dashboard">
      <section className="dashboard-nav">
        <div id="user-info">
          <img src="/assets/images/no_profile_image.png" />
          <div id="user_and_email">
            <p>{username}</p>
            <p>{email || "no@email.com"}</p>
          </div>
        </div>
        <div id="menu-nav">
          <ol>
            <Link to="">
              <li className="overview selected">
                <span>Overview</span>
              </li>
            </Link>
            <Link to="containers">
              <li className="containers">
                <span>Containers</span>
                <span>5</span>
              </li>
            </Link>
            <Link to="images">
              <li className="images">
                <span>Images</span>
                <span>12</span>
              </li>
            </Link>

            <Link to="logs">
              <li className="logs">
                <span>Logs</span>
                <span>1</span>
              </li>
            </Link>
            <Link to="account">
              <li className="account">
                <span>Account</span>
              </li>
            </Link>
          </ol>
        </div>
        <div id="logout">
          <a href="?logout">Logout</a>
        </div>
      </section>
      <section className="dashboard-body">
        <Outlet />
      </section>
    </main>
  );
}

// export function loader() {

//     return redirect("/login");
// }
