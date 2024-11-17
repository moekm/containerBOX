import { useEffect, useState } from "react";
import animBetween from "./utils/animBetween.js";

// keeping it safe from re-creation :>
const config = {
  minVAL: 2,
  maxVAL: 15,
  outputCount: 3,
  addUpTo: 100,
};

// inital values
const initalData = animBetween(config);
const logsArray = [
  "(c) WEBSITE#1 - created by 'MOK' 3 days ago",
  "(i) UBUNTU#22.04 - created by 'USER' 1 month ago",
  "(c) UBUNTU#22.04 - created by 'USER' 2 days ago",
  "(i) NODEJS#8.1 - created by 'USER' 18 hours ago",
  "(i) SQLlite#11.1 - created by 'USER' 50 mins ago",
];

export default function ContainerDataOverview() {
  const [data, setData] = useState(initalData);
  const [logs, setLogs] = useState({
    logs: logsArray.toSpliced(2),
    nextIndex: 2,
  });

  useEffect(() => {
    const UIData = setInterval(() => {
      const newData = animBetween(config);
      setData(newData);
      // console.log(visualData);

      setLogs((prevState) => {
        // the '%' makes sure we dont overflow the array and resets to 0.
        // assuming logsArray length is 5. (3 % 5 = 3) but (5 % 5 = 0)
        const nextLog = logsArray[prevState.nextIndex % logsArray.length];
        const updatedLogs = [nextLog, ...prevState.logs].splice(0, 3);

        return {
          logs: updatedLogs,
          nextIndex: (prevState.nextIndex + 1) % logsArray.length,
        };
      });
    }, 5000);

    return () => {
      clearInterval(UIData);
    };
  }, []);

  return (
    <div id="data-overview">
      <div id="controls">
        <h3>Overview</h3>
        <button id="type-text">view more {">"}</button>
      </div>

      <div className="progress-bar">
        <div
          id="active-containers"
          style={{ width: data.percentages[0] + "%" }}
        ></div>
        <div
          id="stopped-containers"
          style={{ width: data.percentages[1] + "%" }}
        ></div>
        <div
          id="container-images"
          style={{ width: data.percentages[2] + "%" }}
        ></div>
      </div>

      <div className="progress-text" key={data.values}>
        <div>
          <span>{data.values[0]}</span>
          <p>active</p>
        </div>
        <div>
          <span>{data.values[1]}</span>
          <p>stopped</p>
        </div>
        <div>
          <span>{data.values[2]}</span>
          <p>images</p>
        </div>
      </div>

      <div className="logs">
        <h3>Logs</h3>
        <div id="logs-overview">
          {logs.logs.map((string) => (
            <p key={string}>{string}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
