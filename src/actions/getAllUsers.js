import { apiDomain, jsonHeaders, handleJsonResponse } from "./constants";
// import { push } from "connected-react-router";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ALL_USERS_SUCCESS = "GET_ALL_USERS_SUCCESS";
export const GET_ALL_USERS_FAIL = "GET_ALL_USERS_FAIL";

const getAllUsers = dispatch => {
  dispatch({
    type: GET_ALL_USERS
  });
  return fetch("http://localhost:3001/user")
    .then(handleJsonResponse)
    .then(users => {
      return dispatch({
        type: GET_ALL_USERS_SUCCESS,
        payload: users
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: GET_ALL_USERS_FAIL,
          payload: err
        })
      );
    });
};
export default getAllUsers;
