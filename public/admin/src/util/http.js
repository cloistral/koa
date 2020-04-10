
import axios from 'axios'

const Axios = axios.create({ timeout: 10000 })
Axios.interceptors.request.use(config => {
    if (localStorage.token) {
        config.headers.Authorization = 'Bearer ' + localStorage.token
    }
    return config
}, error => {
    return Promise.reject(error);
})


Axios.interceptors.response.use(response => {
    return response.data
}, error => {
    let response = error.response
    if (response.status === 401) {
        // 401 说明 token 验证失败
    }
    return Promise.reject(response.data); 
})

export default {
    install(Vue) {
        Object.defineProperty(Vue.prototype, '$http', { value: Axios })
    }
}