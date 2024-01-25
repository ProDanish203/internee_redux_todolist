import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./reducer";

const Store = configureStore({
    reducer: todoReducer,
}) 

export default Store;
