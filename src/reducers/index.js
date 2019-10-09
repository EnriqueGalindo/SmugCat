import anotherReducer from './anotherReducer'
// import userReducer from './userReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    // user: userReducer,
    another: anotherReducer
})

export default allReducers