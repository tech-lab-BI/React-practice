import { useContext } from "react";
import Post from "./Post";
import { PostListContext as PostListData } from "../store/PostList-store";
import EmptyPost from "./EmptyPost";

function PostList() {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.length === 0 && <EmptyPost />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
export default PostList;
