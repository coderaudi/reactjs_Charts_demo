import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 300, 300],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

export default class PieDemo extends Component {
  render() {
    return (
      <div>
        <h2>Pie chart </h2>
        <Pie ref="chart" data={data} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data;
    console.log(datasets[0].data);
  }
}
