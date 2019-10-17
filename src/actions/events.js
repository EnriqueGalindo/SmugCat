// import {
//   handleJsonResponse,
//   jsonHeaders
//   //   GET_EVENTS, //error: cannot import?  'Isn't exported from ./constants(it is..)'
//   //   GET_EVENTS_FAIL,
//   //   GET_EVENTS_SUCCESS
// } from "./constants";

// export const GET_EVENTS = "GET_EVENTS";
// export const GET_EVENTS_SUCCESS = "GET_EVENTS_SUCCESS";
// export const GET_EVENTS_FAIL = "GET_EVENTS_FAIL";

// const tournamentURL = "https://mtgmeta.io/api/tournaments/standard";

// export const getEvents = () => dispatch => {
//   dispatch({ type: GET_EVENTS });
//   return fetch(tournamentURL, {
//     method: "GET",
//     headers: jsonHeaders
//   })
//     .then(handleJsonResponse)
//     .then(result => {
//       return dispatch({
//         type: GET_EVENTS_SUCCESS,
//         payload: result.tournaments //should be an array of the different tournaments..
//       });
//     })
//     .catch(err => {
//       return Promise.reject(
//         dispatch({ type: GET_EVENTS_FAIL, payload: err.message })
//       );
//     });
// };
