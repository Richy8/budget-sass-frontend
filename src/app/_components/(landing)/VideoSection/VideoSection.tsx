import React from "react";
import "./VideoSection.scss";

const VideoSection = () => {
  return (
    <div className="app-container video-container" id="howItWorks">
      <div className="video-wrapper">
        <video
          poster="https://res.cloudinary.com/budgit/image/upload/v1712941593/videothumbnail_n96inp.jpg"
          autoPlay
          loop
          muted
          width="100%"
          height="100%"
          playsInline
          preload="auto"
        >
          <source
            src="https://res.cloudinary.com/budgit/video/upload/v1712938544/Budget_About_US_pu4qns.mp4"
            type="video/mp4"
          ></source>

          <span data-nosnippet="true">
            {"Sorry, your browser doesn't support videos."}
          </span>
        </video>
      </div>
    </div>
  );
};

export default VideoSection;
