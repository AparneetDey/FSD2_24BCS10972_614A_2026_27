import React, { useRef, useState } from 'react'

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const task = useRef(null)
  
  const addTask = () => {
    const text = task.current.value;
    setTodos([...todos, text]);
    task.current.value = '';
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input ref={task} type="text" placeholder='Add a new todo' />
      <button onClick={addTask}>Add</button>
      {todos.length == 0 ? (
        <p>No todos yet. Add one above!</p>
      ) : (
        <ul>
          {todos.map((todo, ind) => (
            <li key={ind}>{todo}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Todo