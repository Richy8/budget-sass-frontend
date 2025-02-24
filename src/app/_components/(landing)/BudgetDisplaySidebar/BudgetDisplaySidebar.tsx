"use client";

import { useRef, useState } from "react";
import { ClickOutsideWrapper } from "@/app/_components";
import "./BudgetDisplaySidebar.scss";

const BudgetDisplaySidebar = () => {
  const dropdownRef = useRef<any>();
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <div className="budget-display-sidebar">
      {/* SIDEBAR TOP */}
      <div className="sidebar-top">
        <div className="icon icon-home"></div>
        <div className="text">Budget Overview</div>
      </div>

      {/* SIDEBAR MID */}
      <div className="sidebar-mid">
        <div className="sidebar-mid--left">
          <div className="icon icon-calendar"></div>
          <div className="text">Fiscal Year</div>
        </div>

        <div className="sidebar-mid--right">
          <div
            className="select-input"
            ref={dropdownRef}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div className="input-value">FY 2024</div>
            <div
              className={`input-toggler icon-caret-down ${
                showDropdown ? "rotate-180" : "rotate-0"
              }`}
            ></div>
          </div>

          {/* SELECT OPTIONS */}
          <ClickOutsideWrapper
            togglerRef={dropdownRef}
            showDropdown={showDropdown}
            toggleDropdown={setShowDropdown}
          >
            <div className="select-options">
              <div className="option-item">FY 2023</div>
              <div className="option-item">FY 2024</div>
              <div className="option-item">FY 2025</div>
            </div>
          </ClickOutsideWrapper>
        </div>
      </div>

      {/* SIDEBAR BOTTOM */}
      <div className="sidebar-bottom">
        <div className="timeline-row">
          <div className="indicator"></div>

          <div>
            <div className="meta-text">ESTIMATED REVENUE</div>
            <div className="secondary-text">$13.24 Billion</div>
          </div>
        </div>

        <div className="timeline-row">
          <div className="indicator"></div>

          <div>
            <div className="meta-text">ESTIMATED REVENUE</div>
            <div className="primary-text">General Financing Requirements</div>
            <div className="secondary-text">$7.96 Billion</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetDisplaySidebar;
