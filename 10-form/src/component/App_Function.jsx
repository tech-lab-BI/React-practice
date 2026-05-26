import { useState } from "react";
import { MdAddToQueue } from "react-icons/md";

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

  function handleSubmit(event){
    event.preventDefault();
    handleAddButton();
  }

  return (
    <form className='row def-row' onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-success">
          <MdAddToQueue />
        </button>
      </div>
    </form>
  );
}

export default App_Function;
