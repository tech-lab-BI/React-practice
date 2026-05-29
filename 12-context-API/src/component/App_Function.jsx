import { useContext, useRef } from "react";
import { MdAddToQueue } from "react-icons/md";
import Todo_Item from "./Todo_Item";

import ItemList from "../context/ItemList";

function App_Function() {

  let todoName = useRef();
  let dueDate = useRef();
  let data = useContext(ItemList);

  function handleSubmit(event){
    event.preventDefault();
    // props.handleNewItem(todoName.current.value ,dueDate.current.value);
    data.handleNewItem(todoName.current.value ,dueDate.current.value);
    todoName.current.value = "";
    dueDate.current.value = "";
  }

  return (<form className='row def-row' onSubmit={handleSubmit}>
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
    </form>);
}

export default App_Function;
