import React from "react";
import { refactorTime } from "../../utils/utilsFunc";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";

const POSTS_URL = "http://localhost:8001/posts/";

export function PostDetails(props) {
  const { toggleValue, curPost } = props;
  return (
    <div className="post-details-wrapper ">
      <div className="post-header flex-group">
        <div className="post-header__context">
          <div className="post-header__avatar"></div>
          <h5 className="post-header__username">{"rfgerfre"}</h5>
        </div>
        <div className="post-header__icons-wrapper flex-group">
          <button
            type="button"
            className="btn"
            onClick={(ev) => {
              toggleValue(true);
            }}
          >
            Edit Mode
          </button>
          <button type="button" className="btn">
            Remove
          </button>
        </div>
      </div>
      <div className="post-body">
        <h3 className="post-body__title">{curPost.title} </h3>
        <p className="post-body__title-body">{curPost.body}</p>
      </div>
      <div className="post-reactions">
        <div className="post-reaction__likes">
          <FavoriteIcon sx={{ fontSize: "1rem", color: "red" }} />
          <p className="post-reaction__likes-total">
            {curPost.reactions.likes}
          </p>
        </div>
        <div className="post-reaction__comments">
          <CommentIcon sx={{ fontSize: "1rem" }} />
          <p className="post-reaction__likes-total">
            {curPost.comments.length}
          </p>
        </div>
      </div>
      <div className="post-footer">
        <p className="post-footer__created">
          <span className="date">{refactorTime(curPost.createdAt).date}</span>
          <span className="time">{refactorTime(curPost.createdAt).time}</span>
        </p>
      </div>
    </div>
  );
}
