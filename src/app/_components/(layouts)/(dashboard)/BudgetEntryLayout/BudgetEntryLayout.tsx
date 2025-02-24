"use client";

// import React, { ReactNode, useEffect } from "react";
import React, { ReactNode } from "react";
import { EntryBlockSidebar } from "@/app/_components";
import { usePathname } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
// import useStore from "@/app/_app-store";
import "./BudgetEntryLayout.scss";

const BudgetEntryLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  // const { budgetEntryPayload } = useStore();

  // useEffect(() => {
  //   const handleBeforeUnload = () => {
  //     localStorage.setItem(
  //       "budget_app_data",
  //       JSON.stringify({ state: budgetEntryPayload })
  //     );
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, [budgetEntryPayload]);

  return (
    <div className="base-container pt-20 pb-10">
      {/* ENTRY BLOCK */}
      <div className="budget-entry-layout">
        <div className="sidebar-area sticky top-28">
          <EntryBlockSidebar />
        </div>

        <div className="body-area">
          {pathname !== "/budget-entry/information" && (
            <div className="top-nav mb-8">
              <button
                className="btn btn-sm btn-primary-outline"
                onClick={() => window.history.back()}
              >
                {" "}
                <ArrowLeftIcon className="w-4 h-4" /> Back
              </button>
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default BudgetEntryLayout;
