export type IAuthType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  token: string | undefined;
  fullName?: string;
  image?: any;
  otp?: any;
};

export type BudgetSidebarType = {
  href: string;
  text: string;
  isActive: boolean;
  isCompleted: boolean;
};

export type YearListType = {
  yearId: string;
  year: string;
  isSelected: boolean;
};

export type CategoryGroupType = {
  categoryGroupId: string;
  categoryTitle: string;
};

export type BudgetInformationType = {
  title: string;
  description: string;
  source: string;
  country: string;
  entryType: string;
};

export type YearCategoryType = {
  yearId: string;
  year: string;
  amount: number;
};

export type BudgetDataSourceType = {
  categoryId: string;
  title: string;
  categoryGroupId: string;
  amountData: YearCategoryType[];
  parentCategoryAddress: string;
  children: BudgetDataSourceType[];
};

export type CategoryDataListType = {
  categoryGroupId: string;
  categoryDataId: string;
  categoryDataTitle: string;
  categoryDataAddress: string;
};

export interface IAuthStore {
  authUser: any;

  setAuthUser: (payload: any) => any;
  loginUser: (payload: Pick<IAuthType, "email" | "password">) => any;
  signupUser: (
    payload: Pick<IAuthType, "firstName" | "lastName" | "email" | "password">
  ) => any;
  verifyUserOTP: (payload: Pick<IAuthType, "otp">) => any;
  resendUserOTP: () => any;
  passwordRequest: (payload: Pick<IAuthType, "email">) => any;
  passwordReset: (payload: Pick<IAuthType, "token" | "password">) => any;
}

export interface IGlobalStore {
  budgetSidebar: BudgetSidebarType[];

  budgetCategoryLevels: string[];

  budgetEntryPayload: {
    budgetInformation: BudgetInformationType;
    budgetCategory: {
      categoryGroupList: CategoryGroupType[];
      yearList: YearListType[];
    };
    budgetDataSource: BudgetDataSourceType[];
    categoryDataList: CategoryDataListType[];
  };

  getBudgetSidebar: () => BudgetSidebarType[];
  getBudgetInformation: () => BudgetInformationType;
  getBudgetCategory: () => {
    categoryGroupList: CategoryGroupType[];
    yearList: YearListType[];
  };
  getBudgetDataSource: () => BudgetDataSourceType[];
  getBudgetCategoryDataList: () => CategoryDataListType[];

  updateBudgetSidebar: (
    href: string,
    status: "completed" | "active",
    value?: boolean
  ) => any;

  updateBudgetInformation: (payload: BudgetInformationType) => any;
  updateBudgetCategory: (payload: {
    categoryGroupList: CategoryGroupType[];
    yearList: YearListType[];
  }) => any;

  updateBudgetDataSource: (payload: BudgetDataSourceType[]) => any;
  updateBudgetCategoryDataList: (payload: CategoryDataListType[]) => any;
}
