function Title({ taskItems = [] }){
    return (<>
        <h1>ToDo React App</h1>
        {taskItems.length === 0 && <p>Enjoy, no pending task</p>}
    </>);
}

export default Title;