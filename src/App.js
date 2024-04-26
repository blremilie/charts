import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "./App.css";

const jsonData= require("./data.json");
let labels = jsonData.map(function(e) { return e.day });
let price = jsonData.map(function(e) { return e.amount });

const HOVER_INDEX = 1;
const BACKGROUND_INDEX = 0;

Chart.register();

function currentDayBackground() {
  let backgroundTable = Array(7).fill("hsl(10, 79%, 65%)");
  let hoverBackgroundTable = Array(7).fill("rgba(255,155,135,255)");
  const date = new Date();
  date.setDate(date.getDate() - 1);
  const day = date.getDay(); 

  backgroundTable[day] = "hsl(186, 34%, 60%)";
  hoverBackgroundTable[day] = "rgba(180,223,229,255)";

  return [backgroundTable, hoverBackgroundTable];
}

let backgroundTables = currentDayBackground();

export const data = {
  labels: labels,
  datasets: [
    {
      data: price,
      backgroundColor: backgroundTables[BACKGROUND_INDEX],
      hoverBackgroundColor: backgroundTables[HOVER_INDEX],
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
      tooltipCaretSize: 0,
      callbacks: {
        label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
                label += ': ';
            }
            if (context.parsed.y !== null) {
                label += new Intl.NumberFormat('en-US', 
                { style: 'currency', currency: 'USD' }).format(context.parsed.y);
            }
            return label;
        },
      }
    },
    responsive: true,
  }
}

export default function App (){

return (
  <Bar
    options={options}
    data={data}
  />
);
}