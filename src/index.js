
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// экспортируем компонент
import App from './components/App';
import combineReducers from './reducers/index';

// создаем стор и провайдер
let store = createStore(combineReducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
