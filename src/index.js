import React from 'react'
import  { render} from 'react-dom'


// 入口文件
import App from './App'

// 若想要全局的扩展React.Component的prototype ，若想把ajax的方法全局挂载组件的this上，就可以使用下面的方法
// 第一步引入所以的ajax请求
// import * as services from './services'
// 第二步 在prototype上挂载一个叫http,然后就可以在组件内部通过this.http.方法名来执行一些操作
// React.Component.prototype.http = services


render(
  <App />,
  document.querySelector('#root')
)