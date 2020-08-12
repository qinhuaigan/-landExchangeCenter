// pages/detailPage6/detailPage6.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startAnimate: false,
    images: [
      'https://res1.eqh5.com/FilB_6JWsBPdHJkE407PXMqt-pIT?imageMogr2/auto-orient/thumbnail/655x475%3E/format/webp',
      'https://res1.eqh5.com/Fp9ukl18ZcTwC-fi7kXdvJLn-6cz?imageMogr2/auto-orient/thumbnail/663x440%3E/format/webp',
      'https://res1.eqh5.com/FjuFblmW8DirRcKs-7hwYsgKzwjr?imageMogr2/auto-orient/thumbnail/758x255%3E/format/webp',
      'https://res1.eqh5.com/FgvqZ_lllXVqyq_u0KPAoMbJ4p6W?imageMogr2/auto-orient/thumbnail/755x245%3E/format/webp'
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