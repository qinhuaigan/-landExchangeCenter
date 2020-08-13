// pages/detailPage10/detailPage10.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startAnimate: false,
    images: [
      'https://res1.eqh5.com/FodapJG5dDmyTpvEL3T5Ge2Sy_WN?imageMogr2/auto-orient/thumbnail/655x448%3E/format/webp',
      'https://res1.eqh5.com/FnIaNb8fM2-WzQHr4z_Zp6y-Kpmn?imageMogr2/auto-orient/thumbnail/648x505%3E/format/webp',
      'https://res1.eqh5.com/Fl3_x1wCUBZVAkePTn9uGY2t2rhW?imageMogr2/auto-orient/thumbnail/663x393%3E/format/webp',
      'https://res1.eqh5.com/Fq_wZVMErIReuSv6MHbM6vWOAZJ2?imageMogr2/auto-orient/thumbnail/268x430%3E/format/webp',
      'https://res1.eqh5.com/FnOBB0j-RW4MBI663Zp6YvWGq6_m?imageMogr2/auto-orient/thumbnail/615x338%3E/format/webp'
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