import { useRef } from "react";
import { MdAddToQueue } from "react-icons/md";

function App_Function(props) {

  let todoName = useRef();
  let dueDate = useRef();

  function handleSubmit(event){
    event.preventDefault();
    props.onAddTask(todoName.current.value ,dueDate.current.value);
    todoName.current.value = "";
    dueDate.current.value = "";
  }

  return (
    <form className='row def-row' onSubmit={handleSubmit}>
      <div className="col-6">
        <input 
          type="text" 
          placeholder="Enter task Here"
          ref={todoName}
        ></input>
      </div>
      <div className="col-4">
        <input 
          type="date"
          ref={dueDate}
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
