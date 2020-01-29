import React, { Component } from 'react'

export default class TodoInput extends Component {
  render() {
    return (
      <div>
      <input />
      <button>{this.props.btnText}</button>
      </div>
    )
  }
}
