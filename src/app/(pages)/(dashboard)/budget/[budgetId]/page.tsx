import React from "react";
import { BudgetDisplayTop, BudgetDisplayBody } from "@/app/_components";

const page = () => {
  return (
    <div className="base-container">
      {/* TOP AREA */}
      <BudgetDisplayTop />

      {/* BODY AREA */}
      <BudgetDisplayBody />
    </div>
  );
};

export default page;
