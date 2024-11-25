import React from "react";
import Image from "next/image";
import { GoogleIcon } from "@/app/_assets";
import "./SocialAuth.scss";

const SocialAuth = ({
  googleBtnCopy = "Sign up with Google",
}: {
  googleBtnCopy?: string;
}) => {
  return (
    <div className="social-auth">
      {/* GOOGLE SIGNIN */}
      <button className="btn btn-md btn-secondary social-btn">
        <Image src={GoogleIcon} alt="google-icon" width={22} height={22} />
        <div className="btn-text">{googleBtnCopy}</div>
      </button>
    </div>
  );
};

export default SocialAuth;
