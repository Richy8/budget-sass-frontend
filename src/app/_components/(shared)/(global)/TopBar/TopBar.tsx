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
    `${BE}/category`,
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
          <div className="topbar--right">
            <div className="nav-items">
              <Link
                href="/overview"
                scroll={true}
                className={`nav-link ${
                  pathname === "/overview" || pathname.startsWith("/budget/")
                    ? "active-link"
                    : ""
                }`}
              >
                <div className="nav-icon icon-four-square"></div>
                <div className="nav-text">Overview</div>
              </Link>

              <Link
                href="/budget-entry/information"
                scroll={true}
                className={`nav-link ${
                  budgetEntryLinks.includes(pathname) && "active-link"
                }`}
              >
                <div className="nav-icon icon-files"></div>
                <div className="nav-text">Create Budget</div>
              </Link>
            </div>

            {/* SEPARATOR LINE */}
            <div className="separator-line"></div>

            {/* NAV OPTIONS */}
            <div className="nav-options">
              <TopBarAction />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
