import React from "react";
import {
  Breadcrumb,
  SelectDropdown,
  MetricRow,
  BudgetChart,
  BudgetHeatMap,
} from "@/app/_components";

const Home = () => {
  return (
    <div className="base-container">
      {/* TOP ROW */}
      <div className="flex justify-between items-center gap-x-4 mb-8">
        <Breadcrumb />

        <SelectDropdown
          itemList={[
            { id: 1, value: "2024", slug: "Year 2024", active: true },
            { id: 2, value: "2023", slug: "Year 2023", active: false },
            { id: 3, value: "2022", slug: "Year 2022", active: false },
          ]}
          itemType="Fiscal Year"
          activeItem="2024"
          wrapOnSmallSreen={false}
        />
      </div>

      {/* METRICS AREA */}
      <div className="metrics-area">
        {/* TOP METRICS ROW */}
        <MetricRow />

        {/* BOTTOM METRICS ROW */}
        <div className="grid grid-cols-5 md:grid-cols-1 gap-x-5 md:gap-y-5">
          {/* BUDGET CHART */}
          <div className="col-span-3 md:col-span-1">
            <BudgetChart />
          </div>

          {/* BUDGET HEAT MAP */}
          <div className="col-span-2 md:col-span-1">
            <BudgetHeatMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
