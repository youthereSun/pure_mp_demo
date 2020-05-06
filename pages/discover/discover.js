// pages/discover/discover.js
import api from '../../api/api'
import {GETLIST} from '../../api/apiList'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        search_keyword: '',
        list: []

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    }
    ,

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      let options={};
        wx.showLoading({
            title: '加载中',
        })
      api.post(GETLIST,options).then(res=>{
          wx.hideLoading()
        let list=res.list;
        this.setData({
          list:list
        })

      }).catch(error=>{
          wx.hideLoading()
        console.log(error)
      })


    }
    ,
    addNewItem(){
        wx.navigateTo({
            url: "/pages/otherPages/addNewItem/addNewItem"
        })

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    }
    ,

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    }
    ,

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    }
    ,

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    }
    ,

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    }
    ,
    doSearch(e) {
        let key = e.detail;
        this.setData({
            search_keyword: key
        })

        wx.showModal({
            title: '大人，确认下呢',
            content: '你要搜的关键字是【' + this.data.search_keyword + "】吗",
            showCancel: true,//是否显示取消按钮
            cancelText: "不想搜啦",//默认是“取消”
            cancelColor: '#3E4363',//取消文字的颜色
            confirmText: "给我搜它",//默认是“确定”
            confirmColor: '#3E4363',//确定文字的颜色
            success: function (res) {
                if (res.cancel) {
                    //点击取消,默认隐藏弹框
                } else {
                    //点击确定
                    console.log("点击确认")
                }
            },
            fail: function (res) {
            },//接口调用失败的回调函数
            complete: function (res) {
            },//接口调用结束的回调函数（调用成功、失败都会执行）
        })
    }
    ,
    cancelSearch() {
        console.log("取消搜索")
    }
    ,

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})