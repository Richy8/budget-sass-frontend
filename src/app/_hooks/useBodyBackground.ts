"use client";

import { useLayoutEffect } from "react";

const useBodyBackground = (color: string) => {
  useLayoutEffect(() => {
    // Save the original background color
    const originalColor = document.body.style.backgroundColor;

    // Set the new background color
    document.body.style.backgroundColor = color;

    // Cleanup function to reset the background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = originalColor;
    };
  }, [color]);
};

export default useBodyBackground;
