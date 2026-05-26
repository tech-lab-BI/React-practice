
import { useRef, useState } from 'react';

import EmptyMessage from './component/EmptyMessage';
import FormField from './component/FormField';
import Title from './component/Title';
import TodoItem from './component/TodoItem';
import styles from './App.module.css';

function App() {

  const [todoList, setTodoList] = useState([
    {
      name : "buy ghee",
      date : "today",
    }
  ]);

  let [todoName, setTodoName] = useState("");
  let todoDate = useRef("");

  function handleSubmit(){
    event.preventDefault();
    let newTask = {
      name : todoName,
      date : todoDate.current.value,
    }
    setTodoList([...todoList, newTask]);
    console.log(newTask);
    console.log(todoList);
  }
  function handleDelete(event){
    deleteIndex = event.currentTarget.getAttribute('data-index');
    setTodoList(todoList.filter((index) => (index !== deleteIndex)))
  }

  return (<div className={styles.page}>
      <Title></Title>
      <FormField todoName={todoName} 
      setTodoName={setTodoName} 
      todoDate={todoDate}
      handleSubmit={handleSubmit}
      ></FormField>
      {todoList.length === 0 && <EmptyMessage/>}
      {todoList.map((item, index)=>(<TodoItem key={index} todoName={item.name} todoDate={item.date}></TodoItem>))}
    </div>);
}

export default App;
