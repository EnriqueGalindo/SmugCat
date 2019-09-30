import { ADD_MESSAGE } from '../components/MessagePoster/messageActions';

const initialState = {
    messages: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ADD_MESSAGE:
        return { 
            ...state, 
            messages: [
                ...state.messages,
                payload
            ]
        }

    default:
        return state
    }
}
