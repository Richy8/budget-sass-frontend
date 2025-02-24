import React from "react";
import Link from "next/link";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="app-container hero-container">
        {/* META TEXT WRAPPER */}
        <div className="meta-text-wrapper">
          <div className="icon icon-double-star"></div>
          <div className="text">Trusted by Over 1 Million Users Worldwide</div>
        </div>

        {/* PRIMARY TEXT */}
        <div className="primary-text">
          Revolutionize Your <span>Budget Experience</span>{" "}
        </div>

        {/* SECONDARY TEXT */}
        <div className="secondary-text">
          Transform your budget data into actionable insights. Uncover hidden
          patterns, identify spending trends, and make smarter financial
          decisions.
        </div>

        {/* ACTION ROW */}
        <div className="btn-action-row">
          <Link href="/create-account" className="btn btn-md btn-primary">
            Get started
          </Link>

          <Link href="#budgets" className="btn btn-md btn-secondary">
            Explore Budgets
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
