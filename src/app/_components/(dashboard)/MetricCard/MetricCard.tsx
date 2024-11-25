"use client";

import React, { useEffect, useState } from "react";
import { commonUtil } from "@/app/_utils";
import "./MetricCard.scss";

type MetricCardProps = {
  title: string;
  value: number;
  currency: string;
  healthStatus?: "deficit" | "surplus";
  startDate: string;
  endDate: string;
  type: "revenue" | "expenditure" | "health";
};

const MetricCard = ({
  title,
  value,
  currency,
  healthStatus,
  startDate,
  endDate,
  type,
}: MetricCardProps) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const duration = 700; // 0.7 second
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // Ensure progress doesn't exceed 1
      const currentValue = Math.floor(progress * value);

      setAnimatedValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  const getIconConfig = (type: "revenue" | "expenditure" | "health") => {
    switch (type) {
      case "revenue":
        return {
          icon: "wallet-input",
          bgColor: "bg-green-50",
          textColor: "text-green-600/90",
        };
      case "expenditure":
        return {
          icon: "wallet-output",
          bgColor: "bg-red-50",
          textColor: "text-red-500/80",
        };
      case "health":
        return {
          icon: "wallet-archive",
          bgColor: "bg-blue-50",
          textColor: "text-blue-600/85",
        };
      default:
        return {
          icon: "wallet-archive",
          bgColor: "bg-gray-50",
          textColor: "text-gray-400",
        };
    }
  };

  return (
    <div className="metric-card">
      {/* TOP AREA */}
      <div className="metric-card--top">
        <div className="metric-card--top--left">
          <div className="metric-card--top--left--title">{title}</div>
          <div className="metric-card--top--left--value">
            <>
              {currency}
              {commonUtil.formatNumberWithCommas(animatedValue)}{" "}
              {type === "health" && (
                <span
                  className={`text-lg xl:text-sm capitalize font-normal ${
                    healthStatus === "deficit"
                      ? "text-red-400"
                      : "text-green-600"
                  }`}
                >
                  ({healthStatus})
                </span>
              )}
            </>
          </div>
        </div>

        <div className="metric-card--top--right">
          <div
            className={`icon-wrapper ${getIconConfig(type).bgColor} ${
              getIconConfig(type).textColor
            }`}
          >
            <div className={`icon icon-${getIconConfig(type).icon}`}></div>
          </div>
        </div>
      </div>

      {/* BOTTOM AREA */}
      <div className="metric-card--bottom">
        From {startDate} - {endDate}
      </div>
    </div>
  );
};

export default MetricCard;
