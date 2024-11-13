// DoughnutChart.js
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  // Add custom plugin for text in the middle

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
    <div style={{ height: "400px" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
