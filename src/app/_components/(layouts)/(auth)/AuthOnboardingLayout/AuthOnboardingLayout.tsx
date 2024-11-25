import React, { ReactNode } from "react";
import "./AuthOnboardingLayout.scss";

const AuthOnboardingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="auth-onboarding-layout">
      <div className="app-container">
        <div className="onboarding-area">
          <div className="w-full h-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthOnboardingLayout;
