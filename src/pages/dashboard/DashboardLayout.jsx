import { Outlet, Link } from "react-router-dom";

import "../../styles/dashboard-layout.css";

export default function DashboardLayout() {
  return (
    <main className="dashboard">
      <section className="dashboard-nav">
        <div id="user-info">
          <img src="#" />
          <div id="user_and_email">
            <p>USERNAME</p>
            <p>contact@moekm.com</p>
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
