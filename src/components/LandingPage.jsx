import { Link } from "react-router-dom";
import Header from "./landing/Header.jsx";
import ContainerDataOverview from "./landing/ContainerOverview.jsx";
import DashboardComponents from "./landing/DashbaordComponents.jsx";
import FAQ from "./landing/FAQ.jsx";

import faqQuestions from "./landing/static/FAQ.js";
import "../styling/LandingPage.css";

export default function LandingPage() {
  return (
    <>
      <div id="grid-background">
        <Header />

        <section className="introduction">
          <h1>A Single Dashboard to Manage All Your Containers</h1>

          <div id="dashboard-screenshot">
            <img
              src="/assets/images/placeholder.jpg"
              alt="moekm container box dashboard preview"
            />
          </div>

          <Link to="/dashboard">
            <button id="type-hollow">GO TO DASHBOARD {">"}</button>
          </Link>
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
            <Link to="/dashboard">
              <button>Get Started</button>
            </Link>
          </div>
        </div>
        <p>no credit card required</p>
      </section>

      <section id="FAQ" className="FAQ">
        {faqQuestions.map((question) => {
          return (
            <FAQ key={question[0]} title={question[0]} content={question[1]} />
          );
        })}
      </section>

      <footer>
        <Link to="/dashboard">
          <button id="type-hollow">GET STARTED {">"}</button>
        </Link>
        <p>
          Designed and Built by: <a href="https://github.com/moekm/">MOEKM</a>
        </p>
      </footer>
    </>
  );
}
