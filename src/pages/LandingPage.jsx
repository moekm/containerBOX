import Header from "../components/landing-page/Header.jsx";
import ContainerDataOverview from "../components/landing-page/ContainerOverview.jsx";
import DashboardComponents from "../components/landing-page/DashbaordComponents.jsx";
import FAQ from "../components/landing-page/FAQ.jsx";
import Button from "../components/UI/Button.jsx";

import "../styles/landing-page.css";

export default function LandingPage() {
  return (
    <>
      <div id="grid-background">
        <Header />

        <section className="introduction">
          <h1>A Single Dashboard to Manage All Your Containers</h1>

          <div id="dashboard-screenshot">
            <img
              src="/assets/images/dashboard_screenshot.png"
              alt="moekm container box dashboard preview"
            />
          </div>

          <Button to="/dashboard" id="type-hollow">
            GO TO DASHBOARD {">"}
          </Button>
        </section>
      </div>

      <section className="containers-data-overview">
        <h2>All your data in one place</h2>
        <ContainerDataOverview />
      </section>

      <section className="dashboard-components">
        <DashboardComponents />
      </section>

      <section id="pricing" className="pricing">
        <h1>Pricing</h1>
        <div id="container">
          <div id="price-box">
            <h2>$0/month</h2>
            <ul>
              <li>unlimited builds</li>
              <li>unlimited bandwidth*</li>
              <li>unlimited report generation</li>
              <li>unlimited active & stopped containers</li>
              <li>auto backups & free integration</li>
            </ul>
            <Button to="/dashboard">Get Started</Button>
          </div>
        </div>
        <p>no credit card required</p>
      </section>

      <section id="FAQ" className="FAQ">
        <FAQ />
      </section>

      <footer>
        <Button to="/dashboard" id="type-hollow">
          GET STARTED {">"}
        </Button>
        <p>
          Designed and Built by: <a href="https://github.com/moekm/">MOEKM</a>
        </p>
      </footer>
    </>
  );
}
