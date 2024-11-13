// DoughnutChart.js
import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  // Add custom plugin for text in the middle
  const customTextPlugin = {
    id: "customText",
    beforeDraw: (chart) => {
      const { width } = chart;
      const { height } = chart;
      const ctx = chart.ctx;
      ctx.restore();
      const fontSize = (height / 100).toFixed(2);
      ctx.font = `${fontSize}em sans-serif`;
      ctx.textBaseline = "middle";

      const text = "120";
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2;

      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  };

  const data = {
    labels: [
      "Doctors",
      "Nurses",
      "Dietitians",
      "Volunteers",
      "Pharmacists",
      "Other Staff",
    ],
    datasets: [
      {
        label: "Total Department",
        data: [50, 450, 100, 250, 75, 450],
        backgroundColor: [
          "#ADD8E6",
          "#4169E1",
          "#008080",
          "#E6E6FA",
          "#50C878",
          "#808080",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  return (
    <div style={{}}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
