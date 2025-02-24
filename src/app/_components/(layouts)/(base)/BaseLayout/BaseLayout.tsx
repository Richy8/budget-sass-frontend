import React, { ReactNode } from "react";
import { BaseTopBar, BaseFooter } from "@/app/_components";
import "./BaseLayout.scss";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="base-layout">
      {/* TOP PANE */}
      <div className="top-pane">
        <BaseTopBar />
      </div>

      {/* BODY PANE */}
      <div className="body-pane">{children}</div>

      {/* FOOTER PANE */}
      <div className="footer-pane">
        <BaseFooter />
      </div>
    </div>
  );
};

export default BaseLayout;
