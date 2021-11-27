import { Avatar } from "@mui/material";
import React from "react";
import "./story.scss";

function Story({ img, profileSrc, title }) {
  return (
    <div className="story">
      <Avatar src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
