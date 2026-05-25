import App_Function from "./component/App_Function"
import Title from "./component/Title"
import Todo_Item from "./component/Todo_Item"
import "./App.css"
import { useState } from "react";

function App() {

  let [taskItems, setTaskItems] = useState([]);

  function handleNewItem(itemName, itemDate){
    // console.log(`Name : ${itemName} , Date : ${itemDate}`);
    let newTodoItems = [...taskItems, {
      todoName : itemName,
      todoDate : itemDate,
    }];
    setTaskItems(newTodoItems);
  }

  function handleDeleteButton(itemName){
    // console.log(`item deleted : ${itemName}`);
    let newTodoItems = taskItems.filter(item => item.todoName !== itemName);
    setTaskItems(newTodoItems);
  }

  return <center>
    <Title/>
    <App_Function onAddTask={handleNewItem}/>
    {taskItems.length === 0 && <p>Enjoy, no pending task</p>}
    <Todo_Item item={taskItems} onDeleteButton={handleDeleteButton}></Todo_Item>
    {/* <Todo_Item todoName="buy coffe" todoDate="20/4/25"/>
    <Todo_Item todoName="watch movie" todoDate="23/5/25"/>
    <Todo_Item todoName="go walk" todoDate="10/2/26"/> */}
  </center>
}

export default App;
