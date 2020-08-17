// pages/detailPage17/detailPage17.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startAnimate: false,
    images: [
      'https://res1.eqh5.com/FoiUcO6HZ_lh7L0xhZGmQXaRqGkM?imageMogr2/auto-orient/thumbnail/645x505%3E/format/webp',
      'https://res1.eqh5.com/Fhns6I1UK9TaVQbrffZopJL-GhJ1?imageMogr2/auto-orient/thumbnail/688x460%3E/format/webp',
      'https://res1.eqh5.com/FvQCm54IGBmNoYKvWCn6iVadyTxA?imageMogr2/auto-orient%7CimageMogr2/auto-orient/crop/!820x484a0a0%7CimageMogr2/auto-orient/thumbnail/698x413%3E/format/webp',
      'https://res1.eqh5.com/Fldj510VXN8oRjqYdfF1dVYNBq1e?imageMogr2/auto-orient%7CimageMogr2/auto-orient/crop/!821x479a0a0%7CimageMogr2/auto-orient/thumbnail/700x408%3E/format/webp'
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