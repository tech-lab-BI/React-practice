import App_Function from "./component/App_Function"
import Title from "./component/Title"
import Todo_Item from "./component/Todo_Item"
import "./App.css"

function App() {
  let task = [
    {
      todoName : "Buy coffee",
      todoDate : "20/4/25",
    },
    {
      todoName : "watch movie",
      todoDate : "21/4/24",
    },
  ];
  return <center>
    <Title/>
    <App_Function/>

    <Todo_Item item={task}></Todo_Item>
    {/* <Todo_Item todoName="buy coffe" todoDate="20/4/25"/>
    <Todo_Item todoName="watch movie" todoDate="23/5/25"/>
    <Todo_Item todoName="go walk" todoDate="10/2/26"/> */}
  </center>
}

export default App;
