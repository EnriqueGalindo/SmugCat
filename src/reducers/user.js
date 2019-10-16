import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL
} from "../actions";

const initialState = {
  registerUser: {},
  registerUserLoading: false,
  registerUserError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        registerUserLoading: true,
        registerUserError: null
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        registerUser: action.payload,
        registerUserLoading: false
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        registerUserError: action.payload,
        registerUserLoading: false
      };
    default:
      return state;
  }
};
