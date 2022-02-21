import React,{Component} from 'react'
import Header from './Header'
import List from './List'
import Footer from './Footer'
import './App.css'
export default class App extends Component{
  state={
    todos:[
      {id:1,name:"吃饭",done:true},
      {id:2,name:"睡觉",done:false},
      {id:3,name:"打代码",done:true},
    ],
    total:3,
    done:2,
    isAllDone:false
  }
  todoAdd=(newTodoName)=>{
    let newobj={id:this.state.total+1,name:newTodoName,done:false}
    let newTodos=[newobj,...this.state.todos]
    this.setState({todos:newTodos,total:this.state.total+1})
  }
  AppChangeCheckedbox=(index)=>{
     const {todos}= this.state
     todos[index].done=!todos[index].done
     this.setState({todos:todos})
  }
  AppDeleteCheckedbox=(id)=>{
    const {todos}=this.state
    const newTodos=todos.filter((item)=>{
      if(item.id!==id) return true
      return false
    })
    this.setState({todos:newTodos})
  }
  AppChangeTotalChecked=(status)=>{
    const newTodos=this.state.todos.map((item)=>{
      return {...item,done:status}
    })
    this.setState({todos:newTodos})
  }
  AppDeleteAllDone=()=>{
    const newTodos=this.state.todos.filter((item)=>{
      return item.done===false
    })
    this.setState({todos:newTodos})
  }
  render(){

    

    return (
      <div>
        <div className='todo-container'>
          <div className='todo-wrapper'>
              <Header todoAdd={this.todoAdd}/>
              <List todos={this.state.todos} AppChangeCheckedbox={this.AppChangeCheckedbox} AppDeleteCheckedbox={this.AppDeleteCheckedbox} />
              <Footer todos={this.state.todos} AppChangeTotalChecked={this.AppChangeTotalChecked} AppDeleteAllDone={this.AppDeleteAllDone}/>
          </div>
        </div>
    </div>
    )
  }
}
