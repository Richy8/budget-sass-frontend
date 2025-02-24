"use client";

import React, { useState } from "react";
import {
  BudgetDisplayBottomCard,
  BudgetDisplaySidebar,
  BudgetDisplayContent,
} from "@/app/_components";
import "./BudgetDisplayCard.scss";

const BudgetDisplayCard = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`budget-display-card ${
        isActive ? "budget-display-card--active" : ""
      }`}
    >
      {/* CONTENT AREA */}
      <div className="content-area">
        {/* TOP DISPLAY AREA */}
        <div className="top-display-area">
          {/* AREA TOP */}
          <div className="area-top">
            <div className="area-top--left">
              <div className="title-text">
                <span>State of Chicago, United States of America</span>{" "}
                <span className="status">Verified</span>
              </div>

              <div className="description-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam itaque est nisi repellendus labore ad explicabo
                doloribus repellendus labore ad explicabo doloribus repellendus
                labore
              </div>
            </div>

            <div className="area-top--right">
              <div className="info-card">
                <div className="counter">124</div>
                <div className="counter-text">Views</div>
              </div>
            </div>
          </div>

          {/* AREA BOTTOM */}
          <div className="area-bottom">
            <BudgetDisplayBottomCard />
          </div>
        </div>

        {/* BOTTOM DISPLAY AREA */}
        <div className="bottom-display-area">
          {/* SIDEBAR */}
          <div className="sidebar-area">
            <BudgetDisplaySidebar />
          </div>

          {/* CONTENT AREA */}
          <div className="content-area">
            <BudgetDisplayContent />
          </div>
        </div>
      </div>

      <div className="action-area" onClick={toggleActive}>
        <div className="action-text">
          {isActive ? "Collapse" : "Expand"} Budget
        </div>
        <div
          className={`icon icon-caret-down ${isActive ? "rotate-180" : ""}`}
        ></div>
      </div>
    </div>
  );
};

export default BudgetDisplayCard;
