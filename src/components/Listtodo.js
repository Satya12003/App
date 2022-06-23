import React from "react";
import {useSelector} from 'react-redux'

function Listtodo(props){
    let todolist=useSelector(state=>state.todos)
    return(
        <div className="container">
             <h1 className="text-warning display-5">your Items</h1>
             {
                todolist.map((itemObj,index)=><h1 className="text-info" key={index}>{itemObj}</h1>)
            }
        </div>
    )
}
export default Listtodo