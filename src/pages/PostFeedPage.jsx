import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import { matchUsernametoId } from "../utils/utilsCrud";
const POSTS_URL = "http://localhost:8001/posts";

export function PostItem(props) {
  const { post } = props;
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserNameById(post.userId);
  }, []);
  function refactorTime(time) {
    const splitted = time.split("T");
    const refacturedTime = splitted[1].split(":");
    return {
      date: splitted[0],
      time: `${refacturedTime[0]}:${refacturedTime[1]}`,
    };
  }
  async function setUserNameById(postId) {
    try {
      setUserName(await matchUsernametoId(postId));
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <li className="post">
      <div className="post-header">
        <div className="post-header__avatar"></div>
        <h5 className="post-header__username">{userName}</h5>
      </div>
      <div className="post-body">
        <h3 className="post-body__title">{post.title}</h3>
        <p className="post-body__title-body">{post.body}</p>
      </div>
      <div className="post-reactions">
        <div className="post-reaction__likes">
          <FavoriteIcon
            sx={{ fontSize: "1rem", cursor: "pointer", color: "red" }}
          />
          <p className="post-reaction__likes-total">{post.reactions.likes}</p>
        </div>
        <div className="post-reaction__comments">
          <CommentIcon sx={{ fontSize: "1rem", cursor: "pointer" }} />
          <p className="post-reaction__likes-total">{post.comments.length}</p>
        </div>
      </div>
      <div className="post-footer">
        <p className="post-footer__created">
          <span className="date">{refactorTime(post.createdAt).date}</span>
          <span className="time">{refactorTime(post.createdAt).time}</span>
        </p>
      </div>
    </li>
  );
}
export function PostList(props) {
  const { posts } = props;
  return (
    <ul id="posts-wrapper">
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </ul>
  );
}
function PostFeedPage() {
  const {
    data: posts,
    setData: setPosts,
    error,
    loading,
  } = useFetch(POSTS_URL);
  const postsToDisplay = [...posts];
  return (
    <>
      <div id="post-feed">
        <PostList posts={postsToDisplay} />
      </div>
    </>
  );
}

export default PostFeedPage;
