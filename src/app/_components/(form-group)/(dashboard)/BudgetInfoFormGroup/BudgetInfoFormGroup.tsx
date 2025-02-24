"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IInputType } from "@/app/_types/form-type";
import { TextInputField, SelectInputField } from "@/app/_components";
import Image, { StaticImageData } from "next/image";
import { useToast } from "@/app/_context/ToastContext";
import { countries } from "@/app/_utils";
import useStore from "@/app/_app-store";
import { useBtnClick } from "@/app/_hooks";
import { BudgetInformationType } from "@/app/_types/store-type";
import { ManualEntry, UploadEntry, GoogleSyncEntry } from "@/app/_assets";
import "./BudgetInfoFormGroup.scss";

type ISelectData = {
  name: string;
  value: string;
};

type IEntryType = {
  title: string;
  slug: string;
  imgIcon: StaticImageData | string;
  isSelected: boolean;
};

const BudgetInfoFormGroup = () => {
  const router = useRouter();
  const { showToast } = useToast();

  const [, setProcessing] = useState(false);
  const { buttonRef, updateButtonState } = useBtnClick("Continue");

  const { getBudgetInformation, updateBudgetInformation, updateBudgetSidebar } =
    useStore();

  const [budgetInformation, setBudgetInformation] =
    useState<BudgetInformationType>({
      title: getBudgetInformation().title ?? "",
      description: getBudgetInformation().description ?? "",
      source: getBudgetInformation().source ?? "",
      country: getBudgetInformation().country ?? "",
      entryType: getBudgetInformation().entryType ?? "",
    });

  const [countryData] = useState<ISelectData[]>(
    countries.map((country) => ({
      name: country.country,
      value: country.country.toLowerCase(),
    }))
  );

  const [entryList, setEntryList] = useState<IEntryType[]>([
    {
      title: "Manual budget data entry",
      slug: "manual-entry",
      imgIcon: ManualEntry,
      isSelected: budgetInformation.entryType === "manual-entry",
    },
    {
      title: "Budget data upload",
      slug: "upload-entry",
      imgIcon: UploadEntry,
      isSelected: budgetInformation.entryType === "upload-entry",
    },
    {
      title: "Google sheet sync",
      slug: "google-entry",
      imgIcon: GoogleSyncEntry,
      isSelected: budgetInformation.entryType === "google-entry",
    },
  ]);

  const selectEntryType = (itemIndex: number) => {
    const updatedEntryList = entryList.map((entry, index) => ({
      ...entry,
      isSelected: index === itemIndex,
    }));

    setEntryList(updatedEntryList);

    const selectedEntry = updatedEntryList.find((entry) => entry.isSelected);
    if (selectedEntry) updateBudgetPayload(selectedEntry.slug, "entryType");
  };

  const updateBudgetPayload = (value: string, field: string) => {
    setBudgetInformation({ ...budgetInformation, [field]: value });
  };

  const isFormComplete = () => {
    return Object.values(budgetInformation).every(
      (field) => field !== "" && field !== null && field !== undefined
    );
  };

  const updateButtonClicks = (status: boolean) => {
    setProcessing(status);
    updateButtonState(status);
  };

  const submitBudgetInformation = (e: React.FormEvent) => {
    e.preventDefault();
    updateButtonClicks(true);

    if (isFormComplete()) {
      updateBudgetInformation(budgetInformation);

      // Redirect to budget category page
      setTimeout(() => {
        updateBudgetSidebar("/budget-entry/information", "completed", true);
        router.push("/budget-entry/category");
      }, 400);
    } else {
      showToast("Please fill in all budget information", "error");
    }
  };

  return (
    <div>
      <form onSubmit={submitBudgetInformation}>
        {/* BUDGET TITLE INPUT */}
        <TextInputField
          labelId="budgeTitle"
          labelTitle="Budget title"
          inputType={IInputType.Text}
          inputPlaceholder="Enter the title of your budget"
          inputValue={budgetInformation.title}
          isRequired={true}
          onInputChange={(value) => updateBudgetPayload(value, "title")}
          errorHandler={{ validator: "validateRequired" }}
        />

        {/* BUDGET DESCRIPTION INPUT */}
        <TextInputField
          labelId="budgetDescription"
          labelTitle="Describe the content of your budget data"
          inputType={IInputType.Text}
          inputPlaceholder="Enter a summary of your budget"
          inputValue={budgetInformation.description}
          isRequired={true}
          isTextArea
          onInputChange={(value) => updateBudgetPayload(value, "description")}
          errorHandler={{ validator: "validateRequired" }}
        />

        {/* BUDGET SOURCE */}
        <TextInputField
          labelId="budgetSource"
          labelTitle="What's the source of your budget data?"
          inputType={IInputType.Text}
          inputPlaceholder="Provide data source URL"
          inputValue={budgetInformation.source}
          isRequired={true}
          onInputChange={(value) => updateBudgetPayload(value, "source")}
          errorHandler={{ validator: "validateRequired" }}
        />

        {/* GEOGRAPHICAL DATA */}
        <SelectInputField
          labelId="country"
          labelTitle="Select budget country"
          isRequired={true}
          inputPlaceholder="Select country"
          inputValue={budgetInformation.country}
          selectData={countryData}
          onSelectChange={(value) => updateBudgetPayload(value, "country")}
        />

        {/* DATA ENTRY TYPE */}
        <div className="data-group-block">
          <div className="data-group-title">
            How are you providing your budget?
          </div>

          <div className="data-entry-selections !mt-0.5">
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
        <button
          ref={buttonRef}
          className="btn btn-lg btn-primary w-full -mt-2"
          type="submit"
          disabled={!isFormComplete()} // Disable button if form is incomplete
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default BudgetInfoFormGroup;
