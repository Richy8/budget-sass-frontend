import React from "react";
import Image from "next/image";
import { UploadIcon } from "@/app/_assets";
// import { BudgetSampleCard, BudgetUploadDisplay } from "@/app/_components";
import { BudgetSampleCard } from "@/app/_components";
import "./BudgetUploadSource.scss";

const BudgetUploadSource = () => {
  return (
    <div className="budget-upload-source">
      {/* UPLOAD AREA */}
      <div className="upload-area">
        {/* <BudgetUploadDisplay /> */}

        <div className="upload-area--empty">
          <Image
            src={UploadIcon}
            alt="Upload Icon"
            width={100}
            height={100}
            className="file-icon"
          />

          <div className="content-area">
            <div className="title-text">Choose a file to upload</div>
            <div className="subtitle-text">
              Upload your budget data in Excel format.
            </div>

            <button className="upload-btn">Browse File</button>
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

export default BudgetUploadSource;
