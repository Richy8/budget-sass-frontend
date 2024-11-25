"use client";

import React, { useState } from "react";
import { ISelectInputField } from "@/app/_types/form-type";

const SelectInputField = ({
  labelId,
  labelTitle,
  inputPlaceholder = "",
  isRequired = false,
  isDisabled = false,
  hasBottomPadding = true,
  selectData = [],
  onSelectChange,
}: ISelectInputField) => {
  const [formValue, setFormValue] = useState<string>("");

  const handleFormInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    setFormValue(value);

    if (onSelectChange) onSelectChange(value);
  };

  return (
    <div className={`form-block ${hasBottomPadding ? "mb-8" : "mb-0"}`}>
      {/* LABEL TEXT */}
      {labelTitle && (
        <label htmlFor={labelId} className="form-label">
          {labelTitle}
        </label>
      )}

      <div className="form-block-input relative">
        <select
          id={labelId}
          className={`form-control inputBaseColor`}
          value={formValue}
          required={isRequired}
          disabled={isDisabled}
          onChange={handleFormInput}
        >
          <option value="" disabled hidden>
            {inputPlaceholder}
          </option>

          {selectData.map((item, index) => (
            <option value={item.value} key={index}>
              {item.name}
            </option>
          ))}
        </select>

        <div className="absolute top-[38%] right-4 z-10 text-neutral-600 font-medium text-lg icon icon-caret-down"></div>
      </div>
    </div>
  );
};

export default SelectInputField;