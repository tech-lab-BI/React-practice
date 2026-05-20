import style from './BodyCal.module.css';
import ButtonCal from './ButtonCal';

function BodyCal(){
    return (<div className={style.buttonContainer}>
      <ButtonCal></ButtonCal>
    </div>);
}

export default BodyCal;