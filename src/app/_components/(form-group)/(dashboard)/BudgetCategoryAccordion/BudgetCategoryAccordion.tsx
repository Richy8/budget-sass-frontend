"use client";

import { useEffect, useRef, useState } from "react";
import { commonUtil } from "@/app/_utils";
import { useToggle } from "@/app/_hooks";
// import useStore from "@/app/_app-store";
import { useGlobalStore } from "@/app/_app-store/global-store";
import {
  ClickOutsideWrapper,
  EditCategoryDataDialog,
  DeleteCategoryDataDialog,
} from "@/app/_components";
import {
  BudgetDataSourceType,
  YearCategoryType,
} from "@/app/_types/store-type";
import "./BudgetCategoryAccordion.scss";

type CategoryType = {
  isCollapse: boolean;
  budgetDataItem: BudgetDataSourceType;
};

const BudgetCategoryAccordion = ({
  isCollapse,
  budgetDataItem,
}: CategoryType) => {
  const { formatNumber } = commonUtil;

  const dropdownRef = useRef<any>();
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  // const { getBudgetCategory } = useStore();

  const budgetYearData = useGlobalStore(
    (state) => state.budgetEntryPayload.budgetCategory.yearList
  );

  const [showEditModal, setShowEditModal] = useToggle();
  const [showDeleteModal, setShowDeleteModal] = useToggle();

  const [budgetAmountData, setBudgetAmountDate] =
    useState<YearCategoryType[]>();

  useEffect(() => {
    const yearData = budgetYearData.map((year: any) => ({
      yearId: year.yearId,
      year: year.year,
      amount:
        budgetDataItem.amountData.find((data) => data.yearId === year.yearId)
          ?.amount ?? "0",
    }));

    setBudgetAmountDate(yearData as YearCategoryType[]);
  }, [budgetYearData, budgetDataItem.amountData]);

  return (
    <>
      <div className="budget-category-accordion">
        {/* TOP DATA ROW */}
        <div
          className="top-data-row"
          ref={dropdownRef}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <div className="top-data-row--left">{budgetDataItem.title}</div>

          <div className={`top-data-row--right ${!isCollapse && "invisible"}`}>
            <div
              className={`icon icon-caret-down ${showDropdown && "rotate-180"}`}
            ></div>{" "}
          </div>
        </div>

        {/* BOTTOM DATA ROW */}
        <ClickOutsideWrapper
          togglerRef={dropdownRef}
          showDropdown={showDropdown}
          toggleDropdown={setShowDropdown}
        >
          <div className="bottom-data-row">
            <div className="data-item-row">
              {budgetAmountData?.map(
                (data: YearCategoryType, index: number) => (
                  <div className="data-item-card" key={index}>
                    <div className="key">{data.year}</div>
                    <div className="value">
                      {formatNumber(+data.amount, false)}
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="data-item-action">
              <div
                className="action-item text-red-600"
                onClick={setShowDeleteModal}
              >
                <div className="icon icon-trash"></div>
                <div className="text">Delete</div>
              </div>

              <div
                className="action-item text-green-600"
                onClick={setShowEditModal}
              >
                <div className="icon icon-pen-edit"></div>
                <div className="text">Edit</div>
              </div>
            </div>
          </div>
        </ClickOutsideWrapper>
      </div>

      {/* MODAL DIALOGS */}
      <EditCategoryDataDialog
        showModal={showEditModal}
        toggleModal={setShowEditModal}
        budgetDataItem={budgetDataItem}
      />

      <DeleteCategoryDataDialog
        showModal={showDeleteModal}
        toggleModal={setShowDeleteModal}
        budgetDataItem={budgetDataItem}
      />
    </>
  );
};

export default BudgetCategoryAccordion;
