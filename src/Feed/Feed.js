import React from "react";
import "./feed.scss";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";
import StoryReel from "./StoryReel/StoryReel";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://scontent.fpnq7-3.fna.fbcdn.net/v/t1.6435-9/92463967_108509697478794_7376816041248161792_n.jpg?_nc_cat=101&cb=c578a115-c1c39920&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=SFxxi7XzE_EAX_3qAxd&_nc_ht=scontent.fpnq7-3.fna&oh=634d135246c2f1c95efdbbb00aea35b5&oe=61C783E6"
        message="Try Out..."
        timeStamp="This is demo"
        username="Million Dollar Vegan"
        image="https://scontent.fpnq7-4.fna.fbcdn.net/v/t1.6435-9/133982927_216433133353116_403887511979545190_n.jpg?_nc_cat=111&cb=c578a115-c1c39920&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=cVnHjgk-djIAX-uo875&_nc_ht=scontent.fpnq7-4.fna&oh=f26fffbfde47c85e2be1b1acd76e951d&oe=61C86214"
      />
      <Post
        profilePic="https://scontent.fpnq7-1.fna.fbcdn.net/v/t1.6435-9/120968604_10157792325131302_7014261584916210311_n.jpg?_nc_cat=100&cb=c578a115-c1c39920&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=m2TIYCB7JLsAX-1ZEVb&_nc_ht=scontent.fpnq7-1.fna&oh=4cc72f0ef072fb5a6d5353d08da6da61&oe=61C7BA12"
        message="Don't miss an amazing deal"
        timeStamp="This is demo"
        username="XDA Developers"
        image="https://external.fpnq7-3.fna.fbcdn.net/safe_image.php?d=AQGhHystrCaQocn6&w=500&h=261&url=https%3A%2F%2Fwww.xda-developers.com%2Ffiles%2F2021%2F08%2FSamsung-Galaxy-Z-Flip-3-review-xda-lavender-hero-image3.jpg&cfs=1&ext=jpg&_nc_oe=6f1c6&_nc_sid=06c271&ccb=3-5&_nc_hash=AQH6Nt_t_mAr8Fjr"
      />
      {/* Message Sender */}
    </div>
  );
}

export default Feed;
