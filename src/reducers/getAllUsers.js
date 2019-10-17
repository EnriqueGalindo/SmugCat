import { GET_ALL_USERS, GET_ALL_USERS_SUCCESS, GET_ALL_USERS_FAIL } from "../actions"
​
const initialState = {
    allUsers: {},
};
​
​
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_USERS:
            return {
                ...state,
            };
​
        case GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                allUsers: payload,
            };
​
        case GET_ALL_USERS_FAIL:
            return {
                ...state,
            };
​
        default:
            return state;
    }
};