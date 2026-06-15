import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import Header from "./components/Header";
import Display from "./components/Display";
import Controls from "./components/Controls";
import PrivacyMessage from "./components/PrivacyMessage";
import { useSelector } from "react-redux";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <Container>
        <Header/>
        {privacy ? <PrivacyMessage/>:<Display/>}
        <Controls/>
      </Container>
    </>
  );
}

export default App;
