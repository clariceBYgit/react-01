import axios from 'axios'

import apis from './api'

const ajax = axios.create({

  baseURL: apis.baseURL
  
})

// 在这里还会去做一写全局的拦截器处理

export const getTodos = () => {
  return ajax.get(apis.todos)

}