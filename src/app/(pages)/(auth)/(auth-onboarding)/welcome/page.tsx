import type { Metadata } from "next";
import Link from "next/link";
import { OnboardingContainer } from "@/app/_components";

export const metadata: Metadata = {
  title: "Welcome to Budgit",
};

const copyHighlights: {
  icon: string;
  title: string;
  description: string;
}[] = [
  {
    icon: "icon-files",
    title: "Streamlined Budgeting",
    description:
      "Budgit allows you to enter and visualize your budget data effortlessly, reducing complexity and improving clarity.",
  },
  {
    icon: "icon-chart",
    title: "Powerful Insights",
    description:
      "Explore comprehensive visual reports with a deep understanding of your revenue, expenditures, and overall financial health.",
  },
  {
    icon: "icon-profile-users",
    title: "Collaborative Setup",
    description:
      "Whether you’re working solo or with a team, Budgit is designed for flexibility. Set up your workspace to fit your needs.",
  },
];

const Welcome = () => {
  return (
    <div>
      <OnboardingContainer
        primaryText="Welcome to Budgit!"
        secondaryText={`visualize your budget data with ease. Budgit helps you bring transparency to your budgeting process.`}
        isWelcomeView={true}
      >
        {/* COPY HIGHLIGHTS */}
        <div className="copy-highlights">
          {copyHighlights.map((highlight, index) => (
            <div key={index} className="copy-block">
              <div className="icon-wrapper">
                <div className={`icon ${highlight.icon}`}></div>
              </div>

              <div className="copy-text-wrapper">
                <div className="title-text">{highlight.title}</div>
                <div className="description-text">{highlight.description}</div>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/onboarding"
          className="btn btn-lg btn-primary hover:text-white"
        >
          Get started
        </Link>
      </OnboardingContainer>
    </div>
  );
};

export default Welcome;
