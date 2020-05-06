// pages/my/my.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 组件的初始数据
   */
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo:{},
    hasUserInfo:false,
    screenBrightness:''
  },
  onLoad(query) {
    wx.setTabBarBadge({
      index:3,
      text:"99",
      success(res){
        console.log(res)
      }
    })


    if(app.globalData.userInfo){
        this.setData({
          userInfo:app.globalData.userInfo,
          hasUserInfo:true
        })
    }
  },
  onShow(){
    let that=this;
    wx.getScreenBrightness({
      success(res){
        that.setData({
          screenBrightness:res.value
        })
      }
    })

    wx.setScreenBrightness({
      value: 1,    //屏幕亮度值，范围 0~1，0 最暗，1 最亮
    })

  },
  onHide() {
    wx.setScreenBrightness({
      value: this.data.screenBrightness,    //屏幕亮度值，范围 0~1，0 最暗，1 最亮
    })


  },
  systemScan(){
    let that=this;
    wx.scanCode({
     // onlyFromCamera: true,  //// 只允许从相机扫码
      success(result){
        console.log(result)
        wx.showModal({
          title: '提示',
          content: result.result,
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    })
  },
  bindGetUserInfo(e){
    //用户授权=》设置状态=》存到globaldata
    if(e.detail.userInfo){
      console.log(e.detail.userInfo)
      app.globalData.userInfo=e.detail.userInfo;
        this.setData({
          userInfo:e.detail.userInfo,
          hasUserInfo:true
        })
      //用户拒绝授权
    }else {
      this.showModal("用户拒绝授权")

    }
  },
  goProfile(){
    console.log("前往profile")
    wx.navigateTo({
      url: "/pages/profile/profile"
    })
  },
  showModal(content){
    this.setData({
      modalName:'Modal',
      modal_content:content
    })
  },
  hideModal(){
    this.setData({
      modalName:'',
    })
  },
  logout(){
    app.globalData.userInfo={};
    this.setData({
      userInfo:{},
      hasUserInfo:false
    })
  },
  manageAddressList(){
    wx.navigateTo({
      url:"/pages/otherPages/addressList/addressList"
    })

  },
  checkAllOrders(){
    wx.navigateTo({
      url:   "/pages/otherPages/allOrders/allOrders"
    })
  },


  /**
   * 组件的方法列表
   */
  methods: {



  }
})
