import style from './App.module.css';
import Title from './component/Title';
import Display from './component/Display';
import BodyCal from './component/BodyCal';

function App() {
  

  return (<div className={style.calculator}>
    <Title></Title>
    <Display></Display>
    <BodyCal></BodyCal>
  </div>);
}

export default App;
