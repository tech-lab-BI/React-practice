import { createContext, useEffect, useReducer, useState } from "react";

export const PostListContext = createContext({
  postList: [],
  loadingStatus: false,
  addPost: () => {},
  deletePost: () => {},
});

function reducer(state, action) {
  switch (action.type) {
    case "DELETE":
      state = state.filter((post) => post.id !== action.payload);
      break;
    case "ADD":
      state = [action.payload, ...state];
      break;
    case "ADD_BULK":
      state = action.payload;
      break;
    default:
      console.log("ERROR handle");
  }
  return state;
}

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(reducer, []);
  const [loadingStatus, setLoadingStatus] = useState(false);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD",
      payload: post,
    });
  };
  const deletePost = (postID) => {
    dispatchPostList({ type: "DELETE", payload: postID });
  };
  const getBulkPost = (posts) => {
    dispatchPostList({
      type: "ADD_BULK",
      payload: posts,
    });
  };

  // useEffect(() => {
  //   console.log("fetch start");
  //   setLoadingStatus(true);
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       getBulkPost(data.posts);
  //       console.log("fetch successful");

  //       // getBulkPost([]); //if data not fetch
  //       // console.log("fetch unsuccessful");
  //       setLoadingStatus(false);
  //     });
  //   console.log("fetch end");
  // }, []);

  return (
    <PostListContext.Provider
      // value={{ postList, loadingStatus, addPost, deletePost }}
      value={{ postList, addPost, deletePost, getBulkPost }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
