import React from "react";
import Image from "next/image";
import "./TopbarMenu.scss";
import Link from "next/link";

const TopbarMenu = () => {
  return (
    <div className="base-dropdown menu-card">
      {/* PROFILE DETAILS */}
      <div className="profile-details">
        <div className="profile-avatar">
          <Image
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={32}
            height={32}
          />
        </div>

        <div className="profile-info">
          <div className="profile-name">Efemena Elvis</div>
          <div className="profile-email">efemenaelvis@gmail.com</div>
        </div>
      </div>

      {/* MENU LIST */}
      <div className="menu-list">
        <Link href="" className="dropdown-item menu-list-item">
          <div className="icon icon-user"></div>
          <div className="text">User Profile</div>
        </Link>

        <Link href="" className="dropdown-item menu-list-item">
          <div className="icon icon-security-safe"></div>
          <div className="text">Change Password</div>
        </Link>

        {/* <Link href="" className="dropdown-item menu-list-item">
          <div className="icon icon-cog"></div>
          <div className="text">Settings</div>
        </Link> */}

        <Link href="" className="dropdown-item menu-list-item">
          <div className="icon icon-help"></div>
          <div className="text">Help Center</div>
        </Link>

        <Link href="" className="dropdown-item menu-list-item">
          <div className="icon icon-logout"></div>
          <div className="text">Sign Out</div>
        </Link>
      </div>
    </div>
  );
};

export default TopbarMenu;
