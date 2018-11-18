import React from "react";

import { Line, Bar, Doughnut } from "react-chartjs-2";

class MyChart extends React.Component {
  render() {
    const chartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          data: [0, 10, 5, 2, 20, 30, 45]
        }
      ]
    };

    return (
      <div>
        <Line data={chartData} />
        <Bar data={chartData} />
        <Doughnut data={chartData} />
      </div>
    );
  }
}

export default MyChart;
