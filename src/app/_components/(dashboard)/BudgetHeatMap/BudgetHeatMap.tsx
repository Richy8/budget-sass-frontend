import React from "react";
import { DoughnutChart, SelectDropdown } from "@/app/_components";
import "./BudgetHeatMap.scss";

const BudgetHeatMap = () => {
  const labels = ["Public income tax", "Government tax", "Local tax"];
  const data = [820000, 2350000, 1400000];

  return (
    <div className="budget-heat-map">
      {/* TOP ROW */}
      <div className="top-row">
        <div>
          <div className="title-text">Budget Distribution</div>
          <div className="description-text">
            Visualize project budget distribution
          </div>
        </div>
      </div>

      {/* BASE ROW */}
      <div className="base-row">
        {/* SELECTION TOP */}
        <div className="selection-top">
          <SelectDropdown
            itemList={[
              {
                id: 1,
                value: "chicago_city",
                slug: "Chicago city",
                active: true,
              },
              {
                id: 2,
                value: "clark_county",
                slug: "Clark county",
                active: false,
              },
              {
                id: 3,
                value: "orange_county",
                slug: "Orange county",
                active: false,
              },
            ]}
            itemType="Project"
            activeItem="Chicago city"
          />

          <SelectDropdown
            itemList={[
              {
                id: 1,
                value: "revenue",
                slug: "Revenue",
                active: true,
              },
              {
                id: 2,
                value: "expenditure",
                slug: "Expenditure",
                active: false,
              },
            ]}
            itemType="Type"
            activeItem="Revenue"
          />
        </div>

        <div className="chart-wrapper">
          <div className="chart-container">
            <DoughnutChart
              labels={labels}
              dataset={data}
              bgColor={[
                "rgba(255, 99, 132, 0.4)",
                "rgba(54, 162, 235, 0.4)",
                "rgba(255, 206, 86, 0.4)",
              ]}
              borderColor={[
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
              ]}
              currencySign="$"
            />
          </div>

          <div className="legends">
            <div className="legend-item">
              <div
                className="legend-item-key border"
                style={{
                  backgroundColor: "rgba(255, 99, 132, 0.4)",
                  borderColor: "rgba(255, 99, 132, 1)",
                }}
              ></div>
              <div className="legend-item-value">Public income tax</div>
            </div>

            <div className="legend-item">
              <div
                className="legend-item-key border"
                style={{
                  backgroundColor: "rgba(54, 162, 235, 0.4)",
                  borderColor: "rgba(54, 162, 235, 1)",
                }}
              ></div>
              <div className="legend-item-value">Government tax</div>
            </div>

            <div className="legend-item">
              <div
                className="legend-item-key border"
                style={{
                  backgroundColor: "rgba(255, 206, 86, 0.4)",
                  borderColor: "rgba(255, 206, 86, 1)",
                }}
              ></div>
              <div className="legend-item-value">Local tax</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetHeatMap;
