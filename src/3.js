import React, { Component } from 'react'
import { render } from 'react-dom'

/*
// 套组件

const Header = ()=> <h1>我是头</h1>

class App extends Component{
  render (){
    return(
      <div>
        <Header />
        <p>{this.props.dec}</p>
      </div>
    )
  }
}

*/

// jsx  的原理   react 在执行时将jsx转化为合法的js
// 元素  
 class App extends Component{
  render () {
    // React.createElement  是一个方法
    // React.createElement(type, [props], [...children])
    return (
      React.createElement(
        'div',
        {
          className:'app',
          id:'reactApp'
        },
          React.createElement(
          'h1',
          {
            className:'title'
          },
          'jsx的原理'
        ), 
         React.createElement(
            'p',
            null,
            'jsx1的原理'
          )
      )
   
    )
  }

 }



render(
  <App/>,
  document.querySelector('#root')
)