import axios from "axios";
const POSTS_URL = "http://localhost:8001/posts/";
const USERS_URL = "http://localhost:8001/users/";

export async function matchUsernametoId(id) {
  try {
    const { data } = await axios.get(USERS_URL + id);
    return data.username;
    // console.log(data);
  } catch (error) {
    throw error;
  }
}
