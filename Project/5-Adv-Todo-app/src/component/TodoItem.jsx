import { MdDeleteForever } from "react-icons/md";
import styles from './TodoItem.module.css';

function TodoItem(props){
    return (<div className={styles.item}>
        <span className={styles.itemName}>{props.todoName}</span>
        <span className={styles.itemDate}>{props.todoDate}</span>
        <button type="button" 
        class="btn btn-outline-danger"
        onClick={(e) => handleDelete(e)}
        >Delete<MdDeleteForever /></button>
    </div>);
}

export default TodoItem;