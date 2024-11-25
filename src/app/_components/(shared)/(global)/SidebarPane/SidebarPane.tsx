"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BudgitLogo } from "@/app/_assets";
import "./SidebarPane.scss";

const SidebarPane = () => {
  const pathname = usePathname();

  return (
    <div className="sidebar-block">
      {/* BRAND LOGO */}
      <div className="brand-logo">
        <Image src={BudgitLogo} alt="Budgit logo" width={120} height={46} />
      </div>

      <div className="nav-area">
        {/* NAVIGATIONS */}
        <div className="navigations">
          <Link
            href="/overview"
            className={`nav-item ${
              pathname === "/overview" ? "nav-item-active" : ""
            }`}
          >
            <div className="nav-icon icon-four-square text-[17.75px]"></div>
            <div className="nav-text">Overview</div>
          </Link>

          <Link
            href="/budget-entry"
            className={`nav-item ${
              pathname === "/budget-entry" ? "nav-item-active" : ""
            }`}
          >
            <div className="nav-icon icon-files text-xl"></div>
            <div className="nav-text">Budget Entry</div>
          </Link>

          <Link
            href="/visualizations"
            className={`nav-item ${
              pathname === "/visualizations" ? "nav-item-active" : ""
            }`}
          >
            <div className="nav-icon icon-layer text-xl"></div>
            <div className="nav-text">Visualizations</div>
          </Link>

          <Link
            href="/team-setup"
            className={`nav-item ${
              pathname === "/team-setup" ? "nav-item-active" : ""
            }`}
          >
            <div className="nav-icon icon-profile-users text-xl"></div>
            <div className="nav-text">Team Setup </div>
          </Link>

          <Link
            href="/audit-logs"
            className={`nav-item ${
              pathname === "/audit-logs" ? "nav-item-active" : ""
            }`}
          >
            <div className="nav-icon icon-regulator text-xl"></div>
            <div className="nav-text">Audit Logs</div>
          </Link>

          <Link
            href="/settings"
            className={`nav-item ${
              pathname === "/settings" ? "nav-item-active" : ""
            }`}
          >
            <div className="nav-icon icon-cog text-xl"></div>
            <div className="nav-text">Settings</div>
          </Link>
        </div>
      </div>

      {/* SIDEBAR BASE AREA */}
      <div className="nav-base-wrapper">
        <div className="profile-display-card">
          <div className="profile-display--left">
            <div className="profile-display-avatar"></div>

            <div>
              <div className="profile-display-name">Deskangle Studios</div>
              <div className="profile-display-email">24 Projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarPane;
