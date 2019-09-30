import App from './frontend/pages/App';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { ConnectedRouter } from "connected-react-router";
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore, {history} from './frontend/utils/configureStore';

const store = configureStore(window.__PRELOADED_STATE__);

hydrate(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
