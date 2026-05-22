import styles from './Display.module.css';

function Display(props){
    
    return (<input type='text' placeholder='Enter new fruites' 
        className={styles.input}
        // onChange={props.clickFunc}
        onKeyDown={props.clickFunc}
    ></input>);
};

export default Display;