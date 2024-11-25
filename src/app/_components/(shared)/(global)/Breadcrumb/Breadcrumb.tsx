import React from "react";
import Link from "next/link";
import "./Breadcrumb.scss";

const Breadcrumb = ({
  itemText,
  itemLink,
}: {
  itemText?: string;
  itemLink?: string;
}) => {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb-item inactive-item">
        <div className="icon icon-home"></div>
        <div className="text">Home</div>
      </div>
      <div className="breadcrumb-line">
        <div className="icon icon-caret-right"></div>
      </div>
      <div className="breadcrumb-item">
        <Link href="/overview" className="text">
          Overview
        </Link>
      </div>
      {itemText && (
        <>
          <div className="breadcrumb-line">
            <div className="icon icon-caret-right"></div>
          </div>

          <div className="breadcrumb-item">
            <Link href={itemLink || ""} className="text">
              {itemText}
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
