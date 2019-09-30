import { jsonHeaders, handleJsonResponse } from "../../utils/constants";
import { push } from "connected-react-router";

export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_FAILURE_SUCCESS';

export const register = (payload) => dispatch =>{
    dispatch({
        type: REGISTER_USER
    })

    return fetch('/api/register', {
        method: 'POST',
        headers: jsonHeaders,
        body: JSON.stringify(payload)
    })
    .then(() => dispatch({ type: REGISTER_USER_SUCCESS }))
    .catch(err => {
        return Promise.reject(
            dispatch({
                type: REGISTER_USER_FAILURE,
                payload: err.message
            })
        )
    })
}

export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const login = payload => dispatch => {
    dispatch({
        type: LOGIN_USER
    })

    return fetch('/api/login', {
        method: 'POST',
        headers: jsonHeaders,
        body: JSON.stringify(payload)
    })
    .then(() => dispatch({ type: LOGIN_USER_SUCCESS }))
    .catch(err => {
        return Promise.reject(
            dispatch({
                type: LOGIN_USER_FAILURE,
                payload: err.message
            })
        )
    })
}

export const registerThenLogin = registerData => dispatch => {
    return dispatch(register(registerData)).then(() => {
        dispatch(loginThenGoToHomepage(registerData))
    })
}

export const loginThenGoToHomepage = loginData => dispatch => {
    return dispatch(login(loginData)).then(() => {
        dispatch(push('/home'))
    })
}