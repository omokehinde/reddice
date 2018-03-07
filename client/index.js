import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import routes from './routes';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
);

render(<Provider store={store}>
  <BrowserRouter>{routes}</BrowserRouter>
  </Provider>,
  document.getElementById('app'));

// render(<Router><Route exact path="/" component={App} /></Router>, document.getElementById('app'));
