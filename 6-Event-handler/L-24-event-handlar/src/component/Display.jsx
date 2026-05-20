import styles from './Display.module.css';

function Display(){
    function handleInput(e){
        // console.log(e);
        console.log(e.target.value)
      }
    return (<input type='text' placeholder='Enter new fruites' 
        className={styles.input}
        onChange={(e1)=>handleInput(e1)}
    ></input>);
};

export default Display;