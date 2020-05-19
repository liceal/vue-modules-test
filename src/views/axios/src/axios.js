import Axios from "axios";

//请求拦截器
Axios.interceptors.request.use(
    (config) => {
        //发送请求之前什么
        console.log('发送请求之前钩子', config);

        return config;
    },
    (error) => {
        //对错误请求做些什么
        console.log('错误请求钩子', error);

        return Promise.reject(error)
    }
)

//响应拦截器
Axios.interceptors.response.use(
    (response) => {
        //对响应数据做点什么
        console.log('成功响应钩子', response);

        return response
    },
    (error) => {
        //对响应错误做点什么
        console.log('错误响应钩子', error);

        return Promise.reject(error)
    }
)

export default Axios