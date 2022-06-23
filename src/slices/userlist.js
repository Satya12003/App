import { createSlice } from '@reduxjs/toolkit'


export const userSlice=createSlice({
    name:"users",
    initialState:[],
    reducers:{
        addusers:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const { addusers }=userSlice.actions

export default userSlice.reducer