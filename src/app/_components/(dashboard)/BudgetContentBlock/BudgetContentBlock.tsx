import React from "react";
import { BudgetCard, SelectDropdown, Pagination } from "@/app/_components";
import "./BudgetContentBlock.scss";

const BudgetContentBlock = () => {
  return (
    <div className="budget-content-block">
      <div className="budget-wrapper">
        {/* BUDGET TOP ROW */}
        <div className="budget-top-row">
          <div className="budget-top-row--left">
            <div className="title-text">Your Budget at a Glance</div>
            <div className="description-text">
              All your budget data, organized for easy tracking and updates.
            </div>
          </div>

          <div className="budget-top-row--right">
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

        {/* FILTER SEARCH ROW */}
        <div className="filter-search-area">
          <div className="search-section">
            <input
              type="search"
              className="form-control search-input-form"
              placeholder="Search for a budget by name or description"
            />

            <div className="search-action">
              <div className="icon icon-search-normal"></div>
              <div className="text">Search</div>
            </div>
          </div>

          <div className="filter-section">
            <div className="filter-item active-item">Private Budget</div>
            <div className="filter-item">Public Budget</div>
          </div>
        </div>

        {/* BUDGET DATA ROW */}
        <div className="budget-data-row">
          <BudgetCard />
          <BudgetCard />
          <BudgetCard />
        </div>

        {/* PAGINATION */}
        <Pagination />
      </div>
    </div>
  );
};

export default BudgetContentBlock;
