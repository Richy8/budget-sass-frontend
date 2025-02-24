import React from "react";
import { BudgetCategoryFormGroup } from "@/app/_components";

const BudgetCategory = () => {
  return (
    <div>
      <div className="page-title-area mb-10">
        <div className="page-title text-3xl text-grey-900 font-semibold mb-2">
          Budget Category Group
        </div>

        <div className="page-subtitle text-grey-600/85 text-[14.5px]">
          Create budget category group, to organize your budget data.
        </div>
      </div>

      {/* BUDGET CATEGORY FORM GROUP */}
      <div className="form-group-wrapper w-[85%] pb-16">
        <BudgetCategoryFormGroup />
      </div>
    </div>
  );
};

export default BudgetCategory;
