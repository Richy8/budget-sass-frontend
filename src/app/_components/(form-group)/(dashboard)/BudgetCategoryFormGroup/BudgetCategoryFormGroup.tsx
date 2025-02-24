"use client";

import React, { useState, useEffect } from "react";
import { IInputType } from "@/app/_types/form-type";
import { useToast } from "@/app/_context/ToastContext";
import { TextInputField, YearGridSelectField } from "@/app/_components";
import useStore from "@/app/_app-store";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useBtnClick } from "@/app/_hooks";
import { commonUtil } from "@/app/_utils";
import { CategoryGroupType, YearListType } from "@/app/_types/store-type";
import "./BudgetCategoryFormGroup.scss";

const BudgetCategoryFormGroup = () => {
  const { generateUUID } = commonUtil;

  const router = useRouter();
  const { showToast } = useToast();

  const [, setProcessing] = useState(false);
  const { buttonRef, updateButtonState } = useBtnClick("Continue");

  const { getBudgetCategory, updateBudgetCategory, updateBudgetSidebar } =
    useStore();

  const [categories, setCategories] = useState<CategoryGroupType[]>(
    getBudgetCategory().categoryGroupList?.length
      ? getBudgetCategory().categoryGroupList
      : [{ categoryGroupId: generateUUID(), categoryTitle: "" }]
  );
  const [yearOptions, setYearOptions] = useState<YearListType[]>([]);
  const [selectedYears, setSelectedYears] = useState<YearListType[]>(
    getBudgetCategory().yearList?.length ? getBudgetCategory().yearList : []
  );

  // Populate years for the dropdown
  useEffect(() => {
    const years = Array.from({ length: 30 }, (_, i) => ({
      yearId: String(2030 - i),
      year: String(2030 - i),
      isSelected: false,
    }));

    setYearOptions(years);
  }, []);

  const updateButtonClicks = (status: boolean) => {
    setProcessing(status);
    updateButtonState(status);
  };

  const addCategory = () => {
    // Prevent adding a new category if the previous one is empty
    const lastCategory = categories[categories.length - 1];

    if (!lastCategory.categoryTitle.trim()) {
      showToast("Please fill in the current category title", "error");
      return;
    }

    setCategories((prev) => [
      ...prev,
      { categoryGroupId: generateUUID(), categoryTitle: "" },
    ]);
  };

  const updateCategoryTitle = (index: number, title: string) => {
    setCategories((prev) =>
      prev.map((category, i) =>
        i === index ? { ...category, categoryTitle: title } : category
      )
    );
  };

  const removeCategory = (index: number) => {
    setCategories((prev) => prev.filter((_, i) => i !== index));
  };

  const handleYearSelection = (selected: YearListType[]) => {
    setSelectedYears(selected);
  };

  const submitFormPayload = (e: React.FormEvent) => {
    e.preventDefault();
    updateButtonClicks(true);

    // Validate categories
    if (categories.some((category) => !category.categoryTitle.trim())) {
      showToast("Please fill in all category titles", "error");
      return;
    }

    updateBudgetCategory({
      categoryGroupList: categories,
      yearList: selectedYears,
    });

    setTimeout(() => {
      updateBudgetSidebar("/budget-entry/category", "completed", true);
      router.push("/budget-entry/data-source");
    }, 400);
  };

  return (
    <div>
      <form onSubmit={submitFormPayload}>
        {/* BUDGET CATEGORY */}
        <div className="data-group-block">
          <div className="data-group-title">Create budget category group</div>

          <div className="data-entry-selections">
            {/* CATEGORY LISTING */}
            <div className="category-list">
              {categories.map((category, index) => (
                <div
                  key={category.categoryGroupId}
                  className="data-selection-input"
                >
                  <div className="input-area">
                    <TextInputField
                      labelId={`budgetCategory${index + 1}`}
                      labelTitle={`Category ${index + 1}`}
                      inputType={IInputType.Text}
                      inputValue={category.categoryTitle}
                      inputPlaceholder="Provide budget category title"
                      isRequired
                      hasBottomPadding={false}
                      onInputChange={(value) =>
                        updateCategoryTitle(index, value)
                      }
                      errorHandler={{ validator: "validateRequired" }}
                    />
                  </div>

                  {/* REMOVE ACTION */}
                  {index > 0 && (
                    <button
                      type="button"
                      className="remove-action"
                      onClick={() => removeCategory(index)}
                      aria-label={`Remove Category ${index + 1}`}
                    >
                      <TrashIcon />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* ADD CATEGORY ACTION BUTTON */}
            <div className="action-area">
              <button
                type="button"
                className="action-btn"
                onClick={addCategory}
                aria-label="Add a category"
              >
                <PlusIcon className="plus-icon" />
                <span className="action-text">Add a category group</span>
              </button>
            </div>
          </div>
        </div>

        {/* BUDGET YEARS */}
        <div className="data-group-block">
          <div className="data-group-title">Select budget year</div>
          <div className="data-selection-input my-1.5">
            <YearGridSelectField
              optionList={yearOptions}
              selectedOptions={selectedYears}
              onOptionSelected={handleYearSelection}
            />
          </div>
        </div>

        {/* ACTION BUTTON */}
        <button
          ref={buttonRef}
          type="submit"
          className="btn btn-lg btn-primary w-full -mt-2"
          disabled={
            categories.some((cat) => !cat.categoryTitle.trim()) ||
            selectedYears.length === 0
          }
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default BudgetCategoryFormGroup;
