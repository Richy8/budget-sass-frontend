import React from "react";
import { BudgetDisplayCard } from "@/app/_components";
import "./ProjectSection.scss";

const ProjectSection = () => {
  return (
    <div className="project-section" id="budgets">
      <div className="app-container project-container">
        {/* TOP AREA */}
        <div className="title-row">
          <div className="title-text">
            Explore Community <span>Budgets</span>
          </div>

          <div className="description-text">
            Unlock insights from real-world budget strategies. Discover how
            other organizations allocate resources, identify best practices, and
            benchmark your financial planning.
          </div>
        </div>

        {/* BODY AREA */}
        <div className="body-area">
          <div className="search-row">
            <div className="search-input">
              <div className="icon icon-search-normal"></div>

              <input
                type="text"
                placeholder="Search budgets by name, country or organization"
                className="form-control"
              />
            </div>

            <div className="search-action">
              <button className="btn btn-md btn-primary">Explore Budget</button>
            </div>
          </div>

          {/* BUDGET DISPLAY AREA */}
          <div className="budget-display-area">
            <BudgetDisplayCard />
            <BudgetDisplayCard />
            <BudgetDisplayCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
