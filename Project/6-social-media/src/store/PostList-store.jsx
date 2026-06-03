import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
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
    default:
      console.log("ERROR handle");
  }
  return state;
}

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(reducer, DEFAULT_POST_LIST);

  const addPost = (id, title, body, reaction, userID, tags) => {
    dispatchPostList({type: "ADD",
        payload: {
            id : id,
            title : title,
            body : body,
            reaction : reaction,
            userID : userID,
            tags : tags,
        }
    })
  };
  const deletePost = (postID) => {
    dispatchPostList({ type: "DELETE", payload: postID });
  };

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "visit mumbai",
    body: "Hello guys, i visit mumbai for vacation and enjoy a lot",
    reaction: 3, //count rections
    userID: "u3",
    tags: ["vacation", "mumbai", "tour"],
  },
  {
    id: "2",
    title: "dancing video",
    body: "It my first dancing video, hope you enjoy lot , plz follow and like",
    reaction: 9, //count rections
    userID: "u6",
    tags: ["dance", "music", "self"],
  },
];

export default PostListProvider;
