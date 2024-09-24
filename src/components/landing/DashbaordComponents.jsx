import { useState } from "react";

import VisualData from "./VisualData.jsx";
import animBetween from "./utils/animBetween.js";

const persentages = {
  "--percent-critical": "50%",
  "--percent-warning": "40%",
  "--percent-other": "10%",
};

export default function DashboardComponents() {
  return (
    <div id="container">
      <VisualData id="alerts" type="custom-content-head">
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
                    fillOpacity="0.15"
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
      </VisualData>

      <VisualData
        id="api-data"
        title={["API Summary", "Running APIs", "Offline APIs"]}
        tabs={[
          {
            contentHead: ["Total Cost:", "$356.49"],
            content: [
              ["GOOGLE", "90 requests", "$30.01"],
              ["REMOVE-IMG", "200 requests", "$120.52"],
              ["VID ENCODING", "60 requests", "$180.73"],
              ["RANDOM QUOTES", "99 requests", "$25.23"],
            ],
          },
          {
            content: [
              ["REMOVE-IMG", "200 requests", "$120.52"],
              ["VID ENCODING", "60 requests", "$180.73"],
            ],
          },
          {
            content: [
              ["GOOGLE", "90 requests", "$30.01"],
              ["RANDOM QUOTES", "99 requests", "$25.23"],
              ["YOUTUBE.COM", "0 requests made", "$0"],
            ],
          },
        ]}
      />

      <VisualData
        id="account-overview"
        title="Account Overview"
        contentHead={["Jan 1 2024", "$200.38"]}
        content={[
          ["Total Running Containers:", "30"],
          ["Total Completed Builds:", "33"],
          ["Total Created Images:", "7"],
          ["Total API requests:", "300"],
        ]}
      />

      <VisualData
        id="core-system"
        title="Core System Status"
        content={[
          ["CPU", "%10"],
          ["GPU (1) ", "%43"],
          ["Processes:", "20"],
          ["Bandwidth:", "20GB"],
          ["Uptime:", "2 Months"],
        ]}
      />
    </div>
  );
}
