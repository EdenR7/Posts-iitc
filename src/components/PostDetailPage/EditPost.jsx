import React, { useEffect, useState } from "react";
import {  getCurrentDateTime } from "../../utils/utilsFunc";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import { updatePostByPatch } from "../../utils/utilsCrud";

const POSTS_URL = "http://localhost:8001/posts/";

export function EditPost(props) {
  const { editPost, toggleValue, setEditPost } = props;
  return (
    <div className="edit-post-details">
      <form
        id="create-post-form"
        onSubmit={async (ev) => {
          try {
            ev.preventDefault();
            await updatePostByPatch(
              { ...editPost, updatedAt: getCurrentDateTime() },
              editPost.id
            );
            toggleValue(false);
          } catch (err) {
            throw err;
          }
        }}
      >
        <div className="create-group">
          <label htmlFor="create-post-title">Title</label>
          <textarea
            value={editPost.title}
            type="text"
            id="create-post-title"
            onChange={(ev) => {
              setEditPost((prev) => {
                return {
                  ...prev,
                  title: ev.target.value,
                };
              });
            }}
          />
        </div>
        <br />
        <div className="create-group">
          <label htmlFor="create-post-body">Post Content</label>
          <textarea
            value={editPost.body}
            type="text"
            id="create-post-body"
            onChange={(ev) => {
              setEditPost((prev) => {
                return {
                  ...prev,
                  body: ev.target.value,
                };
              });
            }}
          />
        </div>
        <div className="create-group">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
