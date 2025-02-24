import React from "react";
import Image from "next/image";
import { ExcelFile } from "@/app/_assets";
import { TrashIcon } from "@heroicons/react/24/outline";
import "./BudgetUploadDisplay.scss";

const BudgetUploadDisplay = () => {
  return (
    <div className="upload-area-display">
      <div className="data-row--top">
        <div className="file-content-area">
          <Image src={ExcelFile} alt="Excel File" width={50} height={50} />

          <div>
            <div className="title-text">budget-google-sheet.xlsx</div>
            <div className="subtitle-area">
              <div className="subtitle-text">42 KB of 90 KB</div>
              <div className="separator"></div>
              <div className="status-area">
                <div className="status-area--text">Completed</div>
              </div>
            </div>
          </div>
        </div>

        <div className="delete-area">
          <TrashIcon className="delete-area-icon" />
        </div>
      </div>

      <div className="data-row--bottom">
        <div className="progress-bar">
          <div className="progress-state" style={{ width: "60%" }}></div>
        </div>

        <div className="progress-count">60%</div>
      </div>
    </div>
  );
};

export default BudgetUploadDisplay;
