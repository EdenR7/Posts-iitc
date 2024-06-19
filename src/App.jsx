import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import UserProfile from "./pages/UserProfile";
import PostFeedPage from "./pages/PostFeedPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import CreatePostPage from "./pages/CreatePostPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts_feed">
          <Route index element={<PostFeedPage />} />
          <Route path="create" element={<CreatePostPage />} />
          <Route path=":postId" element={<PostDetailsPage />} />
        </Route>
        <Route path="/user" element={<UserProfile />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
