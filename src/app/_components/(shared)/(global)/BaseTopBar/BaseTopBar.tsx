"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TopBarAction } from "@/app/_components";
import { BudgitLogo } from "@/app/_assets";
import "./BaseTopBar.scss";

const BaseTopbar = () => {
  const [isAuthenticated] = useState<boolean>(false);

  return (
    <div className="base-topbar">
      <div className="base-container h-full">
        <div className="topbar-row">
          {/* APP LOGO */}
          <Link href="/home" className="app-logo">
            <Image src={BudgitLogo} width={100} height={50} alt="BudgitLogo" />
          </Link>

          {/* NAV ITEMS */}
          <div className="nav-items">
            <Link href="#howItWorks" scroll={true} className="nav-link">
              <div className="nav-text">How it works</div>
            </Link>

            <Link href="#features" scroll={true} className="nav-link">
              <div className="nav-text">Features</div>
            </Link>

            <Link href="#budgets" scroll={true} className="nav-link">
              <div className="nav-text">Budgets</div>
            </Link>

            <Link href="#contact" scroll={true} className="nav-link">
              <div className="nav-text">Contact Us</div>
            </Link>
          </div>

          <div className="topbar--right">
            <div className="nav-options">
              {isAuthenticated ? (
                <TopBarAction />
              ) : (
                <Link href="/create-account" className="btn btn-md btn-primary">
                  Login or Sign Up
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseTopbar;
