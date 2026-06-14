import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import Header from "./components/Header";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Container>
        <Header/>
        <Product/>
      </Container>
    </>
  );
}

export default App;
