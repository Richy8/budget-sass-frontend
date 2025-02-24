"use client";

import React, { useRef, useState } from "react";
import { ClickOutsideWrapper } from "@/app/_components";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import "./MultiSelectInputField.scss";

// type FiscalYearType = {
//   title: string;
//   value: string;
//   isSelected: boolean;
// };

const MultiSelectInputField = () => {
  const dropdownRef = useRef<any>();
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  // const [fiscalYearList, setFiscalYearList] = useState<FiscalYearType[]>([]);

  const toggleDropdown = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    if (target.classList.contains("ignore") || target.closest(".ignore"))
      return;

    setShowDropdown(!showDropdown);
  };

  return (
    <div className="multiselect-field">
      {/* SELECT AREA */}
      <div
        className="form-control select-input-area"
        ref={dropdownRef}
        onClick={toggleDropdown}
      >
        <div className="content-area">
          {/* PLACEHOLDER TEXT */}
          <div className="placeholder-text">Select budget year</div>

          {/* SELECTED ITEM ROW */}
          {/* <div className="selection-row">
            <div className="selection-item ignore">
              <div className="text">2023</div>
              <XMarkIcon className="close-icon" />
            </div>
          </div> */}
        </div>

        {/* DROPDOWN TRIGGER */}
        <ChevronDownIcon
          className={`dropdown-trigger ${showDropdown && "rotate-180"} `}
        />
      </div>

      {/* SELECT OPTIONS */}
      <ClickOutsideWrapper
        togglerRef={dropdownRef}
        showDropdown={showDropdown}
        toggleDropdown={setShowDropdown}
      >
        <div className="base-dropdown multi-select-dropdown">
          <div className="dropdown-wrapper">
            <div className={`app-dropdown-item capitalize`}>
              <div className="text">Fiscal year - 2020</div>

              <div className="icon-wrap">
                <div className="icon icon-checkmark"></div>
              </div>
            </div>
          </div>
        </div>
      </ClickOutsideWrapper>
    </div>
  );
};

export default MultiSelectInputField;
