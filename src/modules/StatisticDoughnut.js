import { Box } from "@mui/material";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);


const StatisticDoughnut = () => {
  const data = {
    labels: [],
    datasets: [
      {
        data: [36, 10, 8, 6],
        backgroundColor: ["#FF6384", "#FFC234", "#36A2EB", '#15BA15'],
        borderWidth: 2,
      },
    ],
  };

  return (
    <Box sx={{width: '400px', mr: '170px'}}>
        <Doughnut data={data} />
    </Box>
  );
}

export default StatisticDoughnut;