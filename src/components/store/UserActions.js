import {
    FETCH_USER_DATA ,
     FETCH_USER_OK ,
     FETCH_USER_ERROR } from './UserTypes'

import axios from 'axios'
const A1=()=>{
return {
type:FETCH_USER_DATA,
loading:true,
users:[],
errors:''
}

}

const A2=(data)=>{
    return {
    type:FETCH_USER_OK,
    loading:false,
    users:data,
    errors:''
    }    
    }
    const A3=(message)=>{
        return {
        type:FETCH_USER_ERROR,
        loading:false,
        users:[],
        errors:message
        }        
        }

        export const loadUserData=()=>{
return (dispatch)=>{
    dispatch(A1)
    axios.get('https://jsonplaceholder.typicode.com/users').
    then((result)=>{
let users=result.data
 dispatch(A2(users))
    }).
    catch(error=>{
        dispatch(A3(error.message))
    })     
 
}
        }