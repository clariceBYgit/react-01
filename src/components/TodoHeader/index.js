import React from 'react'
import PropTypes from 'prop-types'



export default function TodoHeader(props) {
  // console.log(props)
  return (
    <>
      <h1>
        {props.children}
      </h1>
      <h3>{props.desc}</h3>
      <p>{props.x + props.y}</p>
      {/* 判断 类型  使用第三方的prop-types npm i --save prop-type*/}
      <p>{props.a + props.b}</p>
    </>
     
  )
}

TodoHeader.propTypes = {
  desc: PropTypes.string,
  x: PropTypes.number.isRequired,
  y: PropTypes.number,
  a: PropTypes.string //若不是数值型会报错Warning: Failed prop type: Invalid prop `a` of type `string` supplied to `TodoHeader`, expected `number`.


}
TodoHeader.defaultProps = {
  desc: '昨日清风徐徐'
}