"use client";

import React, { useState } from "react";
import { ModalCover } from "@/app/_components";
import { useToast } from "@/app/_context/ToastContext";
import { useBtnClick } from "@/app/_hooks";
import useStore from "@/app/_app-store";
import {
  BudgetDataSourceType,
  CategoryDataListType,
} from "@/app/_types/store-type";
import "./DeleteCategoryDataDialog.scss";

type modalType = {
  showModal: boolean;
  budgetDataItem: BudgetDataSourceType;
  toggleModal: () => void;
};

const DeleteCategoryDataDialog = ({
  showModal,
  toggleModal,
  budgetDataItem,
}: modalType) => {
  const { showToast } = useToast();

  const {
    getBudgetDataSource,
    getBudgetCategoryDataList,
    updateBudgetCategoryDataList,
    updateBudgetDataSource,
  } = useStore();

  const [, setProcessing] = useState(false);
  const { buttonRef, updateButtonState } = useBtnClick("Delete Data");

  const updateButtonClicks = (status: boolean): void => {
    setProcessing(status);
    updateButtonState(status);
  };

  const removeItemFromCategoryList = () => {
    return getBudgetCategoryDataList().filter(
      (category: CategoryDataListType) => {
        const categoryDataAddress = category.categoryDataAddress
          .split("-")
          .map(String); // Ensure all values are strings

        return !categoryDataAddress.includes(String(budgetDataItem.categoryId)); // Convert categoryId to string for comparison
      }
    );
  };

  const removeItemFromBudgetSource = () => {
    const parentCategoryAddress =
      budgetDataItem.parentCategoryAddress.split("-");

    // Clone the budget data source to avoid mutating the original state directly
    const updatedBudgetDataSource = [...getBudgetDataSource()];

    let currentLevel = updatedBudgetDataSource;

    // Traverse down to the parent category level
    for (let i = 0; i < parentCategoryAddress.length - 1; i++) {
      const parentCategory = currentLevel.find(
        (category: BudgetDataSourceType) =>
          category.categoryId === parentCategoryAddress[i]
      );

      if (!parentCategory) return updatedBudgetDataSource; // Exit if parent not found
      currentLevel = parentCategory.children;
    }

    // Filter out the item that matches budgetDataItem.categoryId
    const filteredCategories = currentLevel.filter(
      (category: BudgetDataSourceType) =>
        category.categoryId !== budgetDataItem.categoryId
    );

    // Assign the filtered categories back
    if (filteredCategories.length !== currentLevel.length) {
      currentLevel.length = 0; // Clear the array
      currentLevel.push(...filteredCategories); // Push the filtered elements
    }

    return updatedBudgetDataSource;
  };

  const removeCategoryData = () => {
    updateButtonClicks(true);

    // ----------------------------------------
    updateBudgetCategoryDataList(removeItemFromCategoryList());
    updateBudgetDataSource(removeItemFromBudgetSource());
    // ----------------------------------------

    showToast("Budget category data deleted successfully", "success");
    setTimeout(() => toggleModal(), 500);
  };

  return (
    <ModalCover showModal={showModal} toggleModal={toggleModal}>
      {/* DIALOG HEADER */}
      <ModalCover.Slot name="header">
        <div className="category-data-header">
          <div className="dialog-title-text">Delete Category Data</div>
        </div>
      </ModalCover.Slot>

      {/* DIALOG BODY */}
      <ModalCover.Slot name="body">
        <div className="category-data-body">
          {/* CATEGORY DATA ENTRY */}
          <div className="category-data-entry">
            <div className="mb-4">
              Deleting{" "}
              <span className="font-semibold">{budgetDataItem.title}</span>{" "}
              category will remove its sub-categories and all associated data.
              This cannot be undone.
            </div>

            <div>Are you sure you want to delete this category?</div>
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
            className="btn btn-md btn-primary delete-btn"
            onClick={removeCategoryData}
          >
            Delete Category
          </button>
        </div>
      </ModalCover.Slot>
    </ModalCover>
  );
};

export default DeleteCategoryDataDialog;
