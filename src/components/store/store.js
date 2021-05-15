import {createStore,applyMiddleware} from 'redux'
import {stateUpdater} from './UserReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export const store =createStore(stateUpdater,applyMiddleware(thunk,logger)) 