import React from "react";
import { MetricCard, SelectDropdown } from "@/app/_components";
import "./MetricRow.scss";

const MetricRow = () => {
  return (
    <div className="metric-row">
      {/* SELECTION TOP */}
      <div className="selection-top">
        <div>
          <div className="title-text">Budget Overview</div>
          <div className="description-text">
            Overview of budget data by location
          </div>
        </div>

        {/* SELECTION FILTER */}
        <div className="selection-filter">
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
      </div>

      <div className="w-full grid grid-cols-3 md:grid-cols-1 gap-x-5 md:gap-y-5">
        <MetricCard
          title="Estimated Revenue"
          value={1234567}
          currency="$"
          startDate="Jan 01, 2024"
          endDate="Dec 31, 2024"
          type="revenue"
        />

        <MetricCard
          title="Estimated Expenditure"
          value={987654}
          currency="$"
          startDate="Jan 01, 2024"
          endDate="Dec 31, 2024"
          type="expenditure"
        />

        <MetricCard
          title="Fiscal Health"
          value={246913}
          currency="$"
          healthStatus="surplus"
          startDate="Jan 01, 2024"
          endDate="Dec 31, 2024"
          type="health"
        />
      </div>
    </div>
  );
};

export default MetricRow;
