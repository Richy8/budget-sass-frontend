"use client";

import { useRef, useState } from "react";
import { ClickOutsideWrapper } from "@/app/_components";
import { PlusIcon, MinusIcon } from "@heroicons/react/16/solid";
import "./FAQCard.scss";

const FAQCard = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const dropdownRef = useRef<any>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <div className="faq-card">
      <div
        className="faq-top"
        ref={dropdownRef}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div className="faq-top--left">{question}</div>

        <div className="faq-top--right">
          {showDropdown ? (
            <PlusIcon className="faq-icon" />
          ) : (
            <MinusIcon className="faq-icon" />
          )}
        </div>
      </div>

      <ClickOutsideWrapper
        togglerRef={dropdownRef}
        showDropdown={showDropdown}
        toggleDropdown={setShowDropdown}
      >
        <div className="faq-bottom">{answer}</div>
      </ClickOutsideWrapper>
    </div>
  );
};

export default FAQCard;
