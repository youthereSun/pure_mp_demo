// pages/otherPages/addNewAddress/addnewAddress.js
let app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        address: {
            id:"",
            name: "",
            mobile: "",
            region: ['上海市', '上海市', '黄浦区'],
            address: "",
            is_default: false
        },
        type:""

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //1
        if (options.type == "create") {

            let id=app.globalData.addressList.length;
            let address = this.data.address;
            address.id = id;
            this.setData({
                address: address,
                type:1
            })
        } else {
            this.setData({
                address: JSON.parse(options.item),
                type:0
            })
        }
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

    },
    bindinputName(e) {
        let address = this.data.address;
        address.name = e.detail.value;
        this.setData({
            address: address
        })
    },
    mobilechange(e) {
        let address = this.data.address;
        address.mobile = e.detail.value;
        this.setData({
            address: address
        })
    },
    bindinputAddress(e) {
        let address = this.data.address;
        address.address = e.detail.value;
        this.setData({
            address: address
        })
    },
    RegionChange: function (e) {
        let address = this.data.address;
        address.region = e.detail.value;
        this.setData({
            address: address
        })
    },
    switchChange(e) {
        let address = this.data.address;
        address.is_default = e.detail.value;
        this.setData({
            address: address
        })
    },
    saveAddress() {
        //先做校验;设为默认时需要提交数据给后台，设置flag

        if(this.data.type==1){
        console.log(this.data.address)
        app.globalData.addressList.push(this.data.address)
        }else {
            app.globalData.addressList[this.data.address['id']]=this.data.address
        }
        wx.navigateBack()
    }
})