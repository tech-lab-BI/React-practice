import { Button } from 'bootstrap';
import styles from './Item.module.css';

function Items(){

    let fruitsList = ["apple", "banana", "guava", "pinaple","footy"];

    function handleBuyButton(x, e){
        console.log(e);
        console.log(`${x} purchased`)
    };

    return (<ul className={`${styles['biList']} list-group`}>
        {fruitsList.map((item)=>(<li className="list-group-item" key={item}>
            {item}
            <button type="button" className={`${styles['button']} btn btn-info`}
            // onClick={() => console.log(`${item} purchased`)}
            onClick={(e2) => handleBuyButton(item, e2)}
            >Buy</button>
        </li>))}
    </ul>);
};

export default Items;