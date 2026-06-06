import { createContext, useReducer } from "react";

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
  // useEffect(()=>{
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       dispatchPostList({
  //         type: "ADD_BULK",
  //         payload: data.posts,
  //       });
  //     });
  // }, []);

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
  const getBulkPost = (posts) => {
    // fetch("https://dummyjson.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     dispatchPostList({
    //       type: "ADD_BULK",
    //       payload: data.posts,
    //     });
    //   });
    dispatchPostList({
      type: "ADD_BULK",
      payload: posts,
    });
  };

  return (
    <PostListContext.Provider
      value={{ postList, addPost, getBulkPost, deletePost }}
      // value={{ postList, addPost, deletePost }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
