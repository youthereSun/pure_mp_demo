//app.js
App({
    onLaunch: function () {
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 登录
        wx.login({
            success: res => {
                if (res.errMsg.indexOf('login:ok') != -1) {
                    console.log("code=" + res.code)
                    this.globalData.openID = "TEST-OPENID"
                }

                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        })
        // 获取用户信息
        /*    wx.getSetting({
              success: res => {
                if (res.authSetting['scope.userInfo']) {
                  // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                  wx.getUserInfo({
                    success: res => {
                      // 可以将 res 发送给后台解码出 unionId
                      this.globalData.userInfo = res.userInfo

                      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                      // 所以此处加入 callback 以防止这种情况
                      if (this.userInfoReadyCallback) {
                        this.userInfoReadyCallback(res)
                      }
                    }
                  })
                }
              }
            })*/
    },
    globalData: {
        userInfo: null,
        openID: '',
        addressList: [{
            id: 0,
            name: "张三",
            mobile: "13200000000",
            region: ['上海市', '上海市', '黄浦区'],
            address: "东台大街10号",
            is_default: false
        },
            {
                id: 1,
                name: "王二",
                mobile: "13211111100",
                region: ['江苏市', '无锡市', '梁溪区'],
                address: "西不数据大街99号",
                is_default: false
            }]
    }
})