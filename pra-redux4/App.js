import React, { Component } from 'react'
import store from './redux/store'
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from './redux/count_action'
export default class App extends Component {
  increment=()=>{
   const addValue=this.selectNumber.value*1
   store.dispatch(createIncrementAction(addValue))
  }
  decrement=()=>{
    const addValue=this.selectNumber.value*1
    store.dispatch(createDecrementAction(addValue))
  }
  incrementIfOdd=()=>{
    const preValue=store.getState()
    const addValue=this.selectNumber.value*1
    if(preValue%2===1){
      store.dispatch(createIncrementAction(addValue))
    }
  }
  incrementAsync=()=>{
    const preValue=store.getState()
    const addValue=this.selectNumber.value*1
    // setTimeout(() => {
      store.dispatch(createIncrementAsyncAction(addValue,1000))
    // }, 1000);
  }
  render() {
    return (
      <div>
        <h2>当前求和为:{store.getState()}</h2>
        <select ref={c=>{this.selectNumber=c}}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
