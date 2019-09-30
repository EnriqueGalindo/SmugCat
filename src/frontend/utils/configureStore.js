import { applyMiddleware, createStore } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "../reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
  });

export default function configureStore(preloadedState) {
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        composeWithDevTools(
            applyMiddleware(
                routerMiddleware(history),
                thunk
            )
        )
    );

    return store;
}