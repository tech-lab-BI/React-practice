import { createContext, useEffect, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  getBulkPost: () => {},
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
  useEffect(()=>{
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", {signal})
      .then((res) => res.json())
      .then((data) => {
        dispatchPostList({
          type: "ADD_BULK",
          payload: data.posts,
        });
      });

    return () => {
      console.log("User move another tab so API calling stop");
      controller.abort();
    }
  }, []);

  const addPost = (id, title, body, reactions, userID, tags) => {
    dispatchPostList({
      type: "ADD",
      payload: {
        id: id,
        title: title,
        body: body,
        reactions: reactions,
        userID: userID,
        tags: tags,
      },
    });
  };
  const deletePost = (postID) => {
    dispatchPostList({ type: "DELETE", payload: postID });
  };
  // const getBulkPost = () => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       dispatchPostList({
  //         type: "ADD_BULK",
  //         payload: data.posts,
  //       });
  //     });
  // };

  return (
    <PostListContext.Provider
      // value={{ postList, addPost, getBulkPost, deletePost }}
      value={{ postList, addPost, deletePost }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
