import { useContext, useState, useEffect } from "react";
import Post from "./Post";
import { PostListContext as PostListData } from "../store/PostList-store";
import EmptyPost from "./EmptyPost";
import LoadingMessage from "./LoadingMessage";

function PostList() {
  const { postList, getBulkPost } = useContext(PostListData);
  const [loadingStatus, setLoadingStatus] = useState(false);

  useEffect(() => {
    console.log("fetch start");
    setLoadingStatus(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        getBulkPost(data.posts);
        console.log("fetch successful");

        // getBulkPost([]); //if data not fetch
        // console.log("fetch unsuccessful");
        setLoadingStatus(false);
      });
    console.log("fetch end");
  }, []);

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
