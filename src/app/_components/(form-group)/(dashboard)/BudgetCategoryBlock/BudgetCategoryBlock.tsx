"use client";

import { useState } from "react";
import { BudgetCategoryAccordion } from "@/app/_components";
import { BudgetDataSourceType } from "@/app/_types/store-type";
import "./BudgetCategoryBlock.scss";

const BudgetCategoryBlock = ({
  budgetItem,
}: {
  budgetItem: BudgetDataSourceType;
}) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="category-data-wrap">
      <div className="w-full">
        <div className={`close-up-wrapper ${!showDropdown && "is-close"}`}>
          {
            <div className="timeline-wrapper !pl-0 !border-0">
              <div className="timeline-marker first-category">
                <BudgetCategoryAccordion
                  isCollapse={showDropdown}
                  budgetDataItem={budgetItem}
                />
              </div>

              <div className="timeline-wrapper">
                {budgetItem.children.map((child: BudgetDataSourceType) => (
                  <>
                    <div className="timeline-marker second-category">
                      <BudgetCategoryAccordion
                        isCollapse={showDropdown}
                        budgetDataItem={child}
                      />
                    </div>

                    <div className="timeline-wrapper">
                      {child.children.map(
                        (grandChild: BudgetDataSourceType) => (
                          <>
                            <div className="timeline-marker third-category">
                              <BudgetCategoryAccordion
                                isCollapse={showDropdown}
                                budgetDataItem={grandChild}
                              />
                            </div>

                            <div className="timeline-wrapper">
                              {grandChild.children.map(
                                (greatGrandChild: BudgetDataSourceType) => (
                                  <>
                                    <div className="timeline-marker fourth-category">
                                      <BudgetCategoryAccordion
                                        isCollapse={showDropdown}
                                        budgetDataItem={greatGrandChild}
                                      />
                                    </div>
                                  </>
                                )
                              )}
                            </div>
                          </>
                        )
                      )}
                    </div>
                  </>
                ))}
              </div>
            </div>
          }
        </div>

        {/* category-view-action */}
        <div className="category-view-action">
          <div className="action-text" onClick={toggleDropdown}>
            {`${showDropdown ? "Collapse" : "Expand"} budget data`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetCategoryBlock;
