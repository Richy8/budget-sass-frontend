"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useToggle } from "@/app/_hooks";
import { USFlag } from "@/app/_assets";
import {
  ClickOutsideWrapper,
  DeleteBudgetDialog,
  PublishBudgetDialog,
  ManageBudgetInfoDialog,
} from "@/app/_components";
import "./BudgetCard.scss";

const BudgetCard = () => {
  const dropdownRef = useRef<any>();
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const [showDeleteModal, setShowDeleteModal] = useToggle();
  const [showPublishModal, setShowPublishModal] = useToggle();
  const [showManageBudgetInfoModal, setShowManageBudgetInfoModal] = useToggle();

  return (
    <>
      <div className="budget-card">
        {/* TOP ROW */}
        <div className="top-row">
          <div className="date-item">
            <div className="icon icon-calendar"></div>
            <div className="date-text">23rd July, 2024</div>
          </div>

          <div className="options-item">
            <div
              className="icon icon-ellipsis-h"
              ref={dropdownRef}
              onClick={() => setShowDropdown(!showDropdown)}
            ></div>

            <ClickOutsideWrapper
              togglerRef={dropdownRef}
              showDropdown={showDropdown}
              toggleDropdown={setShowDropdown}
            >
              <div className="base-dropdown card-options">
                <div className="dropdown-wrapper menu-list">
                  <div
                    className="menu-list-item"
                    onClick={setShowManageBudgetInfoModal}
                  >
                    <div className="icon icon-pen-edit"></div>
                    <div className="text">Edit Budget Info</div>
                  </div>

                  <div className="menu-list-item">
                    <div className="icon icon-layer"></div>
                    <div className="text">Manage Data</div>
                  </div>

                  {/* <div className="menu-list-item" onClick={setShowPublishModal}>
                    <div className="icon icon-send"></div>
                    <div className="text">Publish Budget</div>
                  </div> */}

                  <div className="menu-list-item" onClick={setShowDeleteModal}>
                    <div className="icon icon-trash !text-red-500"></div>
                    <div className="text !text-red-500">Delete Budget</div>
                  </div>
                </div>
              </div>
            </ClickOutsideWrapper>
          </div>
        </div>

        {/* BODY ROW */}
        <div className="body-row">
          <div className="title-row">
            <div className="title-text">
              State of Chicago, United States of America{" "}
              <div className="verified-tag-wrapper">
                <div className="verified-tag">
                  <div className="icon icon-checkmark"></div>
                </div>
              </div>
            </div>

            <div className="country-identifier">
              <Image src={USFlag} alt="US Flag" width={16} height={16} />
            </div>
          </div>

          <div className="body-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            itaque est nisi repellendus labore ad explicabo doloribus
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="bottom-row">
          <Link
            href={"/budget/1"}
            className="btn btn-md btn-primary hover:text-white"
          >
            Visualize Budget
          </Link>

          <button
            className="btn btn-md btn-secondary"
            onClick={setShowPublishModal}
          >
            <div className="icon icon-export"></div> Share
          </button>
        </div>
      </div>

      {/* MODAL DIALOGS */}
      <DeleteBudgetDialog
        showModal={showDeleteModal}
        toggleModal={setShowDeleteModal}
      />

      <PublishBudgetDialog
        showModal={showPublishModal}
        toggleModal={setShowPublishModal}
      />

      <ManageBudgetInfoDialog
        showModal={showManageBudgetInfoModal}
        toggleModal={setShowManageBudgetInfoModal}
      />
    </>
  );
};

export default BudgetCard;
