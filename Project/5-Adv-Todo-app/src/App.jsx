
import { useRef, useState } from 'react';

import EmptyMessage from './component/EmptyMessage';
import FormField from './component/FormField';
import Title from './component/Title';
import TodoItem from './component/TodoItem';
import styles from './App.module.css';

function App() {

  const [todoList, setTodoList] = useState([]);

  let [todoName, setTodoName] = useState("");
  let todoDate = useRef("");

  function handleSubmit(event){
    event.preventDefault();
    let newTask = {
      name : todoName,
      date : todoDate.current.value,
    }
    setTodoList([...todoList, newTask]);
    setTodoName("");
    todoDate.current.value = "";
  }
  function handleDelete(event){
    let deleteIndex = event.currentTarget.getAttribute('data-index');
    setTodoList(todoList.filter((item, index) => (index != deleteIndex)));
  }

  return (<div className={styles.page}>
      <Title></Title>
      <FormField todoName={todoName} 
      setTodoName={setTodoName} 
      todoDate={todoDate}
      handleSubmit={handleSubmit}
      ></FormField>
      {todoList.length === 0 && <EmptyMessage/>}
      {todoList.map((item, index)=>(<TodoItem key={index} 
      todoName={item.name} 
      todoDate={item.date}
      index={index}
      handleDelete={handleDelete}
      ></TodoItem>))}
      {todoList.length !== 0 && <button
      onClick={() => setTodoList([])}
      >Clear all</button>}
    </div>);
}

export default App;
