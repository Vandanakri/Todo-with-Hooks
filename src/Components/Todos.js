import React, { useState } from 'react'
import Todo from './Todo'
import '../Stylesheet/index.css';

function Todos() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState([])

  const addTodos = () => {
    setTodos([...todos, { text, id:Date.now() }])
    setText('')
  }

  const deleteTodo = ({ id }) => {
    const filteredData = todos.filter((todo) => todo.id !== id)
    setTodos(filteredData)
  }

  const handleCheckbox = (id) => {
    const newTodoList = todos.map(todo => {
      if (todo.id === id) 
        return { ...todo, done: !todo.done}
        return todo;
      
    });
    setTodos(newTodoList);
  }

  return (
    <header>
      <h1>Todo List</h1>
    <center>
      <input type="text" value={text} placeholder="Enter Your Todo" onChange={e => setText(e.target.value)} />
      <button onClick={addTodos}>ADD</button>
      {
        todos.map(todo => <Todo data={todo} deleteTodo={deleteTodo} handleChange={handleCheckbox} />)
      }

    </center>
    </header>
  )
}

export default Todos;







