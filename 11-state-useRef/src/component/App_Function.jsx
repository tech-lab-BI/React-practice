import { useRef } from "react";
import { MdAddToQueue } from "react-icons/md";

function App_Function(props) {

  // let [todoName, setTodoName] = useState("");
  // let [dueDate, setDueDate] = useState("");
  let todoName = useRef();
  let dueDate = useRef();

  // function handleTodoName(event){
  //   setTodoName(event.target.value);
  // }
  // function handleDueDate(event){
  //   setDueDate(event.target.value);
  // }
  // function handleAddButton(){
    // props.onAddTask(todoName ,dueDate);
    // console.log(todoName.current.value);
    // console.log(dueDate.current.value);
    // setTodoName("");
    // setDueDate("");
  // }

  function handleSubmit(event){
    event.preventDefault();
    props.onAddTask(todoName.current.value ,dueDate.current.value);
    // console.log(todoName.current.value);
    // console.log(dueDate.current.value);
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
