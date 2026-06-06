import { useState, useContext } from "react";
import "./App.css";
import CreatePost from "./component/CreatePost";
import Footer from "./component/Footer";
import Header from "./component/Header";
import PostList from "./component/PostList";
import SideBar from "./component/SideBar";
import PostListProvider, { PostListContext } from "./store/PostList-store";
import EmptyPost from "./component/EmptyPost";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const { postList } = useContext(PostListContext);
  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <SideBar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          ></SideBar>
          <div className="content">
            <Header></Header>
            {selectedTab === "Home" ? <PostList /> : <CreatePost />}
            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
