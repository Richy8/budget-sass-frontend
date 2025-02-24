"use client";

import React, { useEffect, useState } from "react";
import {
  ModalCover,
  TextInputField,
  SelectInputField,
} from "@/app/_components";
import { countries } from "@/app/_utils";
import { IInputType } from "@/app/_types/form-type";
import { useToast } from "@/app/_context/ToastContext";
import { useBtnClick } from "@/app/_hooks";
import useStore from "@/app/_app-store";
import {} from "@/app/_types/store-type";
import "./ManageBudgetInfoDialog.scss";

type modalType = {
  showModal: boolean;
  toggleModal: () => void;
};

type ISelectData = {
  name: string;
  value: string;
};

const ManageBudgetInfoDialog = ({ showModal, toggleModal }: modalType) => {
  const { showToast } = useToast();

  const {} = useStore();

  const [, setProcessing] = useState(false);
  const { buttonRef, updateButtonState } = useBtnClick("Confirm Data");

  const [budgetInformation, setBudgetInformation] = useState({
    title: "",
    description: "",
    source: "",
    country: "",
  });

  const [countryData] = useState<ISelectData[]>(
    countries.map((country) => ({
      name: country.country,
      value: country.country.toLowerCase(),
    }))
  );

  // UPDATE SELECTED CATEGORY GROUP ID AND AMOUNT DATA
  useEffect(() => {
    if (showModal) {
    }
  }, [showModal]);

  const updateButtonClicks = (status: boolean): void => {
    setProcessing(status);
    updateButtonState(status);
  };

  const updateBudgetPayload = (value: string, field: string) => {
    setBudgetInformation({ ...budgetInformation, [field]: value });
  };

  const isFormComplete = (): boolean => {
    return false;
  };

  //   PROCESS CATEGORY DATA
  const updateBudgetData = () => {
    updateButtonClicks(true);

    if (isFormComplete()) {
      showToast("Budget information updated successfully", "success");
      setTimeout(() => toggleModal(), 500);
    } else {
      showToast("Unable to update budget data", "error");
    }
  };

  return (
    <ModalCover showModal={showModal} toggleModal={toggleModal}>
      {/* DIALOG HEADER */}
      <ModalCover.Slot name="header">
        <div className="category-data-header">
          <div className="dialog-title-text">Manage Budget Information</div>
        </div>
      </ModalCover.Slot>

      {/* DIALOG BODY */}
      <ModalCover.Slot name="body">
        <div className="category-data-body !pt-8">
          {/* CATEGORY DATA ENTRY */}
          <div className="category-data-entry">
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
              onInputChange={(value) =>
                updateBudgetPayload(value, "description")
              }
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
              hasBottomPadding={false}
              onSelectChange={(value) => updateBudgetPayload(value, "country")}
            />
          </div>
        </div>
      </ModalCover.Slot>

      {/* DIALOG FOOTER */}
      <ModalCover.Slot name="footer">
        <div className="category-data-footer">
          <button className="btn btn-md btn-secondary" onClick={toggleModal}>
            Cancel
          </button>

          <button
            ref={buttonRef}
            className="btn btn-md btn-primary"
            disabled={!isFormComplete()}
            onClick={updateBudgetData}
          >
            Confirm
          </button>
        </div>
      </ModalCover.Slot>
    </ModalCover>
  );
};

export default ManageBudgetInfoDialog;
