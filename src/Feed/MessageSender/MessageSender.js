import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import VideocamIcon from "@mui/icons-material/Videocam";
import { Avatar } from "@mui/material";
import React from "react";
import "./MessageSender.scss";

function MessageSender({ userName = "Anurag Arwalkar" }) {
  const handleSubmit = (e) => {
    console.log("e:", e);
    e.preventDefault();
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form className="messageSender__top__form">
          <input
            className="messageSender__top__form--input"
            type="text"
            placeholder={`Whats on your mind?`}
          />
          <input type="text" placeholder="Image URL optional" />
          <button type="submit" onSubmit={handleSubmit}>
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__bottom__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__bottom__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__bottom__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
