import React from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import "./Pagination.scss";

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pagination--left">Showing 1 to 10 of 50 entries</div>

      <div className="pagination--right">
        <div className="nav">
          <ChevronLeftIcon />
          <div className="text">Prev</div>
        </div>

        <div className="page-input">
          <input
            type="number"
            placeholder="1"
            className="form-control page-form-input"
          />

          <div className="page-line">/</div>
          <div className="page-total">50</div>

          <button className="btn btn-primary">Go</button>
        </div>

        <div className="nav">
          <div className="text">Next</div>
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
