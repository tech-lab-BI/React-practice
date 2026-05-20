import style from "./ButtonCal.module.css";

function ButtonCal(){
    let buttonArray = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
    return (<>
        {buttonArray.map((butItem)=>(<button className={style.button} key={butItem}>{butItem}</button>))}
    </>);
}

export default ButtonCal;