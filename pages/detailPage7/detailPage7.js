// pages/detailPage7/detailPage7.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startAnimate: false,
    images: [
      'https://res1.eqh5.com/FvsMyLSHrJJnqB4kKpbzboE6lPLM?imageMogr2/auto-orient/thumbnail/603x475%3E/format/webp',
      'https://res1.eqh5.com/FhrTzIHWAeCdmUdCzOW_tjaHll_O?imageMogr2/auto-orient/thumbnail/630x448%3E/format/webp',
      'https://res1.eqh5.com/FtWpOb2W5RxSRHCjGEiH4GxK9Y0j?imageMogr2/auto-orient/thumbnail/658x425%3E/format/webp',
      'https://res1.eqh5.com/Fq1nPrSuphcXS_Fre-GZ6ivzXBrX?imageMogr2/auto-orient/thumbnail/665x435%3E/format/webp'
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