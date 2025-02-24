"use client";

import React, { useState, useEffect } from "react";
import {
  SelectDropdown,
  MetricRow,
  BudgetContentBlock,
  BudgetEmptyBlock,
} from "@/app/_components";

const Home = () => {
  const [budgetList, setBudgetList] = useState<any>([]);

  const updateBudgetList = (newBudget: any) => {
    setBudgetList([...budgetList, newBudget]);
  };

  useEffect(
    () => updateBudgetList({ id: 1, name: "Budget 1", amount: 1000 }),
    []
  );

  return (
    <div className="base-container">
      {/* TOP ROW */}
      <div className="flex justify-between items-center gap-x-4 mb-12">
        <div className="flex flex-col gap-y-1">
          <div className="text-neutral-800 text-[26px] font-semibold">
            Budget Overview
          </div>

          <div className="text-grey-600/90 text-[15px]">
            View your budget performance and monitor your financial health.
          </div>
        </div>

        {/* SELECT DROPDOWN */}
        <div className="selection-area flex justify-end items-center gap-x-3">
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

      {/* METRICS AREA */}
      <div className="metrics-area">
        {budgetList.length > 0 ? (
          <>
            <MetricRow />
            <BudgetContentBlock />
          </>
        ) : (
          <BudgetEmptyBlock />
        )}
      </div>
    </div>
  );
};

export default Home;
