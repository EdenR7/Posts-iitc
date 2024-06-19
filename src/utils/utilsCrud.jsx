import axios from "axios";
const POSTS_URL = "http://localhost:8001/posts/";
const USERS_URL = "http://localhost:8001/users/";

export async function matchUsernametoId(id) {
  try {
    const { data } = await axios.get(USERS_URL + id);
    return data.username;
  } catch (error) {
    throw error;
  }
}

export async function addNewPost(post) {
  try {
    axios.post(POSTS_URL, post);
  } catch (err) {
    console.error(err);
  }
}

export async function updatePostByPatch(reqBody, id) {
  try {
    await axios.patch(POSTS_URL + id, reqBody);
  } catch (err) {
    throw err;
  }
}
