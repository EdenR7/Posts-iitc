import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import { matchUsernametoId } from "../utils/utilsCrud";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { PostItem } from "../components/FeedPage/PostItem";
import { PostList } from "../components/FeedPage/PostList";
const POSTS_URL = "http://localhost:8001/posts";

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
