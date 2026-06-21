import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";
import FetchItems from "../components/FetchItems";
import LoadingMessage from "../components/LoadingMessage";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <FetchItems/>
      {fetchStatus.currentlyFetching ? <LoadingMessage/> : <Outlet/>}
      <Footer />
    </>
  );
}

export default App;
