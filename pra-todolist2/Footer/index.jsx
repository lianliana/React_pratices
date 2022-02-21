import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  totalCheckedChange=(e)=>{
    console.log(e.target.checked);
    this.props.AppChangeTotalChecked(e.target.checked)
  }
  deleteAllDone=()=>{
    this.props.AppDeleteAllDone()
  }
  render() {
    const {todos}=this.props
    const done=todos.reduce((pre,cur)=>{
      return pre+(cur.done===true?1:0)
    },0)
    return (
        <div className="todo-footer">
            <label>
                   
                <input type="checkbox" checked={done===todos.length&&done!==0?true:false} onChange={this.totalCheckedChange}/>
            </label>
            <span>
                <span>已完成{done}</span> / 全部
            </span>
            <button className="btn btn-danger" onClick={this.deleteAllDone}>清除已完成任务</button>
         </div>
    )
  }
}
