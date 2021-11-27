import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import VideocamIcon from "@mui/icons-material/Videocam";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./MessageSender.scss";

function MessageSender({ userName = "Anurag Arwalkar" }) {
  const [input, setInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const setValue = (callbackFn, e) => callbackFn(e.target.value);
  const setImgUrlHandler = (e) => setValue(setImgUrl, e);
  const setInputHandler = (e) => setValue(setInput, e);

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form className="messageSender__top__form">
          <input
            value={input}
            onChange={setInputHandler}
            className="messageSender__top__form--input"
            type="text"
            placeholder={`Whats on your mind?`}
          />
          <input
            type="text"
            value={imgUrl}
            onChange={setImgUrlHandler}
            placeholder="Image URL optional"
          />
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
