"use client";

import { useRef, useState } from "react";
import { ClickOutsideWrapper } from "@/app/_components";
import "./SelectDropdown.scss";

interface SelectDropdownProps {
  itemList: { id: number; value: string; slug: string; active: boolean }[];
  itemType: string;
  activeItem: string;
  icon?: string;
  wrapOnSmallSreen?: boolean;
}

export default function SelectDropdown({
  itemList = [],
  itemType = "Fiscal Year",
  activeItem = "2024",
  icon = "",
  wrapOnSmallSreen = true,
}: SelectDropdownProps) {
  const dropdownRef = useRef<any>();
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const [, setSelectedItem] = useState(activeItem);

  const updateSelectedItem = (value: string) => {
    setSelectedItem(value);
    setShowDropdown(false);
  };

  return (
    <div className="select-dropdown">
      <div
        className={`select-display ${
          !wrapOnSmallSreen && "select-display-nowrap"
        }`}
        ref={dropdownRef}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div>
          {icon && (
            <div className="select-icon">
              <div className={`icon ${icon}`} />
            </div>
          )}
          <div className="select-title">{itemType}:</div>
        </div>

        <div className="select-value-row">
          <div className="select-value">{activeItem}</div>

          <div
            className={`select-toggle-icon icon-caret-down ${
              showDropdown ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      <ClickOutsideWrapper
        togglerRef={dropdownRef}
        showDropdown={showDropdown}
        toggleDropdown={setShowDropdown}
      >
        <div className="base-dropdown select-dropdown-container">
          <div className="dropdown-wrapper">
            {itemList.map((item, index) => (
              <div
                key={index}
                className={`app-dropdown-item capitalize ${
                  item.active ? "dropdown-active" : ""
                }`}
                onClick={() => updateSelectedItem(item.value)}
              >
                <div className="text">{item.slug}</div>

                {item.active && (
                  <div className="icon-wrap">
                    <div className="icon icon-checkmark"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </ClickOutsideWrapper>
    </div>
  );
}
