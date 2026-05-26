import { IoBagAdd } from "react-icons/io5";
import styles from './FormField.module.css';

function FormField({ todoName, setTodoName, todoDate, handleSubmit }){
    return (<form onSubmit={handleSubmit}
    className={styles.page}
    >
        <input type='text' 
        placeholder="Enter task name" 
        onChange={(event) => setTodoName(event.target.value)}
        className={styles.todoName}
        ></input>
        <input type='date' 
        ref={todoDate}
        className={styles.todoDate}
        ></input>
        <button type="submit" class="btn btn-outline-success">Add<IoBagAdd /></button>
    </form>);
}

export default FormField;