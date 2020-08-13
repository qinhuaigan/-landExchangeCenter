// pages/detailPage18/detailPage18.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startAnimate: false,
    images: [
      'https://res1.eqh5.com/Fug_e-soLGp77uoa1ZrIhI5r_yOc?imageMogr2/auto-orient/thumbnail/645x503%3E/format/webp',
      'https://res1.eqh5.com/Fv3qqE3xcTntxh-Y4It3EfGstHFj?imageMogr2/auto-orient/thumbnail/690x460%3E/format/webp',
      'https://res1.eqh5.com/Fkm22JP0tdaLdUdQdzD7XUPtjwnO?imageMogr2/auto-orient%7CimageMogr2/auto-orient/crop/!890x477a0a0%7CimageMogr2/auto-orient/thumbnail/695x370%3E/format/webp',
      'https://res1.eqh5.com/Fl0hjp-c7NEq-oVchs5oBqGFhMNP?imageMogr2/auto-orient%7CimageMogr2/auto-orient/crop/!958x471a0a0%7CimageMogr2/auto-orient/thumbnail/700x343%3E/format/webp'
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