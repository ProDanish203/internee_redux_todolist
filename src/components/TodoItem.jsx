import { useRef } from "react"
import { completeTodo, removeTodo, updateTodo } from "../store/reducer";
import { useDispatch } from "react-redux";
import { toast } from "sonner";


export const TodoItem = ({data}) => {
    const {text, id} = data;

    const dispatch = useDispatch();
    const inputRef = useRef(true);

    const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();
    }

    const update = (value, e) => {
        if(e.which === 13){
            dispatch(updateTodo({ id, text: value }));
            inputRef.current.disabled = true;
        }
    }

  return (
    <div className='bg-neutral-900 rounded-sm p-3'>

        <textarea rows={5}
        className='resize-none bg-transparent outline-none w-[400px] overflow-y-auto text-sm'
        ref={inputRef} 
        disabled={inputRef} 
        defaultValue={text} 
        onKeyPress={(e) => update(inputRef.current.value, e)}
        />

        <div className='flex items-center justify-center gap-2'>
            <button onClick={changeFocus}><i className='fas fa-pen p-2 rounded-sm bg-neutral-950 hover:scale-105' title='Edit Todo'></i></button>

            <button onClick={() => {dispatch(completeTodo(id))}}><i className='fas fa-check-double p-2 rounded-sm bg-neutral-950 hover:scale-105' title='Mark as Completed'></i></button>

            <button onClick={() => {
                dispatch(removeTodo(id))
                toast.success("Todo Deleted")
            }}><i className='fas fa-trash p-2 rounded-sm bg-neutral-950 hover:scale-105' title='Delete Todo'></i></button>

        </div>
    </div>
  )
}
