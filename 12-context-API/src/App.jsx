import App_Function from "./component/App_Function"
import Todo_Item from "./component/Todo_Item"
import { useState } from "react";

import ItemList from "./context/ItemList";

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

  let ob = {
    items : taskItems,
    handleNewItem : handleNewItem,
    handleDeleteButton : handleDeleteButton,
  }


  return (<div>

    <h1>ToDo React App</h1>
    {taskItems.length === 0 && <p>Enjoy, no pending task</p>}
    <ItemList.Provider value={ob}>
      <App_Function/>
      <Todo_Item></Todo_Item>
    </ItemList.Provider>
    
  </div>);
}

export default App;
