import { createSlice } from "@reduxjs/toolkit"


export const todoSlice=createSlice({
    name:"todos",
    initialState:[],
    reducers:{
        addtodo:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const { addtodo }=todoSlice.actions

export default todoSlice.reducer