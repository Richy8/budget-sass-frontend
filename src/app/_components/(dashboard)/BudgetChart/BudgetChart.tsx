import React from "react";
import { BarChart, SelectDropdown } from "@/app/_components";
import "./BudgetChart.scss";

const BudgetChart = () => {
  const labels = [
    "Chicago Cty.",
    "Clark Cty.",
    "King Cty.",
    "Cook Cty.",
    "Fulton Cty.",
    "Denver Cty.",
    "Orange Cty.",
  ];
  const revenueDataset = [
    820000, 2350000, 1400000, 600000, 1650000, 2050000, 3200000,
  ];
  const expenditureDataset = [
    620000, 1600000, 1900000, 850000, 1120000, 1750000, 2420000,
  ];

  return (
    <div className="budget-chart">
      {/* TOP ROW */}
      <div className="top-row">
        <div>
          <div className="title-text">Budget Chart</div>
          <div className="description-text">
            Compare budget data across projects
          </div>
        </div>

        <SelectDropdown
          itemList={[
            {
              id: 1,
              value: "united_states",
              slug: "United States",
              active: true,
            },
            { id: 2, value: "canada", slug: "Canada", active: false },
            {
              id: 3,
              value: "united_kingdom",
              slug: "United Kingdom",
              active: false,
            },
          ]}
          itemType="Country"
          activeItem="United States"
        />
      </div>

      {/* BASE ROW */}
      <div className="base-row">
        <BarChart
          labels={labels}
          dataset1={revenueDataset}
          dataset2={expenditureDataset}
        />
      </div>
    </div>
  );
};

export default BudgetChart;
