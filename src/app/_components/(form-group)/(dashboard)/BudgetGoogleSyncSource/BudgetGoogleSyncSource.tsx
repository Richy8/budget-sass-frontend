"use client";

import React from "react";
import Image from "next/image";
import { GoogleLogo } from "@/app/_assets";
import {
  TextInputField,
  SelectInputField,
  BudgetSampleCard,
} from "@/app/_components";
import { IInputType } from "@/app/_types/form-type";
import "./BudgetGoogleSyncSource.scss";

const BudgetGoogleSyncSource = () => {
  return (
    <div className="budget-google-sync-source">
      {/* AUTHENTICATE GOOGLE SHEET */}
      <div className="data-group-block">
        <div className="data-group-title">Create a google sheet connection</div>

        <div className="data-entry-selections !mt-1.5">
          <div className="google-auth-card">
            <Image
              src={GoogleLogo}
              alt="google-icon"
              width={32}
              height={32}
              className="google-icon"
            />

            <div className="google-auth-card-title">
              Connect a Google account
            </div>
          </div>
        </div>
      </div>

      {/* SELECT A GOOGLE SHEET WORKBOOK */}
      <div className="data-group-block">
        <div className="data-group-title">Prepare google workbook entry</div>

        <div className="data-entry-selections w-full">
          <div className="w-full">
            <SelectInputField
              labelId="workbook"
              labelTitle="Select a workbook file"
              isRequired={true}
              inputPlaceholder="Workbook file..."
              inputValue={""}
              selectData={[
                { name: "Budget Sheet", value: "Budget Sheet" },
                { name: "Expense Sheet", value: "Expense Sheet" },
                { name: "Revenue Sheet", value: "Revenue Sheet" },
              ]}
              onSelectChange={() => {}}
            />
          </div>

          {/* PASTE GOOGLE SHEET LINK */}
          <div className="w-full -mt-1 mb-1.5">
            <TextInputField
              labelId="workbookURL"
              labelTitle="Or Paste URL (shared or public files)"
              inputType={IInputType.Text}
              inputPlaceholder="Google sheet URL"
              inputValue={""}
              isRequired={true}
              hasBottomPadding={false}
              onInputChange={() => {}}
              errorHandler={{ validator: "validateRequired" }}
            />
          </div>
        </div>
      </div>

      {/* FILE SAMPLE AREA */}
      <BudgetSampleCard />

      {/* ACTION BUTTON */}
      <button type="submit" className="btn btn-lg btn-primary w-full -mt-2">
        Visualize Budget
      </button>
    </div>
  );
};

export default BudgetGoogleSyncSource;
