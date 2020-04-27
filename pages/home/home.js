// pages/home/home.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {},

    /**
     * 组件的初始数据
     */
    data: {
        DotStyle: true,
        cardCur: 0,
        swiperArr: [{
            id: "1084",
            photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576173486008&di=68514e7684d0753c5100994fae6456cb&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201612%2F07%2F20161207195613_xuEFP.thumb.700_0.jpeg",
            title: "虽然你我会下落不明",
        }, {
            id: "1084",
            photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576173486004&di=3ef63a12a8372b81bfe97b81adee093d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201612%2F07%2F20161207195604_jNSGc.thumb.700_0.jpeg",
            title: "你知道我曾为你动过情"
        }, {
            id: "1084",
            photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576173486004&di=3ef63a12a8372b81bfe97b81adee093d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201612%2F07%2F20161207195604_jNSGc.thumb.700_0.jpeg",
            title: "我欲与君相知，长命无绝衰。山无陵，江水为竭。东雷震震，夏雨雪。天地合，乃敢与君绝"
        }, {
            id: "1084",
            photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576173620777&di=54b7ee5f59c30503096ccabbe0ed9a8e&imgtype=0&src=http%3A%2F%2Fp.store.itangyuan.com%2Fp%2Fchapter%2Fattachment%2Feg-VEBjtEA%2FEgfWEgMVEgjTe_-W4BEU40u3KhifeUL1HtDvHhsVgU9hK6LqG1opiMO.jpg",
            title: "晓看天色，暮看云，行也思君，坐也思君",
        }],
        dataSet: [
            {
                id: '5b61575a4256350d332d03a1',
                title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,',
                content:
                    'Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                time: 1533106010,
                user: {
                    avatar: 'https://cdn.ifanr.cn/ifanr/default_avatar.png',
                    userId: 123123123,
                    username: 'Lorem ipsum dolor sit am'
                },
                likedCount: 122,
                liked: true,
                images: [
                    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1617497643,3423931853&fm=26&gp=0.jpg',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587974994276&di=195c7df1ef23b8fd8878a48644a0a245&imgtype=0&src=http%3A%2F%2F00imgmini.eastday.com%2Fmobile%2F20180824%2F20180824153817_f6bd6753f29acbba961d7d68b3ef3869_1.jpeg'
                ]
            },
            {
                id: '123123123',
                content:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                time: 1533106010,
                user: {avatar: 'https://cdn.ifanr.cn/ifanr/default_avatar.png', userId: 123123123, username: '知晓妹'},
                likedCount: 0,
                liked: true
            },
            {
                id: '5b61575a4256weqwe350d332d03a1',
                content:
                    'Lorem ipsum dolor sit amet,  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                time: 1533106010,
                user: {avatar: 'https://cdn.ifanr.cn/ifanr/default_avatar.png', userId: 123123123, username: '知晓妹'},
                likedCount: 0
            },
            {
                id: '5b61575a42dasda56350d332d03a1',
                content: '爱范儿，让未来触手可及。',
                time: 1533106010,
                user: {avatar: 'https://cdn.ifanr.cn/ifanr/default_avatar.png', userId: 123123123, username: '知晓妹'},
                likedCount: 0
            },
            {
                id: '5b61575weweqa4256350d332d03a1',
                content: '爱范儿，让未来触手可及。',
                time: 1533106010,
                user: {avatar: 'https://cdn.ifanr.cn/ifanr/default_avatar.png', userId: 123123123, username: '知晓妹'},
                likedCount: 0,
                images: ['https://images.ifanr.cn/wp-content/uploads/2018/08/640-90-1024x576.jpeg']
            }
        ],
        brick_option: {
            showFullContent: true,
            // backgroundColor:"#16A085",
            // forceRepaint: true,
            defaultExpandStatus: true,
            // imageFillMode:'aspectFill'
            // columns: 3
            // icon: {
            //   fill: 'https://images.ifanr.cn/wp-content/uploads/2018/08/640-90-1024x576.jpeg',
            //   default:'https://images.ifanr.cn/wp-content/uploads/2018/08/640-90-1024x576.jpeg',
            // },
            // fontColor:'black'
        }

    },


    /**
     * 组件的方法列表
     */
    methods: {
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
                url: "/pages/item_detail/item_detail?item_id="+event.detail.card_id
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

            this.setData({
                dataSet: [
                    {
                        id: '5b2d03a1',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,',
                        content:
                            'Lnim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        time: 1533106010,
                        user: {
                            avatar: 'https://cdn.ifanr.cn/ifanr/default_avatar.png',
                            userId: 123123123,
                            username: 'Lorem ipsum dolor sit am'
                        },
                        likedCount: 122,
                        liked: true,
                        images: ['https://images.ifanr.cn/wp-content/uploads/2018/08/640-90-1024x576.jpeg']
                    },
                    {
                        id: '123123123',
                        content:
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        time: 1533106010,
                        user: {
                            avatar: 'https://cdn.ifanr.cn/ifanr/default_avatar.png',
                            userId: 123123123,
                            username: '知晓妹'
                        },
                        likedCount: 0,
                        liked: true
                    },
                    {
                        id: '5b61575a4256weqwe350d332d03a1',
                        content:
                            'Lorem ipsum dolor sit amet,  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        time: 1533106010,
                        user: {
                            avatar: 'https://cdn.ifanr.cn/ifanr/default_avatar.png',
                            userId: 123123123,
                            username: '知晓妹'
                        },
                        backgroundColor: '#AF7AC5',
                        likedCount: 0
                    },
                    {
                        id: '5b61575a42dasda56350d332d03a1',
                        content: '爱范儿，让未来触手可及。',
                        time: 1533106010,
                        user: {
                            avatar: 'https://cdn.ifanr.cn/ifanr/default_avatar.png',
                            userId: 123123123,
                            username: '知晓妹'
                        },
                        backgroundColor: '#AF7AC5',
                        likedCount: 0
                    },
                    {
                        id: '5b61575weweqa4256350d332d03a1',
                        content: '爱范儿，让未来触手可及。',
                        time: 1533106010,
                        user: {
                            avatar: 'https://cdn.ifanr.cn/ifanr/default_avatar.png',
                            userId: 123123123,
                            username: '知晓妹'
                        },
                        backgroundColor: '#AF7AC5',
                        likedCount: 0,
                        images: ['https://images.ifanr.cn/wp-content/uploads/2018/08/640-90-1024x576.jpeg']
                    },
                    {
                        id: '5b61575adas4256350d332d03a1',
                        content: '爱范儿，让未来触手可及。',
                        time: 1533106010,
                        user: {
                            avatar: 'https://cdn.ifanr.cn/ifanr/default_avatar.png',
                            userId: 123123123,
                            username: '知晓妹'
                        },
                        likedCount: 0,
                        liked: true
                    },
                    {
                        id: '123da123123',
                        content:
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        time: 1533106010,
                        user: {
                            avatar: 'https://cdn.ifanr.cn/ifanr/default_avatar.png',
                            userId: 123123123,
                            username: '知晓妹'
                        },
                        likedCount: 0,
                        liked: true
                    },
                    {
                        id: '532d03a1',
                        content: 'Lorem ipsum dion icia deserunt mollit anim id est laborum.',
                        time: 1533106010,
                        user: {
                            avatar: 'https://cdn.ifanr.cn/ifanr/default_avatar.png',
                            userId: 123123123,
                            username: '知晓妹'
                        },
                        backgroundColor: '#AF7AC5',
                        likedCount: 0
                    },
                    {
                        id: '5b61575a42da3a1',
                        content: '爱范儿，让未来触手可及。',
                        time: 1533106010,
                        user: {
                            avatar: 'https://cdn.ifanr.cn/ifanr/default_avatar.png',
                            userId: 123123123,
                            username: '知晓妹'
                        },
                        backgroundColor: '#AF7AC5',
                        likedCount: 0
                    },
                    {
                        id: '5b61575a41236350d332d03a1',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,',
                        content:
                            'Lorem ipsum aliquip ex ea commodo consequat. Duis aute irure doloolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        time: 1533106010,
                        user: {
                            avatar: 'https://cdn.ifanr.cn/ifanr/default_avatar.png',
                            userId: 123123123,
                            username: 'Lorem ipsum dolor sit am'
                        },
                        likedCount: 122,
                        liked: true,
                        images: ['https://images.ifanr.cn/wp-content/uploads/2018/08/640-90-1024x576.jpeg']
                    },
                    {
                        id: '5basda4256350d332d03a1',
                        content: '爱范儿，让未来触手可及。',
                        time: 1533106010,
                        user: {
                            avatar: 'https://cdn.ifanr.cn/ifanr/default_avatar.png',
                            userId: 123123123,
                            username: '知晓妹'
                        },
                        backgroundColor: '#AF7AC5',
                        likedCount: 0
                    }
                ]
            })
        },
    }
})
