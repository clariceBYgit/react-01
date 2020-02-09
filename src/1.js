import React from 'react'
import ReactDom from 'react-dom'


// const app = <h1>react01</h1>
// const createApp = (props) => {
//   return (
//     <div>
//       <h1>这是{props.title}框架</h1> 
//       <h2>react01</h2>
//     </div>
//     )
    

// }

// const app = createApp({
//   title: 'react'
// })

const App = (props) => {
  return (
    <div>
      <h1 title={props.title}>这是{props.font}框架</h1> 
      <h2>react01</h2>
    </div>
    )
    

}
ReactDom.render(
  <App title='1901' font='react' />,
  document.querySelector('#root')
)