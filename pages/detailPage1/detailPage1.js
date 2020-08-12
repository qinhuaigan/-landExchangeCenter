// pages/detailPage1/detailPage1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startAnimate: false,
    images: [
      'https://res1.eqh5.com/FjJ8pmsE_aPYARFFg8sAyu8xllCT?imageMogr2/auto-orient/thumbnail/668x470%3E/format/webp',
      'https://res1.eqh5.com/Fp5uXp-iU4UfgECwo-QomelwtqCs?imageMogr2/auto-orient/thumbnail/598x488%3E/format/webp',
      'https://res1.eqh5.com/Fo20uaXtm1NPVPAn7btqaXHP0m7o?imageMogr2/auto-orient/thumbnail/728x310%3E/format/webp',
      'https://res1.eqh5.com/FhfWruSLMn9MoekNa8_mJdZT_jdP?imageMogr2/auto-orient/thumbnail/790x540%3E/format/webp'
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
  //预览图片，放大预览
  preview(event) {
    let currentUrl = event.currentTarget.dataset.src
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.images // 需要预览的图片http链接列表
    })
  },
})