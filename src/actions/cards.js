import {handleJsonResponse, 
    cardDomain,
    jsonHeaders, 
    GET_CARDS,
    GET_CARDS_SUCCESS,
    GET_CARDS_FAIL} from "./constants"
// import TestComponent from "../components/testComponent"

export const getCards = (cardArray) => dispatch => {
    dispatch(
        {type: GET_CARDS}
    ) 
    return fetch(cardDomain, {
        method: "GET",
        headers: jsonHeaders
    })
        .then(handleJsonResponse)
        .then(result => {
            return dispatch({
                type: GET_CARDS_SUCCESS,
                payload: {cards: test.user.cards}
            })
        })
        .catch(err => {
          return Promise.reject(
            dispatch({ type: GET_CARDS_FAIL, payload: err.message })
          );
        });
    };
