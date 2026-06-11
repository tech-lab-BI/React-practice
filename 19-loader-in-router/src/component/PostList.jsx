import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostListContext as PostListData } from "../store/PostList-store";
import EmptyPost from "./EmptyPost";
import LoadingMessage from "./LoadingMessage";
import { useLoaderData } from "react-router-dom";

function PostList() {
  const { postList, getBulkPost } = useContext(PostListData);
  const posts = useLoaderData();
  
  useEffect(() => {
    getBulkPost(posts);
  }, [posts]);

  return (
    <>
      {/* {loadingStatus && <LoadingMessage />} */}
      {postList.length === 0 && <LoadingMessage />}
      {postList.length === 0 && <EmptyPost />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
export default PostList;

export const PostListLoad = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
  console.log("fetch end");
};
