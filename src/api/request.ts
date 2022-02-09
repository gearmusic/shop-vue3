import axios from 'axios'
import { getToken } from '@/libs/token'

const UUID = 'aa973966-c323-42a1-9ae1-0f0dba690fa5'



const request = axios.create({
  baseURL: '/api',
  timeout: 5000,
})

//请求拦截器
request.interceptors.request.use((config) => {
  
  config.headers && (config.headers.userTempID = 'aa973966-c323-42a1-9ae1-0f0dba690fa5') 
  
  let token = getToken()
  if(token && config.headers) config.headers.token = token
  
  return config
})

//响应拦截器
request.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    return Promise.reject(new Error('response failed!'))
  }
)

export default request