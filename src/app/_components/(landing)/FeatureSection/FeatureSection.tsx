import React from "react";
import "./FeatureSection.scss";

const FeatureSection = () => {
  return (
    <div className="feature-section" id="features">
      <div className="app-container feature-container">
        {/* TOP AREA */}
        <div className="title-row">
          <div className="title-text">
            Tailor-Made <span>Features</span>
          </div>
          <div className="description-text">
            From spreadsheets to insights: Unlock the power of your budget data.
            See your spending in a whole new light and take control of your
            finances.
          </div>
        </div>

        {/* BODY AREA */}
        <div className="body-area">
          <div className="feature-item">
            <div className="feature-icon">
              <div className="icon icon-four-square"></div>
            </div>

            <div className="feature-title">Robust Workflow</div>
            <div className="feature-description">
              Manage your pipeline, eliminate budget chaos and drive
              performance. Visualize your budget from every perspective
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <div className="icon icon-profile-users"></div>
            </div>

            <div className="feature-title">User Friendly</div>
            <div className="feature-description">
              Dive right in! Intuitive design makes budget analysis accessible
              to everyone on your team, no training needed.
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <div className="icon icon-layer"></div>
            </div>

            <div className="feature-title">Multiple Layouts</div>
            <div className="feature-description">
              Treemaps, tables, and more. Choose the visualization that best
              tells your budget story and unlocks critical insights.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
