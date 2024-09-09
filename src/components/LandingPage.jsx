import Header from "./landing/Header.jsx";

import "../styling/LandingPage.css";
import placeholderIMG from "../../public/assets/images/placeholder.jpg";

const persentages = {
  "--percent-critical": "50%",
  "--percent-warning": "40%",
  "--percent-other": "10%",
};

export default function LandingPage() {
  return (
    <>
      <div id="grid-background">
        <Header />

        <section className="introduction">
          <h1>A single dashboard to manage all of your containers</h1>

          <div id="dashboard-screenshot">
            <img
              src={placeholderIMG}
              alt="moekm container box dashboard preview"
            />
          </div>

          <button id="type-hollow">GO TO DASHBOARD {">"}</button>
        </section>
      </div>

      <section className="visual-data">
        <h2>All your data in one place</h2>
        <div id="container-simple-overview">
          <div id="controls">
            <h3>Overview</h3>
            <button id="type-text">view more {">"}</button>
          </div>

          <div className="progress-bar">
            <div id="active-containers"></div>
            <div id="stopped-containers"></div>
            <div id="container-images"></div>
          </div>

          <div className="progress-text">
            <div>
              <span>3 </span>
              <p>active</p>
            </div>
            <div>
              <span>10 </span>
              <p>stopped</p>
            </div>
            <div>
              <span>12</span>
              <p>images</p>
            </div>
          </div>

          <div className="logs">
            <h3>Logs</h3>
            <p>CONTAINER_NAME#123 - created by "USER" at "TIME"..</p>
            <p>IMAGE_NAME#321 - created by "USER" at "TIME"..</p>
          </div>
        </div>
      </section>

      {/** Blueprint - will be replaced later with components */}
      <section className="dashboard-components">
        <div className="component-container" id="alerts">
          <div id="content">
            <h3>Alerts - (3) Critical</h3>
            <div id="visual-alerts">
              <div id="graph" style={persentages}>
                <div id="icon-text">
                  <p>6</p>
                  <p>Alerts</p>
                </div>
              </div>
              <div id="icon-alerts">
                <ul>
                  <li>
                    <svg
                      width="30"
                      height="27"
                      viewBox="0 0 30 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.16 2.00952C12.707 -0.669842 16.5743 -0.669837 18.1212 2.00952L28.7368 20.3963C30.2837 23.0756 28.3501 26.4248 25.2562 26.4248H4.02503C0.931173 26.4248 -1.00248 23.0756 0.544446 20.3962L11.16 2.00952Z"
                        fill="#E5383B"
                      />
                      <path
                        d="M13.4416 18.8113L13.1574 7.16089H15.8571L15.5729 18.8113H13.4416ZM14.5783 23.8448C14.0889 23.8448 13.6863 23.6951 13.3706 23.3958C13.0706 23.0807 12.9206 22.7105 12.9206 22.2851C12.9206 21.844 13.0706 21.4738 13.3706 21.1744C13.6863 20.8593 14.0889 20.7018 14.5783 20.7018C15.0361 20.7018 15.415 20.8593 15.715 21.1744C16.0307 21.4738 16.1886 21.844 16.1886 22.2851C16.1886 22.7105 16.0307 23.0807 15.715 23.3958C15.415 23.6951 15.0361 23.8448 14.5783 23.8448Z"
                        fill="white"
                      />
                    </svg>
                    <span>(3) Critical</span>
                  </li>
                  <li>
                    <svg
                      width="29"
                      height="11"
                      viewBox="0 0 29 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="29" height="4" rx="2" fill="#F4B000" />
                      <rect y="7" width="29" height="4" rx="2" fill="#F4B000" />
                    </svg>
                    <span>(2) Warnings</span>
                  </li>
                  <li>
                    <svg
                      width="29"
                      height="11"
                      viewBox="0 0 29 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="29"
                        height="4"
                        rx="2"
                        fill="black"
                        fill-opacity="0.15"
                      />
                      <rect y="7" width="29" height="4" rx="2" fill="#949494" />
                    </svg>
                    <span>(1) Other</span>
                  </li>
                </ul>
              </div>
            </div>
            <p id="learn-more">
              <button id="type-text">learn more {">"}</button>
            </p>
          </div>
        </div>

        <div className="component-container" id="api-data">
          <div id="head">
            <div>
              <button id="type-text" className="active">
                API Summary
              </button>
              <button id="type-text">Running APIs</button>
              <button id="type-text">Offline APIs</button>
            </div>
          </div>
          <div id="content">
            <div id="row">
              <p>Total Cost:</p>
              <p>$200.38</p>
            </div>
            <hr />
            <ul>
              <li id="row">
                <span>GOOGLE.COM</span>
                <span>20 requests</span>
                <span>$20</span>
              </li>
              <li id="row">
                <span>REMOVE-IMG.COM</span>
                <span>100 requests</span>
                <span>$312</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="component-container" id="account-overview">
          <div id="head">
            <div>
              <p>Account Overview</p>
            </div>
          </div>
          <div id="content">
            <ul>
              <li id="row">
                <p>Jan 1 2024</p>
                <p>$200.38</p>
              </li>
              <li id="row">
                <p>Total Running Containers:</p>
                <p>30</p>
              </li>
              <li id="row">
                <p>Total Completed Build:</p>
                <p>33</p>
              </li>
              <li id="row">
                <p>Total Created Images:</p>
                <p>7</p>
              </li>
              <li id="row">
                <p>Total API Requests:</p>
                <p>300</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="component-container" id="core-system">
          <div id="head">
            <div>
              <p>Account Overview</p>
            </div>
          </div>
          <div id="content">
            <ul>
              <li id="row">
                <p>CPU:</p>
                <p>10%</p>
              </li>
              <li id="row">
                <p>GPU (1):</p>
                <p>43%</p>
              </li>
              <li id="row">
                <p>Processes:</p>
                <p>20</p>
              </li>
              <li id="row">
                <p>Bandwidth:</p>
                <p>21GB</p>
              </li>
              <li id="row">
                <p>Up Time:</p>
                <p>2 Months</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
