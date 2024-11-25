// components/DoughnutChart.tsx
"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

type DoughnutChartProps = {
  labels: string[];
  dataset: number[];
  bgColor?: string[];
  borderColor?: string[];
  currencySign?: string;
};

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  labels,
  dataset,
  bgColor = [],
  borderColor = [],
  currencySign = "$",
}) => {
  const data = {
    labels,
    datasets: [
      {
        data: dataset,
        backgroundColor: bgColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        // position: "right" as const,
        // align: "center" as const,
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
              // Format smaller values with commas
              formattedValue = value.toLocaleString();
            }

            return `${context.label}: ${currencySign}${formattedValue}`;
          },
        },
      },
    },
  };

  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
