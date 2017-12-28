const router = require('koa-router')();
const axios = require('axios');

const baseUrl = 'http://192.168.3.44:8080';

const proxy = {
  api() {
    return async(ctx, next) => {
      console.log(axios)
      // get请求参数
      // console.log(ctx.query)
      // 请求方法 请求url  请求头
      const {method, url} = ctx.request
      axios.get(`${baseUrl}${url}`).then(res => {
      	console.log(res)
      })
      axios(`${baseUrl}${url}`, {
        method,
        data: ctx.request.body,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res => {
        if (res.status === 200) {
          ctx.body = res.data
        } else {
          ctx.status = res.status
          ctx.body = res.data
        }
      }).catch(err => {
        if (err.response) {
          ctx.status = 500
          ctx.body = err.response.data
        } else {
          ctx.status = 500
          ctx.body = {
            success: false,
            msg: '未知错误'
          }
        }
      })
    }
  }
}


module.exports = router
  .use('/', proxy.api())
