 const app=getApp();

 const request = (url, options) => {
     return new Promise((resolve, reject) => {
         wx.request({
             url: `${app.globalData.host}${url}`,
             method: options.method,
             data: options.method === 'GET' ? options.data : JSON.stringify(options.data),
             header: {
                 'Content-Type': 'application/json; charset=UTF-8',
                 'Token': wx.getStorageSync("token")  // 看自己是否需要,可从storage中取
             },
             success(result) {
                 console.log(result)
                 if (result.data.code === 200) {
                     resolve(result.data.result)
                 } else {
                     reject(result.data.result)
                 }
             },
             fail(error) {
                 reject(error.data)
             }
         })
     })
 }

 const get = (url, options = {}) => {
     return request(url, { method: 'GET', data: options })
 }

 const post = (url, options) => {
     return request(url, { method: 'POST', data: options })
 }

 const put = (url, options) => {
     return request(url, { method: 'PUT', data: options })
 }

 // 不能声明DELETE（关键字）
 const remove = (url, options) => {
     return request(url, { method: 'DELETE', data: options })
 }
 module.exports = {
     get,
     post,
     put,
     remove
 }
