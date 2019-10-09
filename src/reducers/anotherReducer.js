import { UPDATE_USER } from '../actions/another.actions'

export default function anotherReducer(state = '', { type, payload }){
    switch(type){
        case UPDATE_USER:
            return payload

        default:
            return state
    }
}