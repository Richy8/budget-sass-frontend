import React from "react";

const BudgetDisplayTop = () => {
  return (
    <div className="top-area mb-16 w-[65%]">
      {/* BACK BUTTON */}
      <div className="btn btn-sm btn-secondary back-btn w-max mb-9">
        <div className="icon icon-arrow-left"></div>
        <div className="text">Back</div>
      </div>

      {/* TITLE TEXT */}
      <div className="text-neutral-800 text-3xl font-semibold mb-4">
        Chicago City Financial Budget
      </div>

      {/* DESCRIPTION TEXT */}
      <div className="text-neutral-700/95 text-[16.5px] leading-7 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quibusdam
        quod odio eligendi consequuntur dolore expedita minima quia alias
        asperiores, ex maxime assumenda quaerat quae qui.
      </div>

      <div className="meta-text mb-3.5">
        <span className="font-medium text-[15.5px] text-teal-700/80">
          Budget Source:
        </span>{" "}
        <a
          href="https://www.usaspending.gov/explorer/agency"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15.5px]"
        >
          https://www.usaspending.gov/explorer/agency
        </a>
      </div>

      {/* DATE TIMESTAMP */}
      <div className="date-timestamp">
        <span className="font-medium text-[15.5px] text-teal-700/80">
          Last Updated:
        </span>{" "}
        <span className="text-[15.5px] text-neutral-700/95">
          23rd January, 2024
        </span>
      </div>
    </div>
  );
};

export default BudgetDisplayTop;
