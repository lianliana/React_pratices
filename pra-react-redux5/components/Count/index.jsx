import React, { Component } from 'react'
export default class CountUI extends Component {
  increment=()=>{
   const addValue=this.selectNumber.value*1
   this.props.increment(addValue)
  }
  decrement=()=>{
    const addValue=this.selectNumber.value*1
    this.props.decrement(addValue)
  }
  incrementIfOdd=()=>{
    const preValue=this.props.count
    const addValue=this.selectNumber.value*1
     if(preValue%2===1){
      this.props.increment(addValue)
     }
  }
  incrementAsync=()=>{
    const preValue=this.props.count
    const addValue=this.selectNumber.value*1
    // setTimeout(() => {
      this.props.incrementAsync(addValue,1000)
    // }, 1000);
  }
  render() {
    return (
      <div>
        <h2>当前求和为:{this.props.count}</h2>
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
