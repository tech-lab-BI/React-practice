import style from "./Display.module.css";

function Display(props){
    return (<>
        <input className={style.display} value={props.displayValue} readOnly></input>    
    </>);
}

export default Display;