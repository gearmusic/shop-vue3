import axios from 'axios'

const requestLocal = axios.create({
  baseURL: '/images',
  method: 'get',
  timeout: 5000,
})

//请求拦截器
requestLocal.interceptors.request.use((config) => {
  
  return config
})

//响应拦截器
requestLocal.interceptors.response.use(
  res => {
    return res
  },
  err => {
    return Promise.reject(new Error('response failed!'))
  }
)

export default requestLocal

