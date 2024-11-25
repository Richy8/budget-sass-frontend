import React from "react";
import { SocialAuth } from "@/app/_components";
import "./AuthContainer.scss";

type AuthContainerType = {
  children: React.ReactNode;
  primaryText: string;
  secondaryText: string;
  showSocialAuth: boolean;
  isLoginPage?: boolean;
};

const AuthContainer = ({
  children,
  primaryText,
  secondaryText,
  showSocialAuth,
  isLoginPage,
}: AuthContainerType) => {
  return (
    <div className="form-container">
      <div className="form-group-wrapper">
        {/* FORM TOP AREA */}
        <div className={`form-top ${showSocialAuth ? "mb-7" : "mb-8"}`}>
          <div className="form-top--primary">{primaryText}</div>
          <div className="form-top--secondary">{secondaryText}</div>
        </div>

        {/* FORM BASE AREA */}
        <div className="form-base">
          {showSocialAuth && (
            <>
              {/* SOCIAL AUTH ENTRY */}
              <SocialAuth
                googleBtnCopy={
                  isLoginPage ? "Sign in with Google" : "Sign up with Google"
                }
              />

              {/* BASE LINE */}
              <div className="base-line">
                <div className="base-line--path"></div>
                <div className="base-line--text">OR</div>
              </div>
            </>
          )}

          {/* FORM BLOCK */}
          <>{children}</>
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
