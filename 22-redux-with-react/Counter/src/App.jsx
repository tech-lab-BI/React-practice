import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import Header from "./components/Header";
import Display from "./components/Display";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import PrivacyMessage from "./components/PrivacyMessage";

function App() {
  const hide = useSelector((store) => store.privacy);
  // subscribe method in-built
  return (
    <>
      <Container>
        <Header/>
        {hide ? <PrivacyMessage/>:<Display/>}
        <Controls/>
      </Container>
    </>
  );
}

export default App;
