import { collection, getDocs } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import db from "../../firebase";
import "./feed.scss";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";
import StoryReel from "./StoryReel/StoryReel";

function Feed() {
  const [posts, setPosts] = useState([]);

  // Get a list of cities from your database
  async function getPosts(db) {
    const postsCol = collection(db, "posts");
    const postsSnap = await getDocs(postsCol);
    const postsList = postsSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setPosts(postsList);
  }

  useEffect(() => {
    getPosts(db);
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((item) => {
        return (
          <Post
            key={item.id}
            profilePic={item.profilePic}
            message={item.message}
            timeStamp={item.timeStamp}
            username={item.username}
            image={item.image}
          />
        );
      })}
    </div>
  );
}

export default Feed;
