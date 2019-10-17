import { apiDomain, jsonHeaders, handleJsonResponse } from "./constants";
import { push } from "connected-react-router";

export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";

const login = loginData => dispatch => {
  dispatch({
    type: LOGIN_USER
  });

  return fetch(apiDomain, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(loginData)
  })
    .then(handleJsonResponse)
    .then(user => {
      return dispatch({ 
        type: LOGIN_USER_SUCCESS, 
        payload: user 
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ 
        type: LOGIN_USER_FAIL, 
        payload: err 
      }));
    });
};

export const loginThenGoToInventory = loginData => dispatch => {
  return dispatch(login(loginData)).then(() => dispatch(push("/inventory")));
};
