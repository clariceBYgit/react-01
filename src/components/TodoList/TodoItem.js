import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    console.log(this.props)
    return (
      <li>
        {this.props.peo}
        {this.props.title}
        {this.props.isOk? '完成' : '未完成'}


      </li>
    )
  }
}
      