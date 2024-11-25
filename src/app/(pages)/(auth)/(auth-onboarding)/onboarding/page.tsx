import type { Metadata } from "next";
import { OnboardingContainer, SetupFormGroup } from "@/app/_components";

export const metadata: Metadata = {
  title: "Setup your organization",
};

const Onboarding = () => {
  return (
    <div>
      <OnboardingContainer
        primaryText="Setup your Organization"
        secondaryText={`Help us get to know your organization better for accurate budget insights and tailored visualizations.`}
        isWelcomeView={false}
      >
        {/* ONBOARDING INPUT BLOCK */}
        <div className="onboarding-input-block">
          <SetupFormGroup />
        </div>
      </OnboardingContainer>
    </div>
  );
};

export default Onboarding;
