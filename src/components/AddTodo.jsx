import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';
import { addTodo } from '../store/reducer';
import { v4 as uuidv4 } from 'uuid';

export const AddTodo = () => {

  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!todo) return toast.error("Field cannot be empty")

    const newTodo = {
      id: uuidv4(), 
      text: todo,
      isCompleted: false,
    }

    dispatch(addTodo(newTodo));
    setTodo("");
  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center justify-center gap-2 my-5'>
      <input type="text" placeholder='Enter Todo' name='todo' id='addTodo'
      className='rounded-md bg-neutral-900 py-3 px-2 max-w-xl w-full outline-none text-sm' autoComplete='off'
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      />
      <button className='bg-primary py-2 px-5 rounded-md cursor-pointer'>Add</button>
    </form>
  )
}
