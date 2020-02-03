import React, { Component } from 'react'


export default class TodoItem extends Component {
// // 老版本的 constructor 里面通过props来初始化了一个state，在props修改之后，这个state不会再次更新
//   constructor (props) {
//     super()
//     this.state = {
//       okText : props.isOk ? '完成' : '未完成'
//     }
//   }
//     // （老版本） 就需要借助于  UNSAFE_componentWillReceiveProps来做一次修正
//   UNSAFE_componentWillReceiveProps (nextProps) {
//     this.setState({
//       okText : nextProps.isOk ? '完成' : '未完成'
//     })
//   }

// 新版本中  的解决
  constructor () {
    super()
    this.state = {
      okText: ''
    }
  }

static getDerivedStateFromProps (props) {
  console.log(props.isOk)
  return {
    okText: props.isOk ? '完成' : '未完成'
  }
}


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

  //  关于点击一个睡觉  另一个吃饭也要重复渲染的解决 
//  方法一 生命周期   shouldComponentUpdate
  // shouldComponentUpdate (nextProps, nextState) {
  //   // console.log(nextProps)

  //   return nextProps.isOk !== this.props.isOk
  // }

  render() {
      console.log(`TodoItem ${this.props.title} render`)
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
        {/* <span>{peo} {title} {isOk? '完成' : '未完成'}</span> */}
        <span>{peo} {title} {this.state.okText}</span>
      
      </li>
    )
  }
}


 

  
//关于点击一个睡觉  另一个吃饭也要重复渲染的解决 方法二      PureComponent   自动在shouldComponentUpdate中做了一个浅比较
// import React, { PureComponent } from 'react'

// export default class TodoItem extends PureComponent {

//   hanleCheckbox = () => {
//     // 写法1
//   //  this.props.onOkChange && this.props.onOkChange(this.props.id)
//   // 实际项目中   写法1
//    /* const {
//       onOkChange,
//       id
//     } = this.props
//     onOkChange && onOkChange(id)
//     */
//   //  实际项目中 写法2
  //   const {
  //     onOkChange = () => {},  //若没有传的时候，直接默认给一个空函数，不会报错
  //     id
  //   } = this.props
  //    onOkChange(id)  
  // }

//   //  关于点一个睡觉  另一个吃饭也要重复渲染的解决 方法一 生命周期
//   shouldComponentUpdate (nextProps, nextState) {
//     console.log(nextProps)

//     return nextProps.isOk !== this.props.isOk
//   }

//   render() {
//       console.log(`TodoItem ${this.props.title} render`)
//     const {
//       isOk,
//       title,
//       peo
//     } = this.props

//     return (
//       <li>
        
//         <input type='checkbox'
//           checked={isOk}
//           onChange={this.hanleCheckbox}
//         />
//         <span>{peo} {title} {isOk? '完成' : '未完成'}</span>

//       </li>
//     )
//   }
// }