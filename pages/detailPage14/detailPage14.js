// pages/detailPage14/detailPage14.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startAnimate: false,
    images: [
      'https://res1.eqh5.com/FgZ-E0MMq4DD4HvF0H83OPIWiBdv?imageMogr2/auto-orient/thumbnail/645x450%3E/format/webp',
      'https://res1.eqh5.com/Fl-WDryM0HgZ4S33NTmlrmCYsNod?imageMogr2/auto-orient/thumbnail/708x460%3E/format/webp',
      'https://res1.eqh5.com/FpdXXr9F__iExSTuA4tqCw7_uo1s?imageMogr2/auto-orient%7CimageMogr2/auto-orient/crop/!1193x457a0a0%7CimageMogr2/auto-orient/thumbnail/698x265%3E/format/webp',
      'https://res1.eqh5.com/FsJH8T6WXs7jygSI4QqGGXV81t5C?imageMogr2/auto-orient/thumbnail/700x275%3E/format/webp'
    ],
    originalImgsList: [
      '',
      '',
      '',
      ''
    ] // 原图
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
  //预览图片，放大预览
  preview(event) {
    let currentUrl = event.currentTarget.dataset.src
    const originalIndex = this.data.images.indexOf(currentUrl)
    wx.previewImage({
      current: this.data.originalImgsList[originalIndex], // 当前显示图片的http链接
      urls: this.data.originalImgsList // 需要预览的图片http链接列表
    })
  },
})