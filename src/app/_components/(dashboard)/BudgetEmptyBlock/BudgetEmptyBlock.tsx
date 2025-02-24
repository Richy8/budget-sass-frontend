import React from "react";
import Image from "next/image";
import { EmptyBudgetData } from "@/app/_assets";
import Link from "next/link";
import "./BudgetEmptyBlock.scss";

const BudgetEmptyBlock = () => {
  const emptyBlocks = [
    { height: "h-48", bgColor: "bg-teal-100/45" },
    { height: "h-64", bgColor: "bg-purple-100/45" },
    { height: "h-48", bgColor: "bg-pink-100/45" },
    { height: "h-60", bgColor: "bg-green-100/45" },
    { height: "h-80", bgColor: "bg-yellow-100/45" },
    { height: "h-32", bgColor: "bg-red-100/45" },
  ];

  return (
    <div className="budget-empty-block-wrapper">
      <div className="budget-empty-grid">
        {emptyBlocks.map((block, index) => (
          <div
            key={index}
            className={`${block.height} ${block.bgColor} budget-block`}
          ></div>
        ))}
      </div>

      <div className="block-overlay">
        <div className="content-area">
          {/* IMAGE ILLUSTRATION */}
          <div className="image-wrapper">
            <Image
              src={EmptyBudgetData}
              alt="Empty Budget Data"
              width={120}
              height={120}
            />
          </div>

          <div className="text-area">
            <div className="primary-text">No Budget Created</div>

            <div className="secondary-text">
              Start organizing your finances by creating a budget tailored to
              your goals. Click below to get started and take control of your
              spending today.
            </div>

            <div className="action-area">
              <Link
                href="/budget-entry/information"
                className="btn btn-md btn-primary rounded-full hover:!text-white"
                scroll={true}
              >
                Create Budget
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetEmptyBlock;
