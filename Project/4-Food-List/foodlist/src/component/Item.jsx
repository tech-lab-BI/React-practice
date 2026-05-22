import { Button } from 'bootstrap';
import styles from './Item.module.css';

function Items(props){

    //fruitsList, handleBuyButten


    return (<ul className={`${styles['biList']} list-group`}>

        {props.items.map((item)=>(<li className="list-group-item" key={item}>
            {item}
            <button type="button" className={`${styles['button']} btn btn-info`}
            // onClick={() => console.log(`${item} purchased`)}
            onClick={() => props.clickFunc(item)}
            >Buy</button>
        </li>))}

    </ul>);
};

export default Items;