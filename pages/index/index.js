//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '欢迎使用犇云智慧营销服务平台',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.reLaunch({
      url: '../home/home',
    })
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    //   // 用户允许获取头像信息，跳转的首页
    //   wx.reLaunch({
    //     url: '../home/home',
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     // 用户允许获取头像信息，跳转的首页
    //     wx.reLaunch({
    //       url: '../home/home'
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //       // 用户允许获取头像信息，跳转的首页
    //       wx.reLaunch({
    //         url: '../home/home',
    //       })
    //     }
    //   })
    // }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    if (e.detail.errMsg === 'getUserInfo:ok') {
      // 用户允许获取头像信息，跳转的首页
      wx.reLaunch({
        url: '../home/home',
      })
    }
  }
})
