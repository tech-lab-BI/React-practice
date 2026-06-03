import { useState } from "react";
import "./App.css";
import CreatePost from "./component/CreatePost";
import Footer from "./component/Footer";
import Header from "./component/Header";
import PostList from "./component/PostList";
import SideBar from "./component/SideBar";
import PostListProvider from "./store/PostList-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
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
