import { useState, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'
import { TodoList } from './TodoList.jsx'


export const Form = () => {
    const initialState = JSON.parse(localStorage.getItem("todos")) || [];
    const [userInput, setUserInput] = useState("");
    const [todos, setToDos] = useState(initialState)
    const [editTodo, setEditToDo] = useState(null)

    useEffect(() => {
        localStorage.setItem("todos" , JSON.stringify(todos))
    }, [todos])

    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => 
            todo.id === id ? {title, id, completed} : todo
        )
        setToDos(newTodo)
        setEditToDo("")
    }

    useEffect(() => {
        if (editTodo) {
            setInterval(editTodo.title)
        } else {
            setUserInput("")
        }
    }, [setUserInput, editTodo])

    const onInputChange = (event) => {
        setUserInput(event.target.value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!editTodo) {
            setToDos([...todos, {id:uuidv4(), title:userInput, completed: false}]);
            setUserInput("")
        } else {
            updateTodo(userInput, editTodo.id, editTodo.completed)
        }
    }

  return (
    <div className='
        font-bold text-gray-100'
    >
        <form onSubmit={onFormSubmit}>
            <input 
                type="text" 
                placeholder="Enter a todo: " 
                className='rounded m-3 py-3 px-4 border-none cursor-pointer text-black'
                value={userInput}
                required //ensures that the user has to put an input
                onChange={onInputChange}   
                editTodo={editTodo}
                setEditToDo={setEditToDo}
            >
            </input>
            <button 
                type="submit"
                className='bg-red-400 text-gray-100 py-3 px-4 rounded-md font-bold hover:bg-red-600'
            >
                {editTodo ? "CHANGE" : "Add"}
            </button>
        </form>
        <TodoList 
            todos={todos} 
            setToDos={setToDos}
            setEditToDo={setEditToDo}
        />
    </div>
  )
}