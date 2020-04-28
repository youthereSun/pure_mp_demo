// pages/profile/profile.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name: "",
        mobile: "",
        mail: ""

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        /*启动时通过request请求查取数据*/
        let openid = app.globalData.openID;
        console.log(openid)
        this.setData({
            name: "mockname",
            mobile: "13222222222",
            mail: "example@google.com"
        })

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

    },

    confirm_modification() {
        let name = this.data.name;
        let mobile = this.data.mobile;
        let mail = this.data.mail;
        console.log(name + mail + mobile)
        this.setData({
            modalName: "Modal",
            modal_content: "修改成功"
        })

    },
    hideModal() {
        this.setData({
            modalName: null
        })
    },
    setName(e) {
        let newName = e.detail.value;
        this.setData({
            name: newName
        })

    },
    setMail(e) {
        let newMail = e.detail.value;
        this.setData({
            mail: newMail
        })

    },
    setMobile(e) {
        let newMobile = e.detail.value;
        this.setData({
            mobile: newMobile
        })

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

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})