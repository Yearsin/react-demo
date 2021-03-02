import axios from 'axios';
// import { MessageBox, Loading } from 'element-ui';
// import store from '@/store/index';

axios.defaults.withCredentials = false; // 表示跨域请求时是否需要使用凭证, 默认false
axios.defaults.baseURL = process.env.API_ROOT_MAIN; // process.env.API_ROOT_MAIN

// let loading;
// let loadingNumber = 0; // 针对同时多个请求的Loading
// let openLoading = () => {
//     loading = Loading.service({
//         lock: false,
//         background: 'rgba(0, 0, 0, 0.7)'
//     });
// };

// let closeLoading = () => {
//     loading.close();
// };

// request 拦截器
// axios.interceptors.request.use((config) => {
//     loadingNumber++;
//     config.headers.token = store.state.token || localStorage.getItem('token'); // 设置Token
//     config.loading && openLoading(); // 默认打开loading，可在实际请求中关闭
//     return config;
// }, (error) => {
//     loadingNumber--;
//     loadingNumber === 0 && closeLoading(); // 关闭loading
//     return Promise.reject(error);
// });

// response 拦截器
// axios.interceptors.response.use((response) => {
//     loadingNumber--;
//     loadingNumber === 0 && closeLoading(); // 关闭loading
//     if (response.status === 200) {
//         // 未登录直接跳转登录页面
//         if (Number(response.data.code) === 450) {
//             // 清除缓存token
//             localStorage.removeItem('token');
//             store.dispatch('setToken', null);
//             location.href = '/login';
//             return;
//         }
//         return Promise.resolve(response);
//     } else {
//         return Promise.reject(response);
//     }
// }, (error) => {
//     loadingNumber--;
//     loadingNumber === 0 && closeLoading(); // 关闭loading
//     if (error.message.includes('timeout')) { // 判断请求异常信息中是否含有超时timeout字符串
//         MessageBox.alert('请求超时，请检查您的网络', '出错了');
//         return Promise.reject(error.response);
//     }
//     if (error.response.status) {
//         return Promise.reject(error.response);
//     }
// });

// 封装get请求
export function Get (url, params, headers) {
    let _headers = headers || {};
    return new Promise((resolve, reject) => {
        axios.defaults.loading = !(_headers.loading === 0); // 可设置loading: 0关闭接口请求loading动效，默认开启
        axios.defaults.timeout = _headers.timeout ? 1000 * _headers.timeout : 20 * 1000; // 可设置最大超时时间
        // axios.defaults.baseURL = _headers.serviceApi ? process.env[_headers.serviceApi] : process.env.API_ROOT_MAIN; // api 根地址
        axios.get(url, {params: params}).then(res => {
            resolve(res.data);
        }).catch(error => {
            reject(error.data);
        });
    });
}

// 封装post请求
export function Post (url, params, headers) {
    let _headers = headers || {};
    return new Promise((resolve, reject) => {
        axios.defaults.loading = !(_headers.loading === 0); // 可设置loading: 0关闭接口请求loading动效，默认开启
        axios.defaults.timeout = _headers.timeout ? 1000 * _headers.timeout : 20 * 1000; // 可设置最大超时时间
        // axios.defaults.baseURL = _headers.serviceApi ? process.env[_headers.serviceApi] : process.env.API_ROOT_MAIN; // api 根地址
        axios.post(url, params, {
            headers: {
                'Content-Type': _headers['Content-Type'] || 'application/json;charset=UTF-8' // headers对象参数传入自定义Content-Type
            },
            responseType: _headers['responseType'] || ''
        })
            .then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error.data);
            });
    });
}

// 封装put请求
export function Put (url, params, headers) {
    let _headers = headers || {};
    return new Promise((resolve, reject) => {
        axios.defaults.loading = !(_headers.loading === 0); // 可设置loading: 0关闭接口请求loading动效，默认开启
        axios.defaults.timeout = _headers.timeout ? 1000 * _headers.timeout : 20 * 1000; // 可设置最大超时时间
        // axios.defaults.baseURL = _headers.serviceApi ? process.env[_headers.serviceApi] : process.env.API_ROOT_MAIN; // api 根地址
        axios.put(url, params, {
            headers: {
                'Content-Type': _headers['Content-Type'] || 'application/json;charset=UTF-8' // headers对象参数传入自定义Content-Type
            }
        })
            .then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error.data);
            });
    });
}

// 封装delete请求
export function _Delete (url, params, headers) {
    let _headers = headers || {};
    return new Promise((resolve, reject) => {
        axios.defaults.loading = !(_headers.loading === 0); // 可设置loading: 0关闭接口请求loading动效，默认开启
        axios.defaults.timeout = _headers.timeout ? 1000 * _headers.timeout : 20 * 1000; // 可设置最大超时时间
        // axios.defaults.baseURL = _headers.serviceApi ? process.env[_headers.serviceApi] : process.env.API_ROOT_MAIN; // api 根地址
        axios.delete(url, params, {
            headers: {
                'Content-Type': _headers['Content-Type'] || 'application/json;charset=UTF-8' // headers对象参数传入自定义Content-Type
            }
        })
            .then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error.data);
            });
    });
}
