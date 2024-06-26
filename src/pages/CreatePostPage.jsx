import React, { useState } from "react";
import { addNewPost } from "../utils/utilsCrud";
import { getCurrentDateTime } from "../utils/utilsFunc";

function CreatePostPage() {
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
    userId: "9b5b7206-0ddf-4fda-850b-58822e33383c",
    reactions: {
      likes: 0,
    },
    comments: [],
    createdAt: "",
    updatedAt: "",
  });

  return (
    <div id="create-post-wrrapper">
      <form
        id="create-post-form"
        onSubmit={async (ev) => {
          ev.preventDefault();
          addNewPost({
            ...newPost,
            createdAt: getCurrentDateTime(),
            updatedAt: getCurrentDateTime(),
          });
        }}
      >
        <div className="create-group">
          <label htmlFor="create-post-title">Title</label>
          <input
            value={newPost.title}
            type="text"
            id="create-post-title"
            onChange={(ev) => {
              setNewPost((prev) => {
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
            value={newPost.body}
            type="text"
            id="create-post-body"
            onChange={(ev) => {
              setNewPost((prev) => {
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

export default CreatePostPage;
