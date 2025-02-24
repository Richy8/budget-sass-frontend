import React from "react";
import Image from "next/image";
import Link from "next/link";
import { USFlag } from "@/app/_assets";
import "./BudgetDisplayBottomCard.scss";

const BudgetDisplayBottomCard = () => {
  return (
    <div className="budget-display-bottom-card">
      <div className="budget-item">
        <div className="budget-item--title">Country</div>
        <div className="budget-item--value">
          <div className="icon-wrapper">
            <Image src={USFlag} alt="US Flag" width={16} height={16} />
          </div>

          <div className="value-text">United States</div>
        </div>
      </div>

      <div className="budget-item">
        <div className="budget-item--title">Organization</div>
        <div className="budget-item--value">
          <div className="icon icon-building"></div>
          <div className="value-text">Budgit Services LLC</div>
        </div>
      </div>

      <div className="budget-item">
        <div className="budget-item--title">Data Source</div>
        <div className="budget-item--value">
          <div className="icon icon-external-link"></div>
          <Link
            href="/"
            className="value-text underline !text-teal-500 hover:!text-teal-600/85"
          >
            https://example.com/budgit-source-2025
          </Link>
        </div>
      </div>

      <div className="budget-item">
        <div className="budget-item--title">Created On</div>
        <div className="budget-item--value">
          <div className="icon icon-calendar"></div>
          <div className="value-text">12th January, 2025</div>
        </div>
      </div>
    </div>
  );
};

export default BudgetDisplayBottomCard;
