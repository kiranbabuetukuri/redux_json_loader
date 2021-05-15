import React from 'react'
import {useSelector } from 'react-redux'
function Component1(props) {
    const users=useSelector(state=>state.users)
    return (
        <div>
            <div>Liste 3</div>
            <div>{JSON.stringify(users)}</div>
        </div>
    )
}

export default Component1
