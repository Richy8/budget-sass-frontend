"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IInputType } from "@/app/_types/form-type";
import { TextInputField, ModalCover } from "@/app/_components";
// import { useToast } from "@/app/_context/ToastContext";
import { useBtnClick } from "@/app/_hooks";
import { Globe } from "@/app/_assets";
// import useStore from "@/app/_app-store";
import "./PublishBudgetDialog.scss";

type modalType = {
  showModal: boolean;
  toggleModal: () => void;
};

const PublishBudgetDialog = ({ showModal, toggleModal }: modalType) => {
  //   const { showToast } = useToast();
  const [isPublish, setIsPublish] = useState(false);

  //   const [, setProcessing] = useState(false);
  //   const { buttonRef, updateButtonState } = useBtnClick("Publish Budget");
  const { buttonRef } = useBtnClick("Publish Budget");

  //   const updateButtonClicks = (status: boolean): void => {
  //     setProcessing(status);
  //     updateButtonState(status);
  //   };

  //   const publishBudgetData = () => {
  //     updateButtonClicks(true);

  //     // ----------------------------------------
  //     // Publish logic here.....
  //     // ----------------------------------------

  //     showToast("Budget published successfully", "success");
  //     setTimeout(() => toggleModal(), 500);
  //   };

  return (
    <ModalCover showModal={showModal} toggleModal={toggleModal}>
      {/* DIALOG HEADER */}
      <ModalCover.Slot name="header">
        <div className="budget-publish-header">
          <div className="dialog-title-text">Share Budget</div>
        </div>
      </ModalCover.Slot>

      {/* DIALOG BODY */}
      <ModalCover.Slot name="body">
        <div className="budget-publish-body">
          {/* PUBLISH BLOCK */}
          <div className="publish-block">
            <div className="publish-block--left">
              <div className="public-globe">
                <Image src={Globe} alt="Globe" width={35} height={35} />
              </div>

              <div>
                <div className="primary-text">Publish Budget</div>
                <div className="secondary-text">
                  Anyone can publicly access your budget
                </div>
              </div>
            </div>

            <div className="publish-block--right">
              <div
                className={`publish-toggler ${
                  isPublish && "publish-toggler-active"
                }`}
                onClick={() => setIsPublish(!isPublish)}
              >
                <div className="toggle-marker"></div>
              </div>
            </div>
          </div>

          {/* BUDGET PUBLIC LINK */}
          <div className="budget-link">
            <div className="link">
              https://budgit.us/budget/chicago-revenue-2024
            </div>

            <div className="icon icon-copy"></div>
          </div>

          <div className="budget-invite">
            <TextInputField
              labelId="shareToIndividual"
              labelTitle="Share to individual"
              inputType={IInputType.Email}
              inputPlaceholder="Enter the email address of the individual"
              inputValue={""}
              isRequired={true}
              onInputChange={() => {}}
              errorHandler={{ validator: "validateRequired" }}
            />

            <button className="budget-action" ref={buttonRef}>
              <div className="icon icon-transfer-top-right"></div>
              <div className="text">Invite</div>
            </button>
          </div>
        </div>
      </ModalCover.Slot>

      {/* DIALOG FOOTER */}
      <ModalCover.Slot name="footer">
        <div className="budget-publish-footer"></div>
      </ModalCover.Slot>
    </ModalCover>
  );
};

export default PublishBudgetDialog;
