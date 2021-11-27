import { Avatar } from "@mui/material";
import React from "react";

function Post({ profilePic, image, userName, timeStamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} />
      </div>
    </div>
  );
}

export default Post;
