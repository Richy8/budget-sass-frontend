// components/BarChart.tsx
"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type BarChartProps = {
  labels: string[];
  dataset1: number[];
  dataset2: number[];
  currencySign?: string;
};

const BarChart: React.FC<BarChartProps> = ({
  labels,
  dataset1,
  dataset2,
  currencySign = "$",
}) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: dataset1,
        backgroundColor: "rgba(110, 204, 143, 0.3)",
        borderColor: "rgba(79, 192, 123, 0.8)",
        borderWidth: 1,
      },
      {
        label: "Expenditure",
        data: dataset2,
        backgroundColor: "rgba(240, 53, 109, 0.3)",
        borderColor: "rgba(210, 15, 73, 0.8)",
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw as number;
            let formattedValue;

            if (value >= 1_000_000_000) {
              // Format to billions
              formattedValue = `${(value / 1_000_000_000).toFixed(2)}B`;
            } else if (value >= 1_000_000) {
              // Format to millions
              formattedValue = `${(value / 1_000_000).toFixed(2)}M`;
            } else {
              // Keep as is for smaller values
              formattedValue = value.toLocaleString();
            }

            // Add currency sign
            return `${context.dataset.label}: ${currencySign}${formattedValue}`;
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => {
            if (typeof value === "number") {
              let formattedValue;
              if (value >= 1_000_000_000) {
                formattedValue = `${(value / 1_000_000_000).toFixed(2)}B`;
              } else if (value >= 1_000_000) {
                formattedValue = `${(value / 1_000_000).toFixed(2)}M`;
              } else {
                formattedValue = value.toLocaleString(); // Add commas for smaller values
              }

              // Add currency sign
              return `${currencySign}${formattedValue}`;
            }
            return value;
          },
        },
      },
    },
  };

  return (
    <div className="w-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
