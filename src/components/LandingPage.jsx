import Header from "./landing/Header.jsx";

import "../styling/LandingPage.css";
import placeholderIMG from "../../public/assets/images/placeholder.jpg";

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
            <p>CONTAINER_NAME#123 - was created by "USER" at "TIME"</p>
            <p>IMAGE_NAME#321 - was created by "USER" at "TIME"</p>
          </div>
        </div>
      </section>
    </>
  );
}
