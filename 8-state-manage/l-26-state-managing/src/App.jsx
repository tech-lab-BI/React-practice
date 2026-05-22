import styles from './App.module.css';
import Items from "./component/Item";
import Display from "./component/Display";
import { useState } from 'react';

function App() {

  let fruitsList = ["apple", "banana", "guava", "pinaple","footy"];

  // let textMessage = useState("What you type i will display");//display under input box
  // let a = textMessage[0];//value
  // let b = textMessage[1];//method
  // let {a,b} = useState("hi"); //object de-structuring --can't work here
  let [a,b] = useState("What you type i will display"); //array de-structuring

  let itemHistory = useState("No item purchesed");
  let currentItem = itemHistory[0];
  let setItem = itemHistory[1];
  
  function handleBuyButton(x){
    console.log(`${x} purchsed successfully.`);
    setItem(x);
  };
  function handleInput(e){
    console.log(e.target.value);
    b(e.target.value);
  }



  return (<div className={styles.chart}>

    <h1>Fruites List</h1>
    <Display clickFunc={handleInput}></Display>
    <p>{a}</p>
    <Items items={fruitsList} clickFunc={handleBuyButton}></Items>
    <p>Last item purchsed : {currentItem}</p>

  </div>);
}

export default App;