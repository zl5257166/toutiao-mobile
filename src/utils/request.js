import axios from 'axios'

const service = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
})

// 请求拦截器

// 响应拦截器

export default service
