//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello 朋友，你好！',
    userInfo: {},
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  }
})
