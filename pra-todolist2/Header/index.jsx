import React, { Component } from 'react'
import './index.css'
export default class Header extends Component {
  handleKeyUp=(e)=>{
      const {value}=e.target
      if(value.trim()==='') return 
      if(e.key==='Enter') {
        this.props.todoAdd(value)
        return
      } 
  }
  render() {
    return (
    <div className ="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称,按回车键确认"/>
    </div>
    )
  }
}
