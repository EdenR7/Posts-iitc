import { PostItem } from "./PostItem";

export function PostList(props) {
  const { posts } = props;
  return (
    <ul id="posts-wrapper">
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </ul>
  );
}
