import { useState } from "react"; 

function App_Function(props) {

  let [todoName, setTodoName] = useState("");
  let [dueDate, setDueDate] = useState("");

  function handleTodoName(event){
    setTodoName(event.target.value);
  }
  function handleDueDate(event){
    setDueDate(event.target.value);
  }
  function handleAddButton(){
    props.onAddTask(todoName ,dueDate);
    setTodoName("");
    setDueDate("");
  }

  return (
    <div className='row def-row'>
      <div className="col-6">
        <input type="text" placeholder="Enter task Here"
          onChange={handleTodoName}
          value={todoName}
        ></input>
      </div>
      <div className="col-4">
        <input type="date"
          onChange={handleDueDate}
          value={dueDate}
        ></input>
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success"
          onClick={handleAddButton}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default App_Function;
