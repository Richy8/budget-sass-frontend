import React, { ReactNode } from "react";
import { TopBar } from "@/app/_components";
import "./DashboardTopLayout.scss";

const DashboardTopLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="dashboard-top-layout">
      {/* TOP PANE */}
      <div className="top-pane">
        <TopBar />
      </div>

      {/* BODY PANE */}
      <div className="body-pane">{children}</div>
    </div>
  );
};

export default DashboardTopLayout;
