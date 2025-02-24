"use client";

import React, { useEffect, useState } from "react";
import {
  BudgetCategoryBlock,
  SelectInputField,
  AddCategoryDataDialog,
} from "@/app/_components";
import useStore from "@/app/_app-store";
import { useGlobalStore } from "@/app/_app-store/global-store";
import { useToggle } from "@/app/_hooks";
import { useToast } from "@/app/_context/ToastContext";
import { useBtnClick } from "@/app/_hooks";
import { PlusIcon } from "@heroicons/react/24/outline";
import {
  CategoryGroupType,
  BudgetDataSourceType,
} from "@/app/_types/store-type";
import "./BudgetManualSource.scss";

const BudgetManualSource = () => {
  const { showToast } = useToast();
  const [showModal, setShowModal] = useToggle();

  // const [, setProcessing] = useState(false);
  // const { buttonRef, updateButtonState } = useBtnClick("Continue");
  const { buttonRef } = useBtnClick("Continue");

  const budgetDataSource = useGlobalStore(
    (state) => state.budgetEntryPayload.budgetDataSource
  );

  // const { getBudgetCategory, getBudgetDataSource, updateBudgetSidebar } =
  //   useStore();
  const { getBudgetCategory } = useStore();

  const [selectedCategoryGroupId, setSelectedCategoryGroupId] = useState("");

  const [isLoadingCategoryData, setIsLoadingCategoryData] =
    useState<boolean>(false);
  const [budgetCategoryDataSourceList, setBudgetCategoryDataSourceList] =
    useState<BudgetDataSourceType[]>([]);

  const triggerNewBudgetCategoryData = () => {
    if (!selectedCategoryGroupId) {
      showToast("Please select a budget category group", "warning");
      return;
    }

    setShowModal();
  };

  useEffect(() => {
    setIsLoadingCategoryData(true);

    setBudgetCategoryDataSourceList(
      budgetDataSource.filter(
        (item: BudgetDataSourceType) =>
          item.categoryGroupId === selectedCategoryGroupId
      )
    );

    setTimeout(() => setIsLoadingCategoryData(false), 500);
  }, [selectedCategoryGroupId, budgetDataSource]);

  return (
    <>
      <div className="budget-manual-source">
        <form action="">
          <div className="manual-wrapper">
            {/* AVAILABLE BUDGET CATEGORY GROUP */}
            <div className="data-group-block">
              <div className="data-group-title">
                Available budget category group
              </div>

              <div className="data-entry-selections pb-2.5">
                <SelectInputField
                  labelId="budgetCategoryGroup"
                  labelTitle="Select a category group"
                  isRequired={true}
                  inputPlaceholder="Selected budget category shows here..."
                  hasBottomPadding={false}
                  inputValue={selectedCategoryGroupId}
                  selectData={getBudgetCategory().categoryGroupList.map(
                    (category: CategoryGroupType) => ({
                      name: category.categoryTitle,
                      value: category.categoryGroupId,
                    })
                  )}
                  onSelectChange={(value) => setSelectedCategoryGroupId(value)}
                />
              </div>
            </div>

            {/* BUDGET CATEGORY DATA */}
            <div className="data-group-block">
              <div className="data-group-title">Budget category data</div>

              <div className="data-entry-selections">
                {/* CATEGORY DATA BLOCK */}
                <div className="category-data-block">
                  {isLoadingCategoryData ? (
                    <div className="loading-state">
                      Loading category data...
                    </div>
                  ) : budgetCategoryDataSourceList.length === 0 ? (
                    <div className="empty-state">No category data</div>
                  ) : (
                    budgetCategoryDataSourceList.map(
                      (item: BudgetDataSourceType, index: number) => (
                        <BudgetCategoryBlock key={index} budgetItem={item} />
                      )
                    )
                  )}
                </div>

                {/* ADD CATEGORY ACTION BUTTON */}
                <div className="action-area">
                  <button
                    type="button"
                    className="action-btn"
                    aria-label="Add category data"
                    onClick={triggerNewBudgetCategoryData}
                  >
                    <PlusIcon className="plus-icon" />
                    <span className="action-text">Add category data</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ACTION BUTTON */}
          <button
            type="submit"
            ref={buttonRef}
            className="btn btn-lg btn-primary w-full -mt-2"
          >
            Visualize Budget
          </button>
        </form>
      </div>

      {/* MODAL DIALOGS */}
      <AddCategoryDataDialog
        showModal={showModal}
        toggleModal={setShowModal}
        selectedCategoryGroupId={selectedCategoryGroupId}
      />
    </>
  );
};

export default BudgetManualSource;
