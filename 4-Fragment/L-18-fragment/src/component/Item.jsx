function Items({data}){
    // let Items = ["apple", "banana", "guava", "pinaple"];
    return <>
        {/* <ul className="list-group">{props.map((item, index) => (<li key={index} className="Item-list">{item}</li>))}</ul> */}
        <ul>
            {data.map((item, index)=>(<li key={index}>{item}</li>))}
        </ul>
        {/* <p>{props.name}, {props.age}</p> */}
    </>
};

export default Items;