import React from "react";
import { BudgetInfoFormGroup } from "@/app/_components";

const BudgetInformation = () => {
  return (
    <div>
      <div className="page-title-area mb-10">
        <div className="page-title text-3xl text-grey-900 font-semibold mb-2">
          Budget Information
        </div>

        <div className="page-subtitle text-grey-600/85 text-[14.5px]">
          Provide budget information for accurate financial insights
        </div>
      </div>

      {/* BUDGETINFO FORM GROUP */}
      <div className="form-group-wrapper w-[85%]">
        <BudgetInfoFormGroup />
      </div>
    </div>
  );
};

export default BudgetInformation;
