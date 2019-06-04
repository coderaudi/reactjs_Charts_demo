import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import LineChart from "./mycharts/linechart";
import PieChart from "./mycharts/piechart";
import BarChart from "./mycharts/barchart";
import DoughnutChart from "./mycharts/doughnutchart";
function App() {
  return (
    <div className="App">
      <LineChart />
      <PieChart />
      <BarChart />
      <DoughnutChart />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
