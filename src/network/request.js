import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  //2 axios 拦截器
  instance.interceptors.request.use(config => {
    // console.log(config);
    return config
  }, err => {
    console.log(err);
  })
  return instance(config)
}
