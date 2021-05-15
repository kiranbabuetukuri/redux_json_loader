import React from 'react'
import {connect} from 'react-redux'
import {loadUserData} from './store/UserActions'
function UserContainer(props) {
    return (
        <div>
            <h2>Users Data</h2>
            <button onClick={props.ravi}> Load Data</button>
             {
       //       JSON.stringify(props.users)
      props.users.map((user)=>{return (<p key={user.id}>{user.name}</p>)})
            }
        </div>
    )
}
const a1=(state)=>{
return {
    users:state.users
}

}
const a2 =(dispatch)=>{
    return {
        ravi:()=> dispatch( loadUserData())
    }
}

export default connect(a1,a2)( UserContainer)
