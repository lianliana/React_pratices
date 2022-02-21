import React, { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types'
export default class Item extends Component {
  static propTypes={
    AppChangeCheckedbox:PropTypes.func.isRequired,
    AppDeleteCheckedbox:PropTypes.func.isRequired
  }
  state={mouse:false}
  handleMouse=(status)=>{
    return ()=>{
      this.setState({mouse:status})
    }
  }
  changeCheckbox=(index)=>{
    this.props.AppChangeCheckedbox(index,!this.props.done)
    
  }
  deleteItem=(id)=>{
    return ()=>{
      if(window.confirm('是否确认删除?')){
        this.props.AppDeleteCheckedbox(id)
      }
    }
  }
  render() {
    const {mouse}=this.state
    return (
        <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} style={{backgroundColor:mouse?'#ddd':'white'}}>
            <label>
                <input type="checkbox" checked={this.props.done} onChange={()=>{this.changeCheckbox(this.props.ind)}}/>
                <span>{this.props.name}</span>
            </label>
            <button className='btn btn-danger' style={{display:mouse?'block':'none'}} onClick={this.deleteItem(this.props.id)}>删除</button>
        </li>
    )
  }
}
