import React, { Component, Fragment } from 'react'

// 引入
import {
  TodoHeader,
  TodoInput,
  TodoList,
  Like
  
} from './components'

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
      todos: [{
        id:1,
        title: '吃饭',
        peo:'lili',
        isOk: true
      },
      {
        id:2,
        title: '睡觉',
        peo: 'aaaa',
        isOk: false
      }
    ]
    }
  }

  // 更改todo 要在定义数据处   
  addTodo = (todoTitle) => {
    // 在那执行就在哪把方法作为props 传进 TodoInput
    console.log(todoTitle)
    /*
    // 问题：这样写有问题，3不是一个数组，push返回的是一个数组的长度
    this.setState({
      todos: this.state.todos.push({
        id:Math.random(),
        title: todoTitle,
        isOk: false
      })
    })
    */
    // 解决
    this.setState({
      todos: this.state.todos.concat({
        id:Math.random(),
        title: todoTitle,
        isOk: false
      })
    })

  }

  // 改变checkbox的状态
  onOkChange = (id) => {
    this.setState((preState)=>{
      return {
        todos: preState.todos.map(todo => {
          if (todo.id === id) {
            todo.isOk = !todo.isOk
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
        <TodoList onOkChange={this.onOkChange} todos={this.state.todos} />
        <Like />
      </Fragment>
    )
  }
}
