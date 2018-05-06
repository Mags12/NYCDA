/* global window, document */

// index.js
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MovieListApp from './components/MovieListApp';

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
	<Provider store={store}>
	  <MovieListApp />
	</Provider>,
  document.getElementById('root')
);
