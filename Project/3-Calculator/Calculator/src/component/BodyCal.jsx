import style from './BodyCal.module.css';
import ButtonCal from './ButtonCal';

function BodyCal(props){
    return (<div className={style.buttonContainer}>
      <ButtonCal buttonArray={props.buttonArray} handleButtonClick={props.handleButtonClick}></ButtonCal>
    </div>);
}

export default BodyCal;