import React, { Component } from 'react'

export default class Like extends Component {
  constructor () {
    super()
    this.state = {
      isLiked: false
    }
  }

  handleLike = () => {
    // 要修改数据，只能使用setState方法，可以有两个参数形式，
  // 第一个参数有两种情况,第一种情况是一个的对象
  /*
    this.setState({
      isLiked: !this.state.isLiked
    })
    */
  //  第二个情况是一个方法   方法中preState保存着上一次的数据  证明setState是异步的
  this.setState((preState,props)=>{
    console.log(preState, props)
    console.log('setState外部的this.state.isLiked',this.state.isLiked)
    return {
      isLiked: !this.state.isLiked
    }
  },() => {
    // 由于setState是异步的.如果想要获取最新的state，应该是在这个回调里来获取
    console.log(this.state.isLiked)
  })

  console.log('setState外部的this.state.isLiked',this.state.isLiked)
  }
  render() {

    return (
      <div>
        <span onClick={this.handleLike}>
        {
          this.state.isLiked? '取消❤️':'喜欢🖤'
        }
        </span>
        
      </div>
    )
    
  }
}
