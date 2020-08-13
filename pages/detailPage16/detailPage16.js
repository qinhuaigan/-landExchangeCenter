// pages/detailPage16/detailPage16.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startAnimate: false,
    images: [
      'https://res1.eqh5.com/FhIxlYKbW3Sy7OSJDeyzAufe66Ru?imageMogr2/auto-orient/thumbnail/645x443%3E/format/webp',
      'https://res1.eqh5.com/Fiw6au3trr-hpDC-hs8EJngQrl-v?imageMogr2/auto-orient/thumbnail/698x460%3E/format/webp',
      'https://res1.eqh5.com/Fj_htgG2ZByOYv87EjIGjEZPxz9C?imageMogr2/auto-orient%7CimageMogr2/auto-orient/crop/!1016x481a0a0%7CimageMogr2/auto-orient/thumbnail/695x328%3E/format/webp',
      'https://res1.eqh5.com/FouF5OBmR4JKMuZ9NEIxEkin5oVR?imageMogr2/auto-orient%7CimageMogr2/auto-orient/crop/!997x482a0a0%7CimageMogr2/auto-orient/thumbnail/693x333%3E/format/webp'
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