import React from "react";
import "./feed.scss";
import MessageSender from "./MessageSender/MessageSender";
import StoryReel from "./StoryReel/StoryReel";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {/* Message Sender */}
    </div>
  );
}

export default Feed;
