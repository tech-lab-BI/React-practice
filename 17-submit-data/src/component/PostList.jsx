import { useContext, useState, useEffect } from "react";
import Post from "./Post";
import { PostListContext as PostListData } from "../store/PostList-store";
import EmptyPost from "./EmptyPost";
import LoadingMessage from "./LoadingMessage";

function PostList() {
  const { postList, loadingStatus } = useContext(PostListData);

  return (
    <>
      {loadingStatus && <LoadingMessage />}
      {!loadingStatus && postList.length === 0 && <EmptyPost />}
      {!loadingStatus &&
        postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}
export default PostList;
