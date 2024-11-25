import React from "react";
import "./TopbarInfo.scss";

const TopbarInfo = () => {
  return (
    <div className="topbar-info">
      <div className="page-title md:hidden">Welcome, Efemena Elvis!</div>
      <div className="page-title page-title-sm hidden md:block">
        Dashboard Overview
      </div>

      <div className="page-subtitle md:hidden">
        Explore your budget data for the fiscal year.
      </div>
    </div>
  );
};

export default TopbarInfo;
