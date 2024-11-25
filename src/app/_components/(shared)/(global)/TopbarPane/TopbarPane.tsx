"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { TopbarMenu, ClickOutsideWrapper, TopbarInfo } from "@/app/_components";
import "./TopbarPane.scss";

const TopbarPane = ({ emitShowSidebar }: { emitShowSidebar: () => void }) => {
  const dropdownRef = useRef<any>();
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <div className="topbar-block">
      <div className="topbar-block--left">
        <div className="menu icon-menu" onClick={emitShowSidebar}></div>

        {/* TOPBAR INFO */}
        <TopbarInfo />
      </div>

      {/* TOP ITEMS */}
      <div className="top-items">
        {/* NOTIFICATION */}
        <div className="item-square notification">
          <div className="icon icon-notification"></div>

          <div className="active-pill"></div>
        </div>

        {/* PROFILE AVATAR */}
        <div className="profile-wrapper relative">
          <div
            className="profile-toggler"
            ref={dropdownRef}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div className="item-square profile">
              <Image
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                width={40}
                height={40}
              />
            </div>

            <div className="profile-info">
              <div className="profile-name">Efemena Elvis</div>
              <div className="profile-role">Admin</div>
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
    </div>
  );
};

export default TopbarPane;
