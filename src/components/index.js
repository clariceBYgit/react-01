// 导出写法1

import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
// 负责导出所有的组件


export {
  TodoHeader,
  TodoInput,
  TodoList
}




// 导出写法2
/*
export { default as TodoHeader } from './TodoHeader'
export { default as TodoInput } from './TodoInput'
export { default as TodoList } from './TodoList'
*/