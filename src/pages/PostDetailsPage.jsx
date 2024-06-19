import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCurrentDateTime, refactorTime } from "../utils/utilsFunc";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import useToggle from "../hooks/useToggle";
import { updatePostByPatch } from "../utils/utilsCrud";
import { PostDetails } from "../components/PostDetailPage/PostDetails";
import { EditPost } from "../components/PostDetailPage/EditPost";

const POSTS_URL = "http://localhost:8001/posts/";

// export function EditPost(props) {
//   const { editPost, toggleValue, setEditPost } = props;
//   return (
//     <div className="edit-post-details">
//       <form
//         id="create-post-form"
//         onSubmit={async (ev) => {
//           try {
//             ev.preventDefault();
//             await updatePostByPatch(
//               { ...editPost, updatedAt: getCurrentDateTime() },
//               editPost.id
//             );
//             toggleValue(false);
//           } catch (err) {
//             throw err;
//           }
//         }}
//       >
//         <div className="create-group">
//           <label htmlFor="create-post-title">Title</label>
//           <textarea
//             value={editPost.title}
//             type="text"
//             id="create-post-title"
//             onChange={(ev) => {
//               setEditPost((prev) => {
//                 return {
//                   ...prev,
//                   title: ev.target.value,
//                 };
//               });
//             }}
//           />
//         </div>
//         <br />
//         <div className="create-group">
//           <label htmlFor="create-post-body">Post Content</label>
//           <textarea
//             value={editPost.body}
//             type="text"
//             id="create-post-body"
//             onChange={(ev) => {
//               setEditPost((prev) => {
//                 return {
//                   ...prev,
//                   body: ev.target.value,
//                 };
//               });
//             }}
//           />
//         </div>
//         <div className="create-group">
//           <button className="btn" type="submit">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

function PostDetailsPage() {
  const { postId } = useParams();
  const [editPost, setEditPost] = useState({});
  const [curPost, setCurPost] = useState({
    id: "",
    title: "",
    body: "",
    userId: "",
    reactions: {
      likes: 0,
    },
    comments: [],
    createdAt: "2024-06-19T19:53:06",
    updatedAt: "",
  });
  const [value, toggleValue] = useToggle(false);
  async function getPost() {
    try {
      const { data } = await axios.get(POSTS_URL + postId);
      setEditPost(data);
      setCurPost(data);
    } catch (err) {
      throw err;
    }
  }
  useEffect(() => {
    getPost();
  }, [value]);

  return (
    <>
      <div className="modal"></div>
      {value ? (
        <EditPost
          editPost={editPost}
          setEditPost={setEditPost}
          toggleValue={toggleValue}
        />
      ) : (
        <PostDetails curPost={curPost} toggleValue={toggleValue} />
      )}
    </>
  );
}

export default PostDetailsPage;
