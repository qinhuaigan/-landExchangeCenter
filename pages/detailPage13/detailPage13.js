// pages/detailPage13/detailPage13.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startAnimate: false,
    images: [
      'https://res1.eqh5.com/Fo-czbUH_1X2So34JZ-cgBZ8Kacr?imageMogr2/auto-orient/thumbnail/645x450%3E/format/webp',
      'https://res1.eqh5.com/Fkx943xa_J7BoLWcpFxwnfF9hgeL?imageMogr2/auto-orient%7CimageMogr2/auto-orient/crop/!724x504a0a0%7CimageMogr2/auto-orient/thumbnail/663x460%3E/format/webp',
      'https://res1.eqh5.com/Fo32gsJvJtDOlxnFS3JPvveSzs1O?imageMogr2/auto-orient/thumbnail/640x818%3E/format/webp',
      'https://res1.eqh5.com/FpnnYDLQZjZmsINQGrozK5exaDdQ?imageMogr2/auto-orient%7CimageMogr2/auto-orient/crop/!695x951a0a0%7CimageMogr2/auto-orient/thumbnail/643x883%3E/format/webp'
    ]
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
    this.setData({
      startAnimate: true
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  preview(event) {
    let currentUrl = event.currentTarget.dataset.src
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.images // 需要预览的图片http链接列表
    })
  },
})