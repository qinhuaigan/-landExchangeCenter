Page({

  /**
   * 页面的初始数据
   */
  data: {
    startAnimate: false,
    images: [
      'https://res1.eqh5.com/Fr_rmzn0EaiXGJPFZJ8b2gnv7Otw?imageMogr2/auto-orient/thumbnail/645x478%3E/format/webp',
      'https://res1.eqh5.com/Fj413yJdRTopGLO7hI9aOExt_gC5?imageMogr2/auto-orient/thumbnail/663x485%3E/format/webp',
      'https://res1.eqh5.com/FnQsD44V0eOG33k3V9hN74sIni4L?imageMogr2/auto-orient%7CimageMogr2/auto-orient/crop/!1393x999a0a0%7CimageMogr2/auto-orient/thumbnail/728x523%3E/format/webp'
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