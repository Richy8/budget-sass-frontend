"use client";

import React, { useState } from "react";
import { IInputType } from "@/app/_types/form-type";
import { TextInputField, SelectInputField } from "@/app/_components";
import Image, { StaticImageData } from "next/image";
import { countries } from "@/app/_utils";
import { ManualEntry, UploadEntry, GoogleSyncEntry } from "@/app/_assets";
import "./BudgetInfoFormGroup.scss";

type ISelectData = {
  name: string;
  value: string;
};

type IEntryType = {
  title: string;
  imgIcon: StaticImageData | string;
  isSelected: boolean;
};

const BudgetInfoFormGroup = () => {
  const [countryData] = useState<ISelectData[]>(
    countries.map((country) => ({
      name: country.country,
      value: country.country.toLowerCase(),
    }))
  );

  const [entryList, setEntryList] = useState<IEntryType[]>([
    {
      title: "Manual data entry",
      imgIcon: ManualEntry,
      isSelected: false,
    },
    {
      title: "Data upload entry",
      imgIcon: UploadEntry,
      isSelected: false,
    },
    {
      title: "Google sync entry",
      imgIcon: GoogleSyncEntry,
      isSelected: false,
    },
  ]);

  const selectEntryType = (itemIndex: number) => {
    const updatedEntryList = entryList.map((entry, index) => ({
      ...entry,
      isSelected: index === itemIndex,
    }));
    setEntryList(updatedEntryList);
  };

  const updateBudgetPayload = (value: string, field: string) => {
    // setLoginPayload({ ...loginPayload, [field]: value });
    console.log(value, field);
  };

  return (
    <div>
      <form action="">
        {/* BUDGET TITLE INPUT */}
        <TextInputField
          labelId="budgeTitle"
          labelTitle="Budget title"
          inputType={IInputType.Text}
          inputPlaceholder="Enter the title of your budget"
          inputBaseColor="bg-[#fafafa]"
          isRequired={true}
          onInputChange={(value) => updateBudgetPayload(value, "budgetTitle")}
          errorHandler={{ validator: "validateRequired" }}
        />

        {/* BUDGET DESCRIPTION INPUT */}
        <TextInputField
          labelId="budgetDescription"
          labelTitle="Describe the content of your budget data"
          inputType={IInputType.Text}
          inputPlaceholder="Enter a summary of your budget"
          inputBaseColor="bg-[#fafafa]"
          isRequired={true}
          isTextArea
          onInputChange={(value) =>
            updateBudgetPayload(value, "budgetDescription")
          }
          errorHandler={{ validator: "validateRequired" }}
        />

        {/* BUDGET SOURCE */}
        <TextInputField
          labelId="budgetSource"
          labelTitle="What's the source of your budget data"
          inputType={IInputType.Text}
          inputPlaceholder="Provide data source URL"
          inputBaseColor="bg-[#fafafa]"
          isRequired={true}
          onInputChange={(value) => updateBudgetPayload(value, "budgetSource")}
          errorHandler={{ validator: "validateRequired" }}
        />

        {/* GEOGRAPHICAL DATA */}
        <div className="data-group-block">
          <div className="data-group-title">Select geographical data</div>

          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="col-span-1">
              <SelectInputField
                labelId="country"
                labelTitle="Country"
                isRequired={true}
                inputPlaceholder="Select country"
                hasBottomPadding={false}
                selectData={countryData}
                onSelectChange={(value) =>
                  updateBudgetPayload(value, "country")
                }
              />
            </div>

            <div className="col-span-1">
              <SelectInputField
                labelId="state"
                labelTitle="State"
                isRequired={true}
                inputPlaceholder="Select state"
                hasBottomPadding={false}
                selectData={countryData}
                onSelectChange={(value) => updateBudgetPayload(value, "state")}
              />
            </div>
          </div>
        </div>

        {/* DATA ENTRY TYPE */}
        <div className="data-group-block">
          <div className="data-group-title">Select a data entry type</div>

          <div className="data-entry-selections mt-2">
            {entryList.map((entry, index) => (
              <div
                key={index}
                onClick={() => selectEntryType(index)}
                className={`data-selection-item ${
                  entry.isSelected && "is-selected"
                }`}
              >
                <div className="flex justify-start items-center gap-x-2.5">
                  <div className="selection-icon">
                    <Image
                      src={entry.imgIcon}
                      alt={entry.title}
                      width={20}
                      height={20}
                    ></Image>
                  </div>

                  <div className="selection-text">{entry.title}</div>
                </div>

                <div className="selected-mark">
                  <div className="icon icon-checkmark"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ACTION BUTTON */}
        <button className="btn btn-lg btn-primary w-full -mt-2">
          Continue to data source
        </button>
      </form>
    </div>
  );
};

export default BudgetInfoFormGroup;
