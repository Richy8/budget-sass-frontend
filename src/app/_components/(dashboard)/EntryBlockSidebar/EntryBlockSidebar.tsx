import React from "react";
import Link from "next/link";
import "./EntryBlockSidebar.scss";

const EntryBlockSidebar = () => {
  return (
    <div className="entry-block-sidebar">
      <Link
        href="/budget-entry/information"
        className="sidebar-item sidebar-item-active"
      >
        <div className="sidebar-item-indicator">
          <div className="icon icon-checkmark"></div>
        </div>

        <div className="sidebar-item-text">Budget Information</div>
      </Link>

      <Link href="/budget-entry/data-source" className="sidebar-item">
        <div className="sidebar-item-indicator"></div>
        <div className="sidebar-item-text">Budget Data Source</div>
      </Link>

      <Link href="/budget-entry/review" className="sidebar-item">
        <div className="sidebar-item-indicator"></div>
        <div className="sidebar-item-text">Budget Review</div>
      </Link>
    </div>
  );
};

export default EntryBlockSidebar;
