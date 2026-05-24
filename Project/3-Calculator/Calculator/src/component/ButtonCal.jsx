import { useState } from "react";
import style from "./ButtonCal.module.css";

function ButtonCal(props){
    // let buttonArray = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']

    return (<>
        {props.buttonArray.map((butItem)=>(<button className={style.button} key={butItem}
        onClick={(event) => props.handleButtonClick(event.target.innerText)}
        >{butItem}</button>))}
    </>);
}

export default ButtonCal;