"use client";

import { useRef, useState } from "react";
import {
  BudgetSidebar,
  ClickOutsideWrapper,
  BlockIcon,
  TableIcon,
  BudgetLoader,
} from "@/app/_components";
import "./BudgetDisplayBody.scss";

const BudgetDisplayBody = () => {
  const dropdownRef = useRef<any>();
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const [activeView, setActiveView] = useState<string>("treemap");

  return (
    <div className="budget-body">
      {/* SIDEBAR AREA */}
      <div className="left-pane">
        <BudgetSidebar />
      </div>

      {/* CONTENT BODY */}
      <div className="right-pane">
        {/* TOP ROW */}
        <div className="top-row">
          <div className="top-row--left">
            <div className="primary-text">Estimated Expenditure - FY 2024</div>
            <div className="secondary-text">
              {`Select a budget category group to explore it's allocations.`}
            </div>
          </div>

          <div className="top-row--right">
            <div className="meta-text">ESTIMATED AMOUNT</div>
            <div className="primary-text">$13.84 Billion</div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="bottom-row">
          <div className="bottom-row--top">
            <div className="bottom-row--top--left">
              <div className="select-hint-text">See budget breakdown by:</div>

              <div className="select-input-block">
                <div
                  className="select-input"
                  ref={dropdownRef}
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <div className="input-value">Where would the money go</div>
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
                    <div className="option-item">Where would the money go?</div>
                    <div className="option-item">
                      Where would the money come from?
                    </div>
                    <div className="option-item">
                      What project is the money for?
                    </div>
                  </div>
                </ClickOutsideWrapper>
              </div>
            </div>

            <div className="bottom-row--top--right">
              <BlockIcon
                active={activeView === "treemap"}
                selected={(view) => setActiveView(view)}
              />

              <TableIcon
                active={activeView === "table"}
                selected={(view) => setActiveView(view)}
              />
            </div>
          </div>

          {/* TREEMAP DISPLAY */}
          <div className="bottom-row--base">
            <BudgetLoader />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetDisplayBody;
