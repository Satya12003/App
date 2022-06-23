import {configureStore} from '@reduxjs/toolkit'
import  todoReducer from './slices/todolist'
import userReducer from './slices/userlist'

 export const store = configureStore({
    reducer:{
        todos:todoReducer,
        users:userReducer
    }
 })