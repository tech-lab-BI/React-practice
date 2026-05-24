import style from './App.module.css';
import Title from './component/Title';
import Display from './component/Display';
import BodyCal from './component/BodyCal';
import { useState } from 'react';

function App() {
  
  let buttonArray = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  let [calVal, setCalVal] = useState("");

  function onButtonClick(buttonText){
    // console.log(buttonText);
    if(buttonText === 'C'){
      setCalVal("");
    }else if(buttonText === '='){
      setCalVal(eval(calVal));
    }else {
      setCalVal(calVal+buttonText);
    }
  }

  return (<div className={style.calculator}>
    <Title></Title>
    <Display displayValue={calVal}></Display>
    <BodyCal buttonArray={buttonArray} handleButtonClick={onButtonClick}></BodyCal>
  </div>);
}

export default App;
