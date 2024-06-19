import React from "react";

function CreatePostPage() {
  return (
    <div id="create-post-wrrapper">
      <form id="create-post-form">
        <div className="create-group">
          <label htmlFor="create-post-title">Title</label>
          <input type="text" id="create-post-title" />
        </div>
      </form>
    </div>
  );
}

export default CreatePostPage;
