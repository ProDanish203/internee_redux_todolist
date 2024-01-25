import { createSlice } from "@reduxjs/toolkit";

const loadTodosFromLocalStorage = () => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  };
  
  const saveTodosToLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  

const TodoReducer = createSlice({
    name: "Todos",
    initialState: {
        todos: loadTodosFromLocalStorage(),
    },
    reducers: {
        // Adding Todos
        addTodo: (state, action) => {
            const { id, text, isCompleted } = action.payload;
            state.todos.push({ id, text, isCompleted });
            saveTodosToLocalStorage(state.todos);
        },
        //Removing Todos
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(item => item.id !== action.payload);
            saveTodosToLocalStorage(state.todos);
        },
        //Updating Todos
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            state.todos = state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        text,
                    };
                }
                return todo;
            });
            saveTodosToLocalStorage(state.todos);
        },
        //Completing Todos
        completeTodo: (state, action) => {
            const id = action.payload;
            state.todos = state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted,
                    };
                }
                return todo;
            });
            saveTodosToLocalStorage(state.todos);
        },
    }
})

export const { addTodo, completeTodo, removeTodo, updateTodo }  = TodoReducer.actions;
export const todoReducer = TodoReducer.reducer;