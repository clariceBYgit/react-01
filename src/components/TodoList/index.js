import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'


export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isOk: PropTypes.bool.isRequired
    })).isRequired,
    onOkChange:PropTypes.func
  }


  render() {
    // console.log(this.props.todos)
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
              {...todo} 
              onOkChange={this.props.onOkChange}
              />
            )
          })


        }
      </ul>

    )
  }
}
 