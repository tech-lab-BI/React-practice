import styles from './App.module.css';
import Items from "./component/Item";
import Display from "./component/Display";

function App() {

  let fruitsList = ["apple", "banana", "guava", "pinaple","footy"];
  
  function handleBuyButton(x){
    // console.log(e);
    console.log(`${x} purchsed successfully.`)
  };
  
  function handleInput(e){ //event handle
    // console.log(e);
    console.log(e.target.value)
  }

  return (<div className={styles.chart}>

    <h1>Fruites List</h1>
    <Display clickFunc={handleInput}></Display>
    {/* 'clickFunc' same parameter but different function  */}
    <Items items={fruitsList} clickFunc={handleBuyButton}></Items>

  </div>);
}

export default App;