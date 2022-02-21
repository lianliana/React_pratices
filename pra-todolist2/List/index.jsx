import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'
export default class index extends Component {
  
  static propTypes={
    AppChangeCheckedbox:PropTypes.func.isRequired,
    AppDeleteCheckedbox:PropTypes.func.isRequired
  }
  render() {
    return (
        <ul className="todo-main">
            {this.props.todos.map((item,index)=>{
                return <Item key={item.id} ind={index} {...item} AppChangeCheckedbox={this.props.AppChangeCheckedbox} 
                AppDeleteCheckedbox={this.props.AppDeleteCheckedbox}
                />
            })}
        </ul>
    )
  }
}
