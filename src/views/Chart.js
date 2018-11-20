import React from "react";

import { Line, Bar, Doughnut, HorizontalBar, Pie } from "react-chartjs-2";

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

    const chartParties = {
      labels: [
        "PT",
        "PMDB",
        "PSDB",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV",
        "PV"
      ],
      datasets: [
        {
          data: [
            300,
            400,
            500,
            600,
            700,
            300,
            400,
            500,
            600,
            700,
            300,
            400,
            500,
            600,
            700,
            300,
            400,
            500,
            600,
            700,
            300,
            400,
            500,
            600,
            700,
            300,
            400,
            500,
            600,
            700,
            300,
            400,
            500,
            600,
            700
          ],
          backgroundColor: ["#ff0000", "#36A2EB", "#FFCE56", "#007300"],
          hoverBackgroundColor: ["#ff0000", "#36A2EB", "#FFCE56", "#007300"]
        }
      ]
    };

    const chartCharges = {
      labels: [
        "Dep.Distrital",
        "Dep.Estadual",
        "Dep.Federal",
        "Governador",
        "Prefeito",
        "Presidente",
        "Senador",
        "Senador 1º suplente",
        "Senador 2º suplente",
        "Vereador",
        "Vice-Gorvernador",
        "Vice-Prefeito",
        "Vice-Presideente"
      ],
      datasets: [
        {
          label: "Charges",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [
            65,
            59,
            80,
            81,
            56,
            55,
            40,
            65,
            59,
            80,
            81,
            56,
            55,
            40,
            65,
            59,
            80,
            81
          ]
        }
      ]
    };

    const chartSchooling = {
      labels: [
        "Ensino Fundamental Completo",
        "Ensino Fundamental Incompleto",
        "Ensino Médio Completo",
        "Ensino Médio Incompleto",
        "Graduação Completa",
        "Graduação Incompleta",
        "Pós-Graduação"
      ],
      datasets: [
        {
          label: "Schooling Situation",
          backgroundColor: "rgba(100, 171, 75, 0.5)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [65, 59, 80, 81, 56, 55, 32]
        }
      ]
    };

    const chartElectionYear = {
      labels: ["2016", "2017", "2018"],
      datasets: [
        {
          label: "Election Year",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(206, 65, 137, 0.5)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(206, 65, 137, 0.5)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };

    //const chartStates

    //const chartCities

    const chartElect = {
      labels: ["Eleito", "Não Eleito"],
      datasets: [
        {
          data: [60, 40],
          backgroundColor: ["#ff0000", "#36A2EB"],
          hoverBackgroundColor: ["#ff0000", "#36A2EB"]
        }
      ]
    };

    const chartGender = {
      labels: ["Feminino", "Masculino"],
      datasets: [
        {
          data: [70, 30],
          backgroundColor: ["#FF6384", "#36A2EB"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB"]
        }
      ]
    };

    //const chartProof

    const chartCivilState = {
      labels: [
        "Casado",
        "Divorciado",
        "Separado Judicialmente",
        "Solteiro",
        "Viuvo",
        "Não Informado",
        "0",
        "1",
        "3",
        "7"
      ],
      datasets: [
        {
          label: "Civil State",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [100, 1000, 10.0, 100.0, 1.0]
        }
      ]
    };

    return (
      <div>
        <Line data={chartData} />
        <Bar data={chartData} />
        <Doughnut data={chartParties} />
        <Bar data={chartSchooling} />
        <Line data={chartElectionYear} />
        <HorizontalBar data={chartCharges} />
        <Pie data={chartGender} />
        <Bar data={chartCivilState} />
        <Pie data={chartElect} />
      </div>
    );
  }
}

export default MyChart;
