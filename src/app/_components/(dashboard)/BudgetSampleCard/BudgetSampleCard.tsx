import React from "react";
import Image from "next/image";
import { GoogleSheetIcon } from "@/app/_assets";
import "./BudgetSampleCard.scss";

const BudgetSampleCard = () => {
  return (
    <div className="data-group-block">
      <div className="data-group-title">Budget sample file</div>

      <div className="data-entry-selections file-sample-area">
        <div className="sample-area--left">
          <Image
            src={GoogleSheetIcon}
            alt="google-sheet-icon"
            width={100}
            height={100}
          />

          <div>
            <div className="title-text">Budget Sheet</div>

            <div className="subtitle-text">
              View the Google Sheet sample file.
            </div>
          </div>
        </div>

        <div className="sample-area--right">
          <button className="btn btn-sm btn-primary-outline">View File</button>
        </div>
      </div>
    </div>
  );
};

export default BudgetSampleCard;
