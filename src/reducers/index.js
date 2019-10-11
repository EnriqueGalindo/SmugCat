import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import auth from "./auth";
import cards from "./cards"

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    auth, cards
  });

export default createRootReducer;
