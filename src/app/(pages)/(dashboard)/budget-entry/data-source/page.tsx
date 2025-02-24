import React from "react";
import { BudgetSourceWrapper } from "@/app/_components";

const BudgetDataSource = () => {
  return (
    <div>
      <div className="page-title-area mb-10">
        <div className="page-title text-3xl text-grey-900 font-semibold mb-2">
          Budget Data Source
        </div>

        <div className="page-subtitle text-grey-600/85 text-[14.5px]">
          Provide the source of your budget data entry.
        </div>
      </div>

      {/* BUDGET CATEGORY FORM GROUP */}
      <div className="form-group-wrapper w-[85%] pb-16">
        <BudgetSourceWrapper />
      </div>
    </div>
  );
};

export default BudgetDataSource;
