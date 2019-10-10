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
      return {
        ...state,
        loginError: null,
        loginLoading: true
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        login: payload,
        loginLoading: false
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        loginError: payload,
        loginLoading: false
      };
    default:
      return state;
  }
};
