import React, { useRef} from "react";
import Chart from "chart.js/auto";
import { Bar, getElementAtEvent } from "react-chartjs-2";
import "./App.css";

Chart.register();

export const data = {
  labels: ["mon", "thu", "wed", "thu", "fri", "sat", "sun"],
  datasets: [
    {
      data: [15, 35, 52.36, 31.07, 25, 48, 28],
      backgroundColor: ["hsl(10, 79%, 65%)",
                        "hsl(10, 79%, 65%)",
                        "hsl(186, 34%, 60%)",
                        "hsl(10, 79%, 65%)",
                        "hsl(10, 79%, 65%)",
                        "hsl(10, 79%, 65%)",
                        "hsl(10, 79%, 65%)"],
      hoverBackgroundColor: ["rgba(255,155,135,255)",
                            "rgba(255,155,135,255)", 
                            "rgba(180,223,229,255)",
                            "rgba(255,155,135,255)", 
                            "rgba(255,155,135,255)", 
                            "rgba(255,155,135,255)", 
                            "rgba(255,155,135,255)" ],
      borderRadius: 5,
      borderSkipped: false,
    },
  ],
};

export const options = {
  scales: {
    x: {
      border: {
        color: "white",
      },
      ticks: {
        color: "hsl(28, 10%, 53%)",
        font: {
          size: "13%",
        },
      },
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      backgroundColor: "hsl(25, 47%, 15%)",
      afterTitle: "string[]",
    },
  responsive: true,
  }
}

export default function App() {
  const chartRef = useRef();
  const onHover = (event) => {
    const elements = getElementAtEvent(chartRef.current, event);
    console.log(elements) 
  }

return (
  <Bar
    ref= {chartRef}
    options={options}
    data={data}
    onMouse={onHover}
  />
);
}