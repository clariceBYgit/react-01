
// 也可将component单独结构出来
import React , { Component } from 'react'
// 可只使用 react-dom中的render方法
import { render } from 'react-dom'

// 定义组件的第二种方式，使用类，继承react.component


class App extends Component{
  render(){
    console.log(this.props)
    return (
      <div>
        <h1>类组件</h1>
        <p>{this.props.des}</p>
      </div>
    )
  }
}

// render是react dom 提供的一个方法
render (
 <App  des='类组件是继承react.component' x='asd'/>,
  document.querySelector('#root')
  
)


// 类组件渲染的原理

/*
const app = new App({
  des:'类组件是继承react.component',
  x:'asd'
}).render()

render (
  app,
   document.querySelector('#root')
   
 )
 
 */  



// react 16前 使用这种方式创建一个类组件
/*
React.creacteClass({
  render(){
    return <h1>早期的方式</h1>
  }
})
*/