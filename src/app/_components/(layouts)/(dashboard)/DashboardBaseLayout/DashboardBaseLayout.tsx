"use client";

import React, { ReactNode, useState } from "react";
import { SidebarPane, TopbarPane } from "@/app/_components";
import "./DashboardBaseLayout.scss";

const DashboardBaseLayout = ({ children }: { children: ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <div className="dashboard-layout">
      {/* SIDEBAR PANE */}
      <div
        className={`sidebar-pane ${
          showSidebar && "animate-drift-left show-sidebar"
        }`}
      >
        <div
          className="sidebar-mobile-overlay"
          onClick={() => setShowSidebar(!showSidebar)}
        ></div>

        <SidebarPane />
      </div>

      {/* MAIN CONTENT PANE */}
      <div className="main-content-pane">
        {/* TOP PANE */}
        <div className="top-pane">
          <TopbarPane emitShowSidebar={() => setShowSidebar(!showSidebar)} />
        </div>

        {/* CHILDREN SLOT */}
        <div className="body-pane">{children}</div>
      </div>
    </div>
  );
};

export default DashboardBaseLayout;
