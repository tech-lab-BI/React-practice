import App_Function from "./component/App_Function"
import Todo_Item from "./component/Todo_Item"
import { useReducer, useState } from "react";

import ItemList from "./context/ItemList";

function reducer(state, action){
  switch(action.type){
    case "ADD":
      state = [...state, {
        todoName : action.payload.todoName,
        todoDate : action.payload.itemDate,
      }];
      break;
    case "DELETE":
      state = state.filter(item => item.todoName !== action.payload.itemName);
      break;
    default:
      console.log("Default action");
  }
  return state;
}

function App() {

  // let [taskItems, setTaskItems] = useState([]);
  const [taskItems, dispatch] = useReducer(reducer, []);

  // function handleNewItem(itemName, itemDate){
  //   let newTodoItems = [...taskItems, {
  //     todoName : itemName,
  //     todoDate : itemDate,
  //   }];
  //   setTaskItems(newTodoItems);
  // }

  // function handleDeleteButton(itemName){
  //   let newTodoItems = taskItems.filter(item => item.todoName !== itemName);
  //   setTaskItems(newTodoItems);
  // }

  // let ob = {
  //   items : taskItems,
  //   handleNewItem : handleNewItem,
  //   handleDeleteButton : handleDeleteButton,
  // }
  let ob={
    taskItems: taskItems,
    dispatch: dispatch,
  }


  return (<center>

    <h1>ToDo React App</h1>
    {taskItems.length === 0 && <p>Enjoy, no pending task</p>}
    <ItemList.Provider value={ob}>
      <App_Function/>
      <Todo_Item></Todo_Item>
    </ItemList.Provider>
    
  </center>);
}

export default App;
