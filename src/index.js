import React from 'react'
import  { render} from 'react-dom'


// 入口文件
import App from './App'


// 深拷贝 deepCopy
// import { cloneDeep  } from 'lodash'


// immutable.js的使用
import {  Map, List, fromJS, is } from 'immutable'


const state = {
  name: '欺负',
  obj: {
    x:1,
    y:{
      z:2
    }
  },
  courses: ["英语",'数学','语文']
}

// immutable对象， Map
const imState = Map(state)
console.log(imState , state)   //打印出来的数据格式不一样
// 取值使用get
console.log(imState.get('name'))  //欺负
// 设置使用set,每次修改或删除会返回新的immutable对象，需要赋值来接收
const newName = imState.set('name','千玺')
console.log(newName.get('name'),imState.get('name'))   //千玺，欺负


// immutable数组 List
const list1 = List([ 1, 2 ]);
const list2 = list1.push(3, 4, 5);
// .get(数组下标)
console.log(list1.get(4), list2.get(4))   //undefined, 5
 


//immutable 复杂的数据结构 fromJS
const jsState = fromJS(state)
console.log(jsState)  //直接转化，最外层是Map,内层是List
console.log(jsState.get('courses').get(0))  //英语
console.log(jsState.getIn(['courses',0]))   //  上述的简写   英语
// 取出obj下的y中的z
console.log(jsState.getIn(['obj','y','z']))  //2
// 取出obj下的y中的z+1
const newZ1 = jsState.updateIn(['obj','y','z'], v => v + 1)
console.log(newZ1.getIn(['obj','y','z']))  //3
// 修改obj下的y中的z为100
const newZ  = jsState.setIn(['obj','y','z'],100)
console.log(newZ.getIn(['obj','y','z']))  //100

// immutable  转化为原生的js  toJS()


// immutable  比较  equal  is()  数据一样
const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = Map({ a: 1, b: 2, c: 3 });
console.log(map1.equals(map2))  //  true
console.log(is(map1, map2))  //true





// 1.deepCopy方法一
// const newState = JSON.parse(JSON.stringify(state))
// 2.deepCopy方法二
// const newState = cloneDeep(state)
// console.log(newState === state)  //false
// const newState = state
// console.log(newState === state)  //true



// 若想要全局的扩展React.Component的prototype ，若想把ajax的方法全局挂载组件的this上，就可以使用下面的方法
// 第一步引入所有的ajax请求
// import * as services from './services'
// 第二步 在prototype上挂载一个叫http,然后就可以在组件内部通过this.http.方法名来执行一些操作
// React.Component.prototype.http = services


render(
  <App />,
  document.querySelector('#root')
)