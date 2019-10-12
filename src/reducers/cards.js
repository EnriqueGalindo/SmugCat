import {
    GET_CARDS,
    GET_CARDS_SUCCESS,
    GET_CARDS_FAIL
  } from "../actions";
  
  const initialState = {
    cards: []
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_CARDS:
        return {
          ...state
        };
      case GET_CARDS_SUCCESS:
        return {
          ...state,
          cards: action.payload
        };
      case GET_CARDS_FAIL:
        return {
          ...state,
          getCardsError: action.payload
        };

      default:
        return state;
    }
  };
  