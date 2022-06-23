import React from "react";
import {useSelector} from 'react-redux'
function Counttodo(props){
    let list=useSelector(state=>state.todos)
    return(
        <div className="container">
            <h1 className="text-secondary display-5">count of your Items</h1>
            <h1 className="text-center text-secondary">{list.length}</h1>

        </div>
    )
}
export default Counttodo