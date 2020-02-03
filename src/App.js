import React, { Component, Fragment } from 'react'

// 引入
import {
  TodoHeader,
  TodoInput,
  TodoList,
  Like
  
} from './components'


import { getTodos } from './services'


//Fragment  类似一个空标签  也可以直接写  <>   </>  当不需要外层的div时
export default class App extends Component {
/*
  state = {
    title :'待办事项列表'
  }
*/
  constructor (){
    super()
    this.state = {
      title: '待办事项列表',
      desc: '今日事,不想干',
      todos: [],
      isLoading: false
    }
  }


  getData = () =>{
    this.setState({
      isLoading: true
    })
    getTodos ()
    .then(res => {
      if(res.status === 200){
          this.setState({
            todos: res.data
          })
       
      }else{
        // 处理错误

      }
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
    .finally(()=>{
      this.setState({
        isLoading: false
      })
    })
  }
  // 在此componentDidMount  生命周期发送ajax请求

  componentDidMount () {
   this.getData()
  }

  // 更改todo 要在定义数据处   
  addTodo = (todoTitle) => {
    // 在那执行就在哪把方法作为props 传进 TodoInput
    // console.log(todoTitle)
    /*
    // 问题：这样写有问题，3不是一个数组，push返回的是一个数组的长度
    this.setState({
      todos: this.state.todos.push({
        id:Math.random(),
        title: todoTitle,
        completed: false
      })
    })
    */
    // 解决
    this.setState({
      todos: this.state.todos.concat({
        id:Math.random(),
        title: todoTitle,
        completed: false
      })
    })

  }

  // 改变checkbox的状态
  onOkChange = (id) => {
    this.setState((preState)=>{
      return { 
        todos: preState.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed
          }
          
          return todo
        })
      }
    })
  }

  render() {
    return (
      <Fragment>
        <TodoHeader x={1} y={2} a='3' b='4' desc={this.state.desc}>
          {this.state.title}
        </TodoHeader>
        <TodoInput addTodo={this.addTodo} />
        {/* <TodoList onOkChange={this.onOkChange} todos={this.state.todos} /> */}
        {
          this.state.isLoading ? <div>Loading....</div> : <TodoList onOkChange={this.onOkChange} todos={this.state.todos} />
        }
        <Like />
      </Fragment>
    )
  }
}
  