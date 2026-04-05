import "./App.css"
import Items from "./component/Item";

function App() {
  let fruits = ["apple", "banana", "guava", "pinaple"];
  return <>
    <h1>Fruites List</h1>
    <Items data={fruits}></Items>
    <p>{fruits.map((item, index)=>(<li key={index}>{item}</li>))}</p>
    {/* <Items name="Biki" age={21}></Items> */}
  </>
}

export default App;