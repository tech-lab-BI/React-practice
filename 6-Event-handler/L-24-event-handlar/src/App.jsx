import styles from './App.module.css';
import Items from "./component/Item";
import Display from "./component/Display";

function App() {
  
  return (<div className={styles.chart}>
    <h1>Fruites List</h1>
    <Display></Display>
    <Items></Items>
  </div>);
}

export default App;