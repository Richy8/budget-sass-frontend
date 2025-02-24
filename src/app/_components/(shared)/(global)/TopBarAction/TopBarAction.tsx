"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { TopbarMenu, ClickOutsideWrapper } from "@/app/_components";
import "./TopBarAction.scss";

const TopBarAction = () => {
  const dropdownRef = useRef<any>();
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <div className="topbar-option">
      {/* PROFILE AVATAR */}
      <div className="profile-wrapper relative">
        <div
          className="profile-toggler"
          ref={dropdownRef}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <div className="profile-info">
            <div className="profile-name">Efemena Elvis</div>
            <div className="profile-role">Project Owner</div>
          </div>

          <div className="item-circle profile">
            <Image
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={40}
              height={40}
            />
          </div>

          <div
            className={`relative icon-toggle icon-caret-down transition duration-300 ease-out ${
              showDropdown ? "rotate-180" : "rotate-0"
            }`}
          ></div>
        </div>

        {/* DROPDOWN */}
        <ClickOutsideWrapper
          togglerRef={dropdownRef}
          showDropdown={showDropdown}
          toggleDropdown={setShowDropdown}
        >
          <TopbarMenu />
        </ClickOutsideWrapper>
      </div>
    </div>
  );
};

export default TopBarAction;
