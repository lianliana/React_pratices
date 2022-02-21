import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'
ReactDOM.render(<App/>,document.getElementById('root'))
//检测APP组件如果有redux状态改变，则更新
store.subscribe(()=>{
  ReactDOM.render(<App/>,document.getElementById('root'))
})

