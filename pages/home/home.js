import api from '../../api/api'
import {LOGIN, GETSWIPERARR, GETWATERFALL} from '../../api/apiList'

Page({

    /**
     * 组件的初始数据
     */
    data: {
        DotStyle: true,
        cardCur: 0,
        swiperArr: [],
        dataSet: [],
        brick_option: {
            showFullContent: true,
            // backgroundColor:"#16A085",
            // forceRepaint: true,
            defaultExpandStatus: false,
            // imageFillMode:'aspectFill'
            // columns: 3
            // icon: {
            //   fill: 'https://images.ifanr.cn/wp-content/uploads/2018/08/640-90-1024x576.jpeg',
            //   default:'https://images.ifanr.cn/wp-content/uploads/2018/08/640-90-1024x576.jpeg',
            // },
            // fontColor:'black'
        }

    },
    onLoad() {
        let that = this;
        const p1 = api.post(GETSWIPERARR)
        const p2 = api.post(GETWATERFALL)
        wx.showLoading()
        Promise.all([p1, p2]).then(res=>{

            let list1=res[0].swiperArr;
            let list2=res[1].dataSet;
            that.setData({
                swiperArr:list1,
                dataSet:list2
            })
            wx.hideLoading()
        })

    },


    // cardSwiper
    cardSwiper(e) {
        this.setData({
            cardCur: e.detail.current
        })
    }
    ,
    getCurrent(e) {
        let data = e.currentTarget.dataset.index;
        let modal = e.currentTarget.dataset.modal;
        console.log(data)
        this.setData({
            modalName: modal,
            modal_content: "当前索引：" + data
        })
    }
    ,
    hideModal() {
        this.setData({
            modalName: null
        })
    }
    ,
    // 改变卡片展开状态事件的回调
    handleExpand: function (event) {
        console.log(event.detail)
        console.log('expand call back')
    },

    // 点击卡片
    tapCard: function (event) {
        console.log(event.detail)
        console.log('tap card!')
        wx.navigateTo({
            url: "/pages/item_detail/item_detail?item_id=" + event.detail.card_id
        })
    },

    // 点赞
    handleLike: function (event) {
        console.log(event.detail)
        console.log('like!')
    },

    // 点击用户头像区域
    handleUserEvent: function (event) {
        console.log(event.detail)
        console.log('user!')
    },
    onReachBottom: function () {
        console.log('reach bottom')
    },
    sendRequest() {
        let options = {
            username: "admin",
            password: "admin"
        };
        api.post(LOGIN, options).then(res => {
            wx.setStorageSync("token", res.token)
        }).catch(error => {
            console.log(error)
        })
    }
})
