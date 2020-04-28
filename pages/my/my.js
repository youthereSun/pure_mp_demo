// pages/my/my.js
//获取应用实例
const app = getApp()

Page({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo:{},
    hasUserInfo:false
  },
  onLoad(query) {
    if(app.globalData.userInfo){
        this.setData({
          userInfo:app.globalData.userInfo,
          hasUserInfo:true
        })
    }
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
