import styles from './App.module.css';
import Items from "./component/Item";
import Display from "./component/Display";
import { useState } from 'react';

function App() {

  // let fruitsList = ["apple", "banana", "guava", "pinaple","footy"];

  let [fruitsList, addFruits] = useState(["apple", "banana"]); //array de-structuring

  let itemHistory = useState("No item purchesed");
  let currentItem = itemHistory[0];
  let setItem = itemHistory[1];
  function handleBuyButton(x){
    alert(`${x} purchsed successfully.`)
    // console.log(`${x} purchsed successfully.`);
    setItem(x);
  };


  function handleInput(e){
    if(e.key === "Enter"){
      let newFruit = e.target.value;
      let newFruits = [...fruitsList, newFruit]
      addFruits(newFruits);
    }
  }

  //if item buy , background color should change


  return (<div className={styles.chart}>

    <h1>Fruites List</h1>
    <Display clickFunc={handleInput}></Display>
    {/* <p>{fruitsList}</p> */}
    <Items items={fruitsList} clickFunc={handleBuyButton}></Items>
    <p>Last item purchsed : {currentItem}</p>

  </div>);
}

export default App;