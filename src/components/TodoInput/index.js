import React, { Component } from 'react'
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
  }
  onInput = (e) => {
    // console.log(e)
    this.setState({
      inputValue:e.currentTarget.value
    })
  }

  // 事件  1.
  hanleAdd = () => {
    // 接受app.js 定义的方法
    this.props.addTodo(this.state.inputValue)
    console.log(this.state)
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
      <input onChange={this.onInput} type='text' value={this.state.inputValue} />
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
