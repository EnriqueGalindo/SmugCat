import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from "../actions";

const initialState = {
  login: {},
  loginLoading: false,
  loginError: null
};

const getInitState = () => {
  return JSON.parse(localStorage.getItem("auth")) || initialState;
};

export default (state = getInitState(), { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      console.log('LOGIN_USER was fired')
      return {
        ...state,
        loginError: null,
        loginLoading: true
      };
    case LOGIN_USER_SUCCESS:
      console.log("LOGIN_USER_SUCCESS was fired")
      return {
        ...state,
        login: payload,
        loginLoading: false
      };
    case LOGIN_USER_FAIL:
        console.log("LOGIN_USER_FAIL was fired")
      return {
        ...state,
        loginError: payload,
        loginLoading: false
      };
    default:
      return state;
  }
};
