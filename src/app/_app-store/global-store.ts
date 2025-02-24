import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import {
  IGlobalStore,
  BudgetInformationType,
  CategoryGroupType,
  YearListType,
  BudgetDataSourceType,
  CategoryDataListType,
} from "@/app/_types/store-type";

// Define Zustand store
export const useGlobalStore = create<IGlobalStore>()(
  persist(
    (set, get) => ({
      budgetSidebar: [
        {
          href: "/budget-entry/information",
          text: "Budget Information",
          isActive: true,
          isCompleted: false,
        },
        {
          href: "/budget-entry/category",
          text: "Budget Category Group",
          isActive: false,
          isCompleted: false,
        },
        {
          href: "/budget-entry/data-source",
          text: "Budget Data Source",
          isActive: false,
          isCompleted: false,
        },
        {
          href: "/budget-entry/review",
          text: "Budget Review",
          isActive: false,
          isCompleted: false,
        },
      ],

      budgetCategoryLevels: [
        "Primary Level",
        "Secondary Level",
        "Tertiary Level",
        "Quaternary Level",
      ],

      budgetEntryPayload: {
        budgetInformation: {
          title: "",
          description: "",
          source: "",
          country: "",
          entryType: "",
        },
        budgetCategory: { categoryGroupList: [], yearList: [] },
        budgetDataSource: [],
        categoryDataList: [],
      },

      // Getters
      getBudgetSidebar: () => get().budgetSidebar,
      getBudgetInformation: () => get().budgetEntryPayload.budgetInformation,
      getBudgetCategory: () => get().budgetEntryPayload.budgetCategory,
      getBudgetDataSource: () => get().budgetEntryPayload.budgetDataSource,
      getBudgetCategoryDataList: () =>
        get().budgetEntryPayload.categoryDataList,

      // Setters
      updateBudgetSidebar: (href, status, value = true) => {
        const sidebarStatus =
          status === "completed" ? { isCompleted: value } : { isActive: value };

        set((state) => ({
          budgetSidebar: state.budgetSidebar.map((item) =>
            item.href === href ? { ...item, ...sidebarStatus } : item
          ),
        }));
      },

      updateBudgetInformation: (payload: BudgetInformationType) => {
        set((state) => ({
          budgetEntryPayload: {
            ...state.budgetEntryPayload,
            budgetInformation: payload,
          },
        }));
      },

      updateBudgetCategory: (payload: {
        categoryGroupList: CategoryGroupType[];
        yearList: YearListType[];
      }) => {
        set((state) => ({
          budgetEntryPayload: {
            ...state.budgetEntryPayload,
            budgetCategory: payload,
          },
        }));
      },

      updateBudgetCategoryDataList: (payload: CategoryDataListType[]) => {
        set((state) => ({
          budgetEntryPayload: {
            ...state.budgetEntryPayload,
            categoryDataList: payload,
          },
        }));
      },

      updateBudgetDataSource: (payload: BudgetDataSourceType[]) => {
        set((state) => ({
          budgetEntryPayload: {
            ...state.budgetEntryPayload,
            budgetDataSource: payload,
          },
        }));
      },
    }),

    {
      name: "budget_app_data",
      storage: createJSONStorage(() => localStorage),

      // Save only the necessary parts of the state
      partialize: (state) => ({
        budgetEntryPayload: state.budgetEntryPayload,
        budgetSidebar: state.budgetSidebar,
      }),

      // Handle rehydration (removes invalid or old state)
      onRehydrateStorage: () => (state) => {
        if (state) {
          console.log("Rehydrated state:", state.budgetEntryPayload);
        }
      },
    }
  )
);
