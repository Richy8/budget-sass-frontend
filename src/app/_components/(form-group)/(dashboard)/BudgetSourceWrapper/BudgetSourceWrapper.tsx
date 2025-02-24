"use client";

import React, { useState } from "react";
import {
  BudgetManualSource,
  BudgetUploadSource,
  BudgetGoogleSyncSource,
} from "@/app/_components";
import useStore from "@/app/_app-store";

type budgetSourceType = {
  "manual-entry": JSX.Element;
  "upload-entry": JSX.Element;
  "google-entry": JSX.Element;
};

const BudgetSourceWrapper = () => {
  const { getBudgetInformation } = useStore();

  const [budgetSource] = useState<budgetSourceType>({
    "manual-entry": <BudgetManualSource />,
    "upload-entry": <BudgetUploadSource />,
    "google-entry": <BudgetGoogleSyncSource />,
  });

  const loadBudgetSourceEntry = () =>
    budgetSource[getBudgetInformation().entryType as keyof typeof budgetSource];

  return <div>{loadBudgetSourceEntry()}</div>;
};

export default BudgetSourceWrapper;
