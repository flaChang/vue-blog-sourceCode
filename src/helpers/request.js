//将发送请求抽离出来，作为一个单独的函数。
import axios from 'axios'
import { ElMessage } from 'element-plus'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = '//blog-server.hunger-valley.com'
// axios.defaults.baseURL = '//localhost:3006'

window.request = request

export default function request(url, type = 'GET', data = {}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type,
    }
    if(type.toLowerCase() === 'get') {
      option.params = data
    }else {
      option.data = data
    }
    if(localStorage.token) {
      axios.defaults.headers.common['Authorization']  = localStorage.token
    }

    axios(option).then(res => {

      if(res.data.status === 'ok') {
        if(res.data.token) {
          localStorage.token = res.data.token
        }
        resolve(res.data)
      }else{
        ElMessage.error(res.data.msg)
        reject(res.data)
      }
    }).catch(err => {
      ElMessage.error('网络异常')
      reject({ msg: '网络异常' })
    })
  })
}


// request('/auth/login', 'POST', {username: 'hunger', password: '123456'})
//   .then(data=>{
//     console.log(data)
//   })