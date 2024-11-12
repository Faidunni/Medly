import { Bar } from "react-chartjs-2";
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
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thuursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Fitness Activity",
        data: [202, 105, 210, 95, 70, 100, 215],
        backgroundColor: "#1A4FBA",
        borderColor: "#1A4FBA",
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
  };

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
