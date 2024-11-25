import React from "react";
import "./OnboardingContainer.scss";

type OnboardingContainerType = {
  children: React.ReactNode;
  primaryText: string;
  secondaryText: string;
  isWelcomeView?: boolean;
};

const OnboardingContainer = ({
  children,
  primaryText,
  secondaryText,
  isWelcomeView = false,
}: OnboardingContainerType) => {
  return (
    <div className="onboarding-container">
      <div className="copy-group-wrapper">
        <div className="top-area">
          <div className="primary-text">{primaryText}</div>

          <div className="secondary-text">
            {isWelcomeView && (
              <>
                Holla <span className="font-medium">Efemena Elvis</span>,{" "}
              </>
            )}
            {secondaryText}
          </div>
        </div>

        <div className="bottom-area">{children}</div>
      </div>
    </div>
  );
};

export default OnboardingContainer;
