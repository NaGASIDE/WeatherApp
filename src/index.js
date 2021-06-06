import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {App} from './App';
import { Provider } from 'react-redux'
import { store } from './store/store'
const root = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store} >
        <App />
      </Provider>
    </React.StrictMode>
,
  root
);
