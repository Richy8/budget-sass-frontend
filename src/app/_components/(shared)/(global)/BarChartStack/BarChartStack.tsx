"use client";

import React, { useEffect, useMemo, useState } from "react";
import { commonUtil } from "@/app/_utils";
import "./BarChartStack.scss";

type BarChartStackType = {
  chartData: number[][];
  chartLabel: string[];
};

const BarchartStack = ({ chartData, chartLabel }: BarChartStackType) => {
  const [barChartData, setBarChartData] = useState<number[][]>(chartData);
  const [barChartLabel, setBarChartLabel] = useState<string[]>(chartLabel);

  // Update bar chart data and labels when props change
  useEffect(() => {
    setBarChartData(chartData);
    setBarChartLabel(chartLabel);
  }, [chartData, chartLabel]);

  // Tooltip state
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    position: React.CSSProperties;
    value: number;
    index: number | null;
    barIndex: number | null;
  }>({
    visible: false,
    position: {},
    value: 0,
    index: null,
    barIndex: null,
  });

  const { formatNumber } = commonUtil;

  // Calculate max value in chart data for scaling bars
  const maxValue = useMemo(
    () => Math.max(...barChartData.flat()),
    [barChartData]
  );

  const showTooltip = (index: number, value: number, barIndex: number) => {
    setTooltip({
      visible: true,
      value,
      index,
      barIndex,
      position: {
        bottom: "64%", // Display above the bar
        left: `calc(${(index / barChartLabel.length) * 100}% - 24px)`,
      },
    });
  };

  const hideTooltip = () => {
    setTooltip((prev) => ({
      ...prev,
      visible: false,
      index: null,
      barIndex: null,
    }));
  };

  return (
    <div className="bar-chart-container">
      <div className="bars-container">
        {/* BAR GROUP */}
        {barChartLabel.map((label, index) => (
          <div className="bar-group" key={index}>
            <div className="bars-wrapper">
              {[barChartData[0][index], barChartData[1][index]].map(
                (value, i) => (
                  <div
                    className={`bar ${i === 0 ? "bar-inflow" : "bar-outflow"}`}
                    key={i}
                    style={{ height: `${(value / maxValue) * 100}%` }}
                    onMouseEnter={() => showTooltip(index, value, i)}
                    onMouseLeave={hideTooltip}
                  >
                    {tooltip.visible &&
                      tooltip.index === index &&
                      tooltip.barIndex === i && (
                        <div className="tooltip" style={tooltip.position}>
                          {formatNumber(value)}
                        </div>
                      )}
                  </div>
                )
              )}
            </div>

            {/* BAR LABEL */}
            <div className="label">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarchartStack;
