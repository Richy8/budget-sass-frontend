"use client";

import React, { useEffect } from "react";
import useStore from "@/app/_app-store";
import { usePathname } from "next/navigation";
import "./EntryBlockSidebar.scss";

const EntryBlockSidebar = () => {
  const pathname = usePathname();

  const {
    budgetSidebar,
    updateBudgetSidebar,
    getBudgetInformation,
    getBudgetCategory,
  } = useStore();

  const isBudgetInformationComplete = () => {
    const budgetInformation = getBudgetInformation();
    return (
      budgetInformation.title !== "" &&
      budgetInformation.description !== "" &&
      budgetInformation.source !== "" &&
      budgetInformation.country !== "" &&
      budgetInformation.entryType !== ""
    );
  };

  const isBudgetCategoryComplete = () => {
    const budgetCategory = getBudgetCategory();
    return (
      budgetCategory.categoryGroupList.length > 0 &&
      budgetCategory.yearList.length > 0
    );
  };

  const validateBudgetSidebarState = () => {
    const budgetInformationComplete = isBudgetInformationComplete();
    const budgetCategoryComplete = isBudgetCategoryComplete();

    if (budgetInformationComplete) {
      updateBudgetSidebar("/budget-entry/information", "completed", true);
    } else {
      updateBudgetSidebar("/budget-entry/information", "active", true);
    }

    if (budgetCategoryComplete) {
      updateBudgetSidebar("/budget-entry/category", "completed", true);
    } else {
      if (budgetInformationComplete) {
        updateBudgetSidebar("/budget-entry/category", "active", true);
      } else {
        updateBudgetSidebar("/budget-entry/category", "completed", false);
        updateBudgetSidebar("/budget-entry/category", "active", false);
      }
    }
  };

  useEffect(() => {
    validateBudgetSidebarState();
  }, [pathname]);

  return (
    <div className="entry-block-sidebar">
      {budgetSidebar.map((item: any, index: number) => (
        <div
          key={index}
          className={`sidebar-item ${
            item.isCompleted
              ? "sidebar-item-completed"
              : item.isActive
              ? "sidebar-item-active"
              : ""
          }`}
        >
          <div className="sidebar-item-indicator">
            {item.isCompleted && <div className="icon icon-checkmark"></div>}
          </div>

          <div
            className={`sidebar-item-text ${
              item.isCompleted
                ? "font-medium text-teal-700"
                : item.isActive
                ? "text-neutral-600"
                : "text-neutral-500/90"
            }`}
          >
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EntryBlockSidebar;
