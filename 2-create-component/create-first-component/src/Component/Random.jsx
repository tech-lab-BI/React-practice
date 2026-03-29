function Random(){
    let number = Math.random() * 100;
    return <p>Random created number :: {Math.round(number)}</p>
}

export default Random;