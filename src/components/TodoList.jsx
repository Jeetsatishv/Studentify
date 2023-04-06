import React from 'react'
// import { ImCheckmark2 } from 'react-icons/im'
// import { BsPencilSquare } from 'react-icons/bs'
import { GoTrashcan } from 'react-icons/go'



export const TodoList = ({ todos, setToDos, setEditToDo }) => {

    // const handleComplete = (todo) => {
    //     setToDos(
    //         todo.map((item) => {
    //             if (item.id === todo.id) {
    //                 return{...item, completed: item.completed}
    //             }
    //             return item;
    //         })
    //     )
    // }

    // // const handleEdit = ({ id }) => {
    // //     const findTodo = todos.find((todo) => todo.id === id)
    // //     setEditToDo(findTodo);
    // // }


    const handleDelete = ({ id }) => {
        setToDos(todos.filter((todo) => todo.id !== id));
    }


  return (
    <div className='text-gray-700 w-full flex flex-col'>
        {todos.map((todo) => (
            <li 
                key={todo.id} 
                className='
                    flex 
                    bg-gray-700 rounded-md py-4 px-2 border text-gray-200 my-3
                '
            >
                <input 
                    type="text"
                    value={todo.title}
                    onChange={(event) => event.preventDefault()}
                    className='
                        bg-transparent text-2xl font-normal
                        flex flex-wrap break-normal
                    '
                />  

                <div className='flex gap-2'>
                    {/* <button 
                        onClick={() => handleComplete(todo)}
                        className='ml-2 hover:text-gray-800'>
                        <ImCheckmark2 size={25}/>
                    </button>
                    <button 
                        onClick={() => handleEdit(todo)}
                        className='hover:text-gray-800'>
                        <BsPencilSquare size={25}/>
                    </button> */}
                    <button 
                        onClick={() => handleDelete(todo)}
                        className='hover:text-gray-800'>
                        <GoTrashcan size={25}/>
                    </button>
                </div>
            </li>
        ))}
    </div>
  )
}