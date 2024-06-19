import React, { useEffect, useState } from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { matchUsernametoId } from "../../utils/utilsCrud";
import { refactorTime } from "../../utils/utilsFunc";

export function PostItem(props) {
  const { post } = props;
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserNameById(post.userId);
  }, []);

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
        <Tooltip title="To Post Page">
          <h3 className="post-body__title">
            <Link to={`/posts_feed/${post.id}`}>{post.title}</Link>
          </h3>
        </Tooltip>
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
