
import {
    FETCH_USER_DATA ,
     FETCH_USER_OK ,
     FETCH_USER_ERROR } from './UserTypes'

const initialState={
    loading:false,
    users:[],
    error:''
}

export const stateUpdater=(state=initialState,action)=>{
switch (action.type) {
    case FETCH_USER_DATA:
        return action       
        break;
        case FETCH_USER_OK:
            return {...state,users:action.users}            
            break;
            case FETCH_USER_ERROR:         
            return action           
            break;   
             

    default: return state
        break;
}

}
