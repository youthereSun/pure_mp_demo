// pages/item_detail/item_detail.js
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
    item_id:''

  },
  onLoad:function(options){
    this.item_id=options.item_id;
    this.setData({
      item_id:options.item_id
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
