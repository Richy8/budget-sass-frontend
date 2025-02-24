import React from "react";
import Image from "next/image";
import { BlockLoader } from "@/app/_assets";

const BudgetLoader = () => {
  return (
    <div className="loading-card bg-yellow-100/20 pt-6 pb-10 min-h-[450px] h-auto flex flex-col justify-center items-center w-full">
      <Image
        src={BlockLoader}
        alt="block-loader"
        className="mb-1"
        width={120}
        height={120}
      />

      <div className="text-neutral-900 font-medium text-xl lg:text-2xl mb-3">
        Fetching Budget Data
      </div>

      <div className="text-grey-800 text-[15px] lg:text-base mb-1">
        Updating data visualization graph
      </div>
      <div className="text-grey-700/80 text-[13px] lg:text-base">
        This should only take some few minutes
      </div>
    </div>
  );
};

export default BudgetLoader;
