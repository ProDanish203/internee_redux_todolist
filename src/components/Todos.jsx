import React, { useState } from 'react'
import { TodoItem } from './TodoItem'
import { useSelector } from 'react-redux';

export const Todos = () => {

    const [filter, setFilter] = useState("active");
    const todos = useSelector(state => state.todos)
    
  return (
    <>
    <div className='flex items-center justify-center gap-2'>
        <button className={`${filter === "all" ? "bg-primary": "bg-neutral-700"}  cursor-pointer py-2 px-5 rounded-sm hover:scale-105`} onClick={() => setFilter("all")}>All</button>
        <button className={`${filter === "active" ? "bg-primary": "bg-neutral-700"} cursor-pointer py-2 px-5 rounded-sm hover:scale-105`} onClick={() => setFilter("active")}>Active</button>
        <button className={`${filter === "completed" ? "bg-primary": "bg-neutral-700"} cursor-pointer py-2 px-5 rounded-sm hover:scale-105`} onClick={() => setFilter("completed")}>Completed</button>
    </div>

    <div className='mt-10 flex flex-wrap gap-4 items-center justify-center'>
    {filter === "all" && todos.map((todo, index) => (
      <TodoItem key={index} data={todo}/>
    ))}

    {filter === "active" && todos.map((todo, index) => (
      todo.isCompleted === false && <TodoItem key={index} data={todo}/>
    ))}

    {filter === "completed" && todos.map((todo, index) => (
      todo.isCompleted === true && <TodoItem key={index} data={todo}/>
    ))}

    </div>
    </>
  )
}
