import React, { Component } from 'react'


export default class TodoItem extends Component {

  hanleCheckbox = () => {
    // 写法1
  //  this.props.onOkChange && this.props.onOkChange(this.props.id)
  // 实际项目中   写法1
   /* const {
      onOkChange,
      id
    } = this.props
    onOkChange && onOkChange(id)
    */
  //  实际项目中 写法2
    const {
      onOkChange = () => {},  //若没有传的时候，直接默认给一个空函数，不会报错
      id
    } = this.props
     onOkChange(id)  
  }
  render() {
    
    const {
      isOk,
      title,
      peo
    } = this.props

    return (
      <li>
        
        <input type='checkbox'
          checked={isOk}
          onChange={this.hanleCheckbox}
        />
        <span>{peo} {title} {isOk? '完成' : '未完成'}</span>
      


      </li>
    )
  }
}
      