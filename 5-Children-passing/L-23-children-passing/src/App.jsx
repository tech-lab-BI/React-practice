import styles from './App.module.css';
import Items from "./component/Item";

function App() {
  let fruitsList = ["apple", "banana", "guava", "pinaple","footy"];
  return (<div className={styles.chart}>
    <h1>Fruites List</h1>
    <Items>
        <ul>
          {fruitsList.map((item)=>(<li>{item}</li>))}
        </ul>
    </Items>
  </div>);
}

export default App;