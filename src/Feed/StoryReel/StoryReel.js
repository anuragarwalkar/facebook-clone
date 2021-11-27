import React from "react";
import Story from "./Story/Story";
import "./storyReel.scss";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        img="https://scontent.fpnq7-3.fna.fbcdn.net/v/t39.30808-6/260390112_4392964327467446_8960707402856651659_n.jpg?_nc_cat=106&cb=c578a115-c1c39920&ccb=1-5&_nc_sid=5b7eaf&_nc_ohc=KnbOcOxay_sAX_jHKTF&_nc_ht=scontent.fpnq7-3.fna&oh=9f782131674fdf8441a23b44e4be73b5&oe=61A5DD5E"
        profileSrc="https://scontent.fpnq7-1.fna.fbcdn.net/v/t1.6435-9/120542090_3193932074037350_1524973582015554007_n.jpg?_nc_cat=109&cb=c578a115-c1c39920&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TiexHmWwhBYAX9zSjL1&tn=vMgeifdw4wCIF98J&_nc_ht=scontent.fpnq7-1.fna&oh=7c0a742427f8a461b5bd800cb249ed08&oe=61C58632"
        title="Avinash Kamthe"
      />
    </div>
  );
}

export default StoryReel;
