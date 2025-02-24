"use client";

import React, { useEffect, useState } from "react";
import { commonUtil } from "@/app/_utils";
import {
  ModalCover,
  TextInputField,
  SelectInputField,
} from "@/app/_components";

import { IInputType } from "@/app/_types/form-type";
import { useToast } from "@/app/_context/ToastContext";
import { useBtnClick } from "@/app/_hooks";
import useStore from "@/app/_app-store";
import {
  BudgetDataSourceType,
  YearCategoryType,
  CategoryDataListType,
} from "@/app/_types/store-type";
import "./AddCategoryDataDialog.scss";

type modalType = {
  showModal: boolean;
  toggleModal: () => void;
  selectedCategoryGroupId: string;
};

const AddCategoryDataDialog = ({
  showModal,
  toggleModal,
  selectedCategoryGroupId,
}: modalType) => {
  const { generateUniqueId } = commonUtil;
  const { showToast } = useToast();

  const {
    budgetCategoryLevels,
    getBudgetCategory,
    getBudgetDataSource,
    getBudgetCategoryDataList,
    updateBudgetCategoryDataList,
    updateBudgetDataSource,
  } = useStore();

  const [, setProcessing] = useState(false);
  const { buttonRef, updateButtonState } = useBtnClick("Confirm Data");

  const [categoryData, setCategoryData] = useState<BudgetDataSourceType>({
    categoryId: "",
    title: "",
    categoryGroupId: "",
    amountData: [],
    parentCategoryAddress: "",
    children: [],
  });

  // UPDATE SELECTED CATEGORY GROUP ID AND AMOUNT DATA
  useEffect(() => {
    if (showModal) {
      setCategoryData({
        categoryId: generateUniqueId(8),
        categoryGroupId: selectedCategoryGroupId,
        title: "",
        parentCategoryAddress: "",
        children: [],
        amountData: getBudgetCategory().yearList.map(
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          (year: YearCategoryType) => ({
            yearId: year.yearId,
            year: year.year,
            amount: 0,
          })
        ),
      });
    }
  }, [showModal]);

  const clearCategoryData = (closeModal?: boolean) => {
    setCategoryData({
      categoryId: generateUniqueId(8),
      title: "",
      categoryGroupId: "",
      parentCategoryAddress: "",
      children: [],
      amountData: getBudgetCategory().yearList.map(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        (year: YearCategoryType) => ({
          yearId: year.yearId,
          year: year.year,
          amount: 0,
        })
      ),
    });

    if (closeModal) {
      toggleModal();
    }
  };

  /**
   * Updates the category data payload
   * @param {string | number} value New value to update
   * @param {string} field Field to update
   * @param {boolean} isYearData If true, updates the year data object
   */
  const updateCategoryPayload = (
    value: string | number,
    field: string,
    isYearData = false
  ) => {
    setCategoryData((prev) =>
      isYearData
        ? {
            ...prev,
            amountData: prev.amountData.map((year) =>
              year.yearId === field
                ? { ...year, amount: value as number }
                : year
            ),
          }
        : { ...prev, [field]: value }
    );
  };

  /**
   * Returns a list of budget category parent list
   * @returns { { name: string; value: string }[] } List of parent categories
   */
  const loadBudgetCategoryParentList = (): Record<string, string>[] => {
    const parentCategories = getBudgetCategoryDataList()
      .filter(
        (category: CategoryDataListType) =>
          category.categoryDataAddress.split("-").length <= 3 &&
          category.categoryGroupId === selectedCategoryGroupId
      )
      .map((categoryGroup: CategoryDataListType) => ({
        name:
          categoryGroup.categoryDataTitle +
          " - " +
          getCategoryType(categoryGroup.categoryDataAddress),
        value: `${categoryGroup.categoryDataAddress}-${categoryData.categoryId}`,
      }));

    return [
      { name: "New parent category", value: categoryData.categoryId },
      ...parentCategories,
    ];
  };

  const getCategoryType = (categoryAddress: string): string => {
    const budgetCategoryAddress = categoryAddress.split("-");
    return budgetCategoryLevels[budgetCategoryAddress.length - 1];
  };

  const isFormComplete = (): boolean => {
    return categoryData.title && categoryData.parentCategoryAddress
      ? true
      : false;
  };

  const updateButtonClicks = (status: boolean): void => {
    setProcessing(status);
    updateButtonState(status);
  };

  // UPDATE CATEGORY LIST DATA FOR CURRENT CATEGORY GROUP
  const updateCategoryDataList = (): CategoryDataListType[] => {
    const newCategoryListItem = {
      categoryGroupId: selectedCategoryGroupId,
      categoryDataId: categoryData.categoryId,
      categoryDataTitle: categoryData.title,
      categoryDataAddress: categoryData.parentCategoryAddress,
    };

    return [...getBudgetCategoryDataList(), newCategoryListItem];
  };

  const prepareBudgetSourceData = () => {
    const parentCategoryAddress = categoryData.parentCategoryAddress.split("-");
    const updatedBudgetDataSource = [...getBudgetDataSource()];

    let currentLevel = updatedBudgetDataSource;

    for (let i = 0; i < parentCategoryAddress.length - 1; i++) {
      const parentCategory = currentLevel.find(
        (category: BudgetDataSourceType) =>
          category.categoryId === parentCategoryAddress[i]
      );

      if (!parentCategory) return;
      currentLevel = parentCategory.children;
    }

    // Add the new category at the correct depth
    currentLevel.push(categoryData);
    return updatedBudgetDataSource;
  };

  //   PROCESS CATEGORY DATA
  const processCategoryData = () => {
    updateButtonClicks(true);

    if (isFormComplete()) {
      // UPDATE CATEGORY LIST DATA FOR CURRENT CATEGORY GROUP
      updateBudgetCategoryDataList(updateCategoryDataList());
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      updateBudgetDataSource(prepareBudgetSourceData());

      // Clear out form field
      clearCategoryData(false);

      showToast("Budget category data added successfully", "success");
      setTimeout(() => toggleModal(), 500);
    } else {
      showToast("Please fill in category title", "error");
    }
  };

  return (
    <ModalCover showModal={showModal} toggleModal={clearCategoryData}>
      {/* DIALOG HEADER */}
      <ModalCover.Slot name="header">
        <div className="category-data-header">
          <div className="dialog-title-text">Add Category Data</div>
        </div>
      </ModalCover.Slot>

      {/* DIALOG BODY */}
      <ModalCover.Slot name="body">
        <div className="category-data-body !pt-8">
          {/* CATEGORY DATA ENTRY */}
          <div className="category-data-entry">
            <TextInputField
              labelId="budgeCategoryName"
              labelTitle="Category name"
              inputType={IInputType.Text}
              inputPlaceholder="Enter category name of your budget"
              inputValue={categoryData.title}
              isRequired={true}
              onInputChange={(value) => updateCategoryPayload(value, "title")}
              errorHandler={{ validator: "validateRequired" }}
            />

            <SelectInputField
              labelId="budgetParentCategory"
              labelTitle="Parent category"
              isRequired={true}
              inputPlaceholder="Select a parent category"
              inputValue={categoryData.parentCategoryAddress}
              selectData={loadBudgetCategoryParentList()}
              onSelectChange={(value) =>
                updateCategoryPayload(value, "parentCategoryAddress")
              }
            />

            {/* CATEGORY YEAR DATA */}
            <div className="category-year-data">
              {categoryData.amountData.map(
                (yearData: YearCategoryType, index: number) => (
                  <TextInputField
                    key={index}
                    labelId={`fiscalYear${yearData.year}`}
                    labelTitle={`Year ${yearData.year}`}
                    inputType={IInputType.Number}
                    inputPlaceholder="Enter budget amount"
                    inputValue={yearData.amount === 0 ? "" : yearData.amount}
                    hasBottomPadding={false}
                    isRequired={true}
                    onInputChange={(value) =>
                      updateCategoryPayload(value, yearData.yearId, true)
                    }
                    errorHandler={{ validator: "validateRequired" }}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </ModalCover.Slot>

      {/* DIALOG FOOTER */}
      <ModalCover.Slot name="footer">
        <div className="category-data-footer">
          <button
            className="btn btn-md btn-secondary"
            onClick={() => clearCategoryData()}
          >
            Cancel
          </button>

          <button
            ref={buttonRef}
            className="btn btn-md btn-primary"
            disabled={!isFormComplete()}
            onClick={processCategoryData}
          >
            Confirm Data
          </button>
        </div>
      </ModalCover.Slot>
    </ModalCover>
  );
};

export default AddCategoryDataDialog;
