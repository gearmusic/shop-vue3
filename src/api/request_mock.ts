import axios from 'axios'

const requestMock = axios.create({
  baseURL: '/mock',
  timeout: 5000,
})

//请求拦截器
requestMock.interceptors.request.use((config) => {
  
  return config
})

//响应拦截器
requestMock.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    return Promise.reject(new Error('response failed!'))
  }
)

export default requestMock

