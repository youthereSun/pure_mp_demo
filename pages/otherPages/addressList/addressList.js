// pages/otherPages/addressList/addressList‘.js
let app=getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        addressList: []

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {


    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
      //请求完成数据放到globalData中
      this.addressList=app.globalData.addressList;
      this.setData({
        addressList:this.addressList
      })
      console.log(this.addressList===this.data.addressList)
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },
    editAddress(e) {
        let item = e.currentTarget.dataset.addressitem;
        wx.navigateTo({
            url:"/pages/otherPages/addNewAddress/addnewAddress?type=edit&item="+JSON.stringify(item)
        })
        console.log(item)
    },
  addNewAddress(){
      wx.navigateTo({
        url:"/pages/otherPages/addNewAddress/addnewAddress?type=create"
      })
  },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})