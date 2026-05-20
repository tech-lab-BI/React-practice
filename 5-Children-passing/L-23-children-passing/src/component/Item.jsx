import styles from './Item.module.css';

function Items(props){
    return <div className={styles.chart}>
        {props.children}
    </div>
};

export default Items;