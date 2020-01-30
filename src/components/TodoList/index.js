import React, { Component } from 'react'
import TodoItem from './TodoItem'
export default class TodoList extends Component {
  render() {
    console.log(this.props.todos)
    return (
      <ul>
        {
          this.props.todos.map(todo =>{
            return (
              // 方法一：
              // <TodoItem 
              //   key={todo.id}
              //   id={todo.id}
              //   title={todo.title}
              //   isOk={todo.isOk}
              // />
              // 方法二：会更好一些
              <TodoItem 
              key={todo.id}
              {...todo} />
            )
          })


        }
      </ul>

    )
  }
}
