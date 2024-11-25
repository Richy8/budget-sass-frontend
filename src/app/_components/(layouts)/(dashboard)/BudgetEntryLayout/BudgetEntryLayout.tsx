import React, { ReactNode } from "react";
import { Breadcrumb, EntryBlockSidebar } from "@/app/_components";
import "./BudgetEntryLayout.scss";

const BudgetEntryLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="base-container">
      {/* TOP ROW */}
      <div className="flex justify-between items-center gap-x-4 mt-2.5 mb-16">
        <Breadcrumb itemText="Budget Entry" itemLink="/budget-entry" />
      </div>

      {/* ENTRY BLOCK */}
      <div className="budget-entry-layout">
        <div className="sidebar-area">
          <EntryBlockSidebar />
        </div>

        <div className="body-area">{children}</div>
      </div>
    </div>
  );
};

export default BudgetEntryLayout;
