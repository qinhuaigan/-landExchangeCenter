// pages/detailPage21/detailPage21.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startAnimate: false,
    images: [
      'https://res1.eqh5.com/Fh-C81Wf5WL5UbiF4TR9RGI31vx2?imageMogr2/auto-orient/thumbnail/660x485%3E/format/webp',
      'https://res1.eqh5.com/FgexDAj5p_eAOunFob2JzDjUKlgE?imageMogr2/auto-orient/thumbnail/670x485%3E/format/webp',
      'https://res1.eqh5.com/FmnmHBUjeucDGiXcClf53m26b6kf?imageMogr2/auto-orient%7CimageMogr2/auto-orient/crop/!1224x613a0a0%7CimageMogr2/auto-orient/thumbnail/723x360%3E/format/webp'
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