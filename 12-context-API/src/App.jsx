import App_Function from "./component/App_Function"
import Title from "./component/Title"
import Todo_Item from "./component/Todo_Item"
import "./App.css"
import { useState } from "react";

function App() {

  let [taskItems, setTaskItems] = useState([]);

  function handleNewItem(itemName, itemDate){
    let newTodoItems = [...taskItems, {
      todoName : itemName,
      todoDate : itemDate,
    }];
    setTaskItems(newTodoItems);
  }

  function handleDeleteButton(itemName){
    let newTodoItems = taskItems.filter(item => item.todoName !== itemName);
    setTaskItems(newTodoItems);
  }

  return <center>
    <Title taskItems={taskItems}/>
    <App_Function onAddTask={handleNewItem}/>
    <Todo_Item item={taskItems} onDeleteButton={handleDeleteButton}></Todo_Item>
  </center>
}

export default App;
