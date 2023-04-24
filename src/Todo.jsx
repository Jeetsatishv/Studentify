import React from 'react';

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={"todo-completed" ? "li-complete" : "li-incomplete"}>
      <div>
        <input onChange={() => toggleComplete(todo)} type='checkbox' checked={todo.completed ? 'checked' : ''} />
        <p onClick={() => toggleComplete(todo)} className='todo-text'>
          {todo.text}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default Todo;