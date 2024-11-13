import { Bar } from "react-chartjs-2";
import { FaEllipsisH } from "react-icons/fa";
import { Flex } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register components with Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
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
        label: "Employees",
        data: [50, 450, 100, 250, 75, 450],
        backgroundColor: [
          "#ADD8E6",
          "#4169E1",
          "#008080",
          "#E6E6FA",
          "#50C878",
          "#808080",
        ],
        borderColor: [
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
    maintainAspectRatio: false, // Allow setting custom dimensions
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div style={{ height: "400px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
