"use client";

import React, { useRef, useState, useEffect } from "react";
import { ClickOutsideWrapper } from "@/app/_components";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { YearListType } from "@/app/_types/store-type";
import "./YearGridSelectField.scss";

interface SelectDropdownProps {
  optionList: YearListType[];
  selectedOptions: YearListType[];
  onOptionSelected: (selectedOptions: YearListType[]) => void;
}

const GridSelectInputField = ({
  optionList: initialOptions,
  selectedOptions: initialSelectedOptions,
  onOptionSelected,
}: SelectDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [optionList, setOptionList] = useState<YearListType[]>(initialOptions);
  const [selectedOptions, setSelectedOptions] = useState<YearListType[]>([]);

  // Sync internal state with the selectedOptions prop on mount or prop change
  useEffect(() => {
    setSelectedOptions(initialSelectedOptions);

    // Update optionList to mark pre-selected options as selected
    const updatedOptions = initialOptions.map((option) => ({
      ...option,
      isSelected: initialSelectedOptions.some(
        (selected) => selected.yearId === option.yearId
      ),
    }));
    setOptionList(updatedOptions);
  }, [initialOptions, initialSelectedOptions]);

  const toggleDropdown = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest(".ignore")) return;
    setShowDropdown((prev) => !prev);
  };

  const toggleOptionItem = (id: string) => {
    const updatedList = optionList.map((option) =>
      option.yearId === id
        ? { ...option, isSelected: !option.isSelected }
        : option
    );
    setOptionList(updatedList);

    const selectedItem = updatedList.find((option) => option.yearId === id)!;

    setSelectedOptions((prev) => {
      const isSelected = prev.some((item) => item.yearId === id);

      const updatedSelected = isSelected
        ? prev.filter((item) => item.yearId !== id)
        : [...prev, selectedItem];

      onOptionSelected(updatedSelected);
      return updatedSelected;
    });
  };

  return (
    <div className="multiselect-field">
      {/* SELECT AREA */}
      <div
        className={`form-control select-input-area ${
          selectedOptions.length ? "!py-[12px]" : "!py-[15px]"
        }`}
        ref={dropdownRef}
        onClick={toggleDropdown}
      >
        <div className="content-area">
          {selectedOptions.length === 0 ? (
            <div className="placeholder-text">Select budget year</div>
          ) : (
            <div className="selection-row">
              {selectedOptions.map((item) => (
                <div
                  className="selection-item ignore"
                  onClick={() => toggleOptionItem(item.yearId)}
                  key={item.yearId}
                >
                  <div className="text">{item.year}</div>
                  <XMarkIcon className="close-icon" />
                </div>
              ))}
            </div>
          )}
        </div>
        <ChevronDownIcon
          className={`dropdown-trigger ${showDropdown ? "rotate-180" : ""}`}
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
            <div className="options-data-row">
              {optionList?.map((item) => (
                <div
                  onClick={() => toggleOptionItem(item.yearId)}
                  key={item.yearId}
                  className={`data-item ${
                    item.isSelected ? "data-item--active" : ""
                  }`}
                >
                  {item.year}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ClickOutsideWrapper>
    </div>
  );
};

export default GridSelectInputField;
