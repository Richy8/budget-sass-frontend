"use client";

import React, { useEffect, useState } from "react";
import { ModalCover, TextInputField } from "@/app/_components";
import { IInputType } from "@/app/_types/form-type";
import { useToast } from "@/app/_context/ToastContext";
import { useBtnClick } from "@/app/_hooks";
import useStore from "@/app/_app-store";
import {
  BudgetDataSourceType,
  YearCategoryType,
  CategoryDataListType,
} from "@/app/_types/store-type";
import "./EditCategoryDataDialog.scss";

type modalType = {
  showModal: boolean;
  toggleModal: () => void;
  budgetDataItem: BudgetDataSourceType;
};

const EditCategoryDataDialog = ({
  showModal,
  toggleModal,
  budgetDataItem,
}: modalType) => {
  const { showToast } = useToast();

  const {
    getBudgetCategory,
    getBudgetDataSource,
    getBudgetCategoryDataList,
    updateBudgetCategoryDataList,
    updateBudgetDataSource,
  } = useStore();

  const [, setProcessing] = useState(false);
  const { buttonRef, updateButtonState } = useBtnClick("Edit data");

  const [categoryPayload, setCategoryPayload] = useState<{
    title: string;
    amountData: { yearId: number; year: string; amount: number }[];
  }>({
    title: "",
    amountData: [],
  });

  useEffect(() => {
    if (showModal && budgetDataItem) {
      setCategoryPayload({
        title: budgetDataItem.title || "",
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        amountData: getBudgetCategory().yearList.map(
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          (year: YearCategoryType) => ({
            yearId: year.yearId,
            year: year.year,
            amount:
              budgetDataItem.amountData.find(
                (data) => data.yearId === year.yearId
              )?.amount ?? 0,
          })
        ),
      });
    }
  }, [showModal, budgetDataItem]);

  /**
   * Updates the category data payload
   * @param {string | number} value New value to update
   * @param {string} field Field to update
   * @param {boolean} isYearData If true, updates the year data object
   */
  const updateCategoryPayload = (
    value: string | number,
    field: number | string,
    isYearData = false
  ) => {
    setCategoryPayload((prev) => {
      if (isYearData) {
        return {
          ...prev,
          amountData: prev.amountData.map((year) =>
            year.yearId === field ? { ...year, amount: value as number } : year
          ),
        };
      }

      return { ...prev, [field]: value };
    });
  };

  const isFormComplete = (): boolean => {
    return categoryPayload.title ? true : false;
  };

  const updateButtonClicks = (status: boolean): void => {
    setProcessing(status);
    updateButtonState(status);
  };

  const updateCategoryDataList = (): CategoryDataListType[] => {
    return getBudgetCategoryDataList().map((category: CategoryDataListType) =>
      category.categoryDataId === budgetDataItem.categoryId
        ? {
            ...category,
            categoryDataTitle: categoryPayload.title,
          }
        : category
    );
  };

  const updateDataSource = () => {
    const parentCategoryAddress =
      budgetDataItem.parentCategoryAddress.split("-");

    const budgetDataSource = [...getBudgetDataSource()];
    let currentLevel = budgetDataSource;

    for (let i = 0; i < parentCategoryAddress.length - 1; i++) {
      const parentCategory = currentLevel.find(
        (category: BudgetDataSourceType) =>
          category.categoryId === parentCategoryAddress[i]
      );

      if (!parentCategory) return;
      currentLevel = parentCategory.children;
    }

    // Find the category to update
    const categoryToUpdate = currentLevel.find(
      (category: BudgetDataSourceType) =>
        category.categoryId === budgetDataItem.categoryId
    );

    if (categoryToUpdate) {
      categoryToUpdate.title = categoryPayload.title;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      categoryToUpdate.amountData = categoryPayload.amountData;
    }

    return budgetDataSource;
  };

  const editCategoryData = () => {
    updateButtonClicks(true);

    if (isFormComplete()) {
      // ----------------------------------------------------
      updateBudgetCategoryDataList(updateCategoryDataList());
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      updateBudgetDataSource(updateDataSource());
      // ----------------------------------------------------

      showToast("Budget category data updated successfully", "success");
      setTimeout(() => toggleModal(), 500);
    } else {
      showToast("Please fill in category title", "error");
    }
  };

  return (
    <ModalCover showModal={showModal} toggleModal={toggleModal}>
      {/* DIALOG HEADER */}
      <ModalCover.Slot name="header">
        <div className="category-data-header">
          <div className="dialog-title-text">Edit Category Data</div>
        </div>
      </ModalCover.Slot>

      {/* DIALOG BODY */}
      <ModalCover.Slot name="body">
        <div className="category-data-body !pt-8">
          {/* CATEGORY DATA ENTRY */}
          <div className="category-data-entry">
            <TextInputField
              key={budgetDataItem.title}
              labelId="budgeCategoryName"
              labelTitle="Category name"
              inputType={IInputType.Text}
              inputPlaceholder="Enter category name of your budget"
              inputValue={budgetDataItem.title}
              isRequired={true}
              onInputChange={(value) => updateCategoryPayload(value, "title")}
              errorHandler={{ validator: "validateRequired" }}
            />

            {/* CATEGORY YEAR DATA */}
            <div className="category-year-data">
              {categoryPayload.amountData.map((yearData: any) => (
                <TextInputField
                  key={yearData.yearId}
                  labelId={`fiscalYear${yearData.year}`}
                  labelTitle={`Year ${yearData.year}`}
                  inputType={IInputType.Number}
                  inputPlaceholder="Enter budget amount"
                  inputValue={yearData.amount || ""}
                  hasBottomPadding={false}
                  isRequired={true}
                  onInputChange={(value) =>
                    updateCategoryPayload(value, yearData.yearId, true)
                  }
                  errorHandler={{ validator: "validateRequired" }}
                />
              ))}
            </div>
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
            onClick={editCategoryData}
          >
            Edit Data
          </button>
        </div>
      </ModalCover.Slot>
    </ModalCover>
  );
};

export default EditCategoryDataDialog;
