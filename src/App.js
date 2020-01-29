import React, { Component, Fragment } from 'react'

// 引入
import {
  TodoHeader,
  TodoInput,
  TodoList
  
} from './components'

//Fragment  类似一个空标签  也可以直接写  <>   </>  当不需要外层的div时
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <TodoHeader desc='今日事，今日办' x={1} y={2} a='3' b='4'>
          <i>待办事项列表</i>
        </TodoHeader>
        <TodoInput btnText='ADD' />
        <TodoList />
      </Fragment>
    )
  }
}
