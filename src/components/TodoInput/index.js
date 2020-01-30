// react中通过createRef来获取组件或者dom元素，要ref之前要先调用React.createRef方法来创建ref

import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'


export default class TodoInput extends Component {

  static propTypes = {
    btnText: PropTypes.string
  }
  static defaultProps = {
    btnText: '添加add'
  }
  constructor(){
    super()
    this.state = {
      inputValue:''
    }
    // 事件3 bind(this)
    // this.hanleAdd=this.hanleAdd.bind(this)

    // 在constructor里来创建ref
    this.inputDom = createRef()
  }
  onInput = (e) => {
    // console.log(e)
    this.setState({
      inputValue:e.currentTarget.value
    })
  }
  // 按回车 添加
  handleKey = (e) =>{
    if(e.keyCode === 13){
      this.hanleAdd()
    }
  }
  // 事件  1.
  hanleAdd = () => {
    // 实际的项目中需要对this.state.inputValue进行验证
    if(this.state.inputValue === ''){
      return
    }
    // console.log(this.inputDom)
    // 接受app.js 定义的方法
    this.props.addTodo(this.state.inputValue)
    // console.log(this.state)
    this.setState({
      inputValue : ''
    },() =>{
      this.inputDom.current.focus()

    })
  }


/*
  // 事件2.
  hanleAdd (id) {
    console.log(this.state,id)
  }

*/

/*
  // 事件 3 
  hanleAdd () {
    console.log(this.state)
  }

*/
  render() {
    return (
      <div>
      <input onChange={this.onInput} 
      onKeyUp={this.handleKey}
      type='text' 
      value={this.state.inputValue}
      ref={this.inputDom}
      />
      {/* 事件1 */}
      <button onClick={this.hanleAdd}>{this.props.btnText}</button>

      {/* 事件2   可以传递值  bind使用不够好  看事件3*/}
      {/* <button onClick={this.hanleAdd.bind(this, 22)}>{this.props.btnText}</button> */}
      
      {/* 事件  3 */}
      {/* <button onClick={this.hanleAdd}>{this.props.btnText}</button> */}
      </div>
    )
  }
}
