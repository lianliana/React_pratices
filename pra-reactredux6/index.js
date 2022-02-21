import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'
//引入Provider来管理store
import {Provider} from 'react-redux'
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'))

