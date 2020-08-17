// pages/detailPage19/detailPage19.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startAnimate: false,
    images: [
      'https://res1.eqh5.com/FgmTWfLQ7g-W4CKQSATEUVQnDzV0?imageMogr2/auto-orient/thumbnail/645x438%3E/format/webp',
      'https://res1.eqh5.com/FoGd2p0x3cqMWIxTB-saw1_zrYpO?imageMogr2/auto-orient/thumbnail/663x483%3E/format/webp',
      'https://res1.eqh5.com/FpNgBV6LcxTjc29CMQA60h98oQx3?imageMogr2/auto-orient/thumbnail/740x255%3E/format/webp',
      'https://res1.eqh5.com/FsLwsQWuT_OAvTa2IBP2IaoZ5tQu?imageMogr2/auto-orient%7CimageMogr2/auto-orient/crop/!1369x923a0a0%7CimageMogr2/auto-orient/thumbnail/723x488%3E/format/webp'
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