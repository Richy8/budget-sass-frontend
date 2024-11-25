"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { TopBarAction } from "@/app/_components";
import { BudgitLogo } from "@/app/_assets";
import "./TopBar.scss";

const Topbar = () => {
  const pathname = usePathname();

  const BE = "/budget-entry";
  const budgetEntryLinks = [
    `${BE}/information`,
    `${BE}/data-source`,
    `${BE}/review`,
  ];

  return (
    <div className="topbar">
      <div className="base-container h-full">
        <div className="topbar-row">
          {/* APP LOGO */}
          <Link href="/overview" className="app-logo">
            <Image src={BudgitLogo} width={100} height={50} alt="BudgitLogo" />
          </Link>

          {/* NAV ITEMS */}
          <div className="nav-items">
            <Link
              href="/overview"
              className={`nav-link ${
                pathname === "/overview" ? "active-link" : ""
              }`}
            >
              <div className="nav-icon icon-four-square"></div>
              <div className="nav-text">Overview</div>
            </Link>

            <Link
              href="/budget-entry/information"
              className={`nav-link ${
                budgetEntryLinks.includes(pathname) ? "active-link" : ""
              }`}
            >
              <div className="nav-icon icon-files"></div>
              <div className="nav-text">Budget Entry</div>
            </Link>

            <Link
              href="/workspace"
              className={`nav-link ${
                pathname === "/workspace" ? "active-link" : ""
              }`}
            >
              <div className="nav-icon icon-layer"></div>
              <div className="nav-text">Workspace</div>
            </Link>

            {/* <Link href="/" className="nav-link">
              <div className="nav-icon icon-profile-users"></div>
              <div className="nav-text">Members</div>
            </Link> */}
          </div>

          {/* NAV OPTIONS */}
          <div className="nav-options">
            <TopBarAction />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
