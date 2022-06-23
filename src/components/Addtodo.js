import React from "react";
import {useForm} from 'react-hook-form'
import{useDispatch} from "react-redux"
import { addtodo } from "../slices/todolist";
function Addtodo(props){
    const {register,handleSubmit,formState :{errors}}=useForm()
    let dispatch=useDispatch()

    const onFormSubmit=(todoobj)=>{
    let actionobj=addtodo(todoobj.list)
    dispatch(actionobj)
    }
    return(
        <div className="container">
            <h1 className="text-success display-5">Add your Items</h1>
            <div className="bg-light p-3">
                <form className="" onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="todo">Add Your Item</label>
                        <input type="text" id="todo" className="form-control" {...register("list")}/>
                    </div>
                    <div className="mb-3">
                       <button  type="submit" className="btn btn-success d-block mx-auto">Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Addtodo