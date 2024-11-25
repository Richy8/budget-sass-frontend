import React, { ReactNode } from "react";
import Image from "next/image";
import { BudgitLogo } from "@/app/_assets";
import "./AuthEntryLayout.scss";

const AuthEntryLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="auth-entry-layout">
      <div className="app-container">
        <div className="content-area">
          <div className="brand-logo">
            <Image src={BudgitLogo} alt="Budgit logo" width={132} height={75} />
          </div>

          <div className="w-full h-auto">{children}</div>
          {/* <div className="footer-copy">
            &copy; 2024 Budgit. All Rights Reserved
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AuthEntryLayout;
