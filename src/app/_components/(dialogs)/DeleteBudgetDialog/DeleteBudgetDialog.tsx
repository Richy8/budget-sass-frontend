"use client";

import React, { useState } from "react";
import { ModalCover } from "@/app/_components";
import { useToast } from "@/app/_context/ToastContext";
import { useBtnClick } from "@/app/_hooks";
// import useStore from "@/app/_app-store";
import "./DeleteBudgetDialog.scss";

type modalType = {
  showModal: boolean;
  toggleModal: () => void;
};

const DeleteBudgetDialog = ({ showModal, toggleModal }: modalType) => {
  const { showToast } = useToast();

  const [, setProcessing] = useState(false);
  const { buttonRef, updateButtonState } = useBtnClick("Delete Budget");

  const updateButtonClicks = (status: boolean): void => {
    setProcessing(status);
    updateButtonState(status);
  };

  const removeBudgetData = () => {
    updateButtonClicks(true);

    // ----------------------------------------
    // Delete logic here.....
    // ----------------------------------------

    showToast("Budget deleted successfully", "success");
    setTimeout(() => toggleModal(), 500);
  };

  return (
    <ModalCover showModal={showModal} toggleModal={toggleModal}>
      {/* DIALOG HEADER */}
      <ModalCover.Slot name="header">
        <div className="budget-data-header">
          <div className="dialog-title-text">Delete Budget</div>
        </div>
      </ModalCover.Slot>

      {/* DIALOG BODY */}
      <ModalCover.Slot name="body">
        <div className="budget-data-body">
          {/* CATEGORY DATA ENTRY */}
          <div className="budget-data-entry">
            <div className="mb-4">
              Deleting this budget will remove all its associated data. This
              cannot be undone.
            </div>

            <div>Are you sure you want to delete this budget?</div>
          </div>
        </div>
      </ModalCover.Slot>

      {/* DIALOG FOOTER */}
      <ModalCover.Slot name="footer">
        <div className="budget-data-footer">
          <button className="btn btn-md btn-secondary" onClick={toggleModal}>
            Cancel
          </button>

          <button
            ref={buttonRef}
            className="btn btn-md btn-primary delete-btn"
            onClick={removeBudgetData}
          >
            Delete Budget
          </button>
        </div>
      </ModalCover.Slot>
    </ModalCover>
  );
};

export default DeleteBudgetDialog;
