"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BudgitLogo } from "@/app/_assets";
import "./AuthEntryLayout.scss";

const AuthEntryLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  return (
    <div className="auth-entry-layout">
      {/* CLOSE ICON */}
      <div className="close-icon" onClick={() => router.push("/")}>
        <div className="icon icon-times"></div>
      </div>

      <div className="app-container">
        <div className="content-area">
          <div className="brand-logo">
            <Image src={BudgitLogo} alt="Budgit logo" width={132} height={75} />
          </div>

          <div className="w-full h-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthEntryLayout;
