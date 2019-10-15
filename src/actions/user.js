import { apiDomain, jsonHeaders, handleJsonResponse } from "./constants";
import { push } from "connected-react-router";

export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAIL = "REGISTER_USER_FAIL";

const registerUser = registerData => dispatch => {
    dispatch({
      type: REGISTER_USER
    });
    return fetch(apiDomain + "/user/add", {
      method: "POST",
      headers: jsonHeaders,
      body: JSON.stringify(registerData)
    })
      .then(handleJsonResponse)
      .then(result => {
        return dispatch({ type: REGISTER_USER_SUCCESS, payload: result });
      })
      .catch(err => {
        return Promise.reject(
          dispatch({ type: REGISTER_USER_FAIL, payload: err })
        );
      });
  
  };

  export const registerThenGoToInventory = registerData => dispatch => {
    return dispatch(registerUser(registerData)).then(() => dispatch(push("/inventory")));
  };