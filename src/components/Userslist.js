import {useSelector} from 'react-redux'

function Userslist(){
    let userobj=useSelector(state=>state.users)
    return(
        <div className='container text-center'>
        <h1 className="fw-bold text-primary display-2"> Users List</h1>
        <table className="table">
            <thead>
                <th>Username</th>
                <th>date of birth</th>
            </thead>
            <tbody>
                {
                    userobj.map((user,index)=><tr key={index}>
                        <td>{user.username}</td>
                        <td>{user.dob}</td>
                    </tr>)
                }
            </tbody>
        </table>
     </div>
    )
}

export default Userslist