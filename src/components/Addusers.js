import React from "react"
import {useForm} from "react-hook-form"
import {useDispatch} from 'react-redux'
import { addusers } from "../slices/userlist"
function Addusers(){
    const {register,handleSubmit}=useForm()
    let dispatch=useDispatch()
    const onFormSubmit=(userobj)=>{
        let actionobj=addusers(userobj)
        dispatch(actionobj)
    }
    return(
        <div className='container '>
           <h1 className="fw-bold text-center text-danger display-2">Add Users</h1>

            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className="mb-3">
                <label htmlFor="username" className="mb-1 fw-bold">Username</label>
                <input type="text" id="username" className=" form-control" {...register('username')} />
                </div>
                <div className="mb-3">
                <label htmlFor="dob" className="mb-1 fw-bold">Date of Birth</label>
                <input type="date" id="dob" className=" form-control" {...register('dob')} />
                </div>
                <button type="submit" className="btn btn-info mx-auto d-block">Add User</button>
            </form>
        </div>
    )
}

export default Addusers