import React, {Component} from 'react'
import { render } from 'react-dom'
// 引入classNames插件
import classNames from 'classnames'
// 引入外部样式
import './index.css'
// 引入styled-components 插件
import styled from 'styled-components'
console.log(styled)
// Classnames  插件 可以使class动态 更灵活

const Title = styled.h1`
  color:#AFF
`

class App extends Component {
  render(){
    const color = {color:'red'}
    return(
      <div>
        <Title>元素的样式</Title>
        <ol>
          <li style={color}>使用style内联创建</li>
          <li className='text-red'>使用外部class的方式，但是class要写成className</li>
          <li className={classNames('a',{'b':true,'c':false})}>class只有a，b样式,没有c,要动态添加不同的classname可使用第三方的包 classnames  npm install classnames --save</li>
          <li>使用styled-components插件 npm i styled-components</li>
        </ol>
      </div>
    )
  }
}



render(
  <App />,
  document.querySelector('#root')
)