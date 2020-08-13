// pages/detailPage12/detailPage12.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startAnimate: false,
    images: [
      'https://res1.eqh5.com/Fp423u67U3hHavcDjfNULUuGu4Bk?imageMogr2/auto-orient%7CimageMogr2/auto-orient/crop/!696x499a0a0%7CimageMogr2/auto-orient/thumbnail/645x460%3E/format/webp',
      'https://res1.eqh5.com/FkUQ1ywbhqhGdcxgDdha3pjIrjfL?imageMogr2/auto-orient%7CimageMogr2/auto-orient/crop/!748x836a1a0%7CimageMogr2/auto-orient/thumbnail/678x758%3E/format/webp',
      'https://res1.eqh5.com/FtS1iqhVCKbTzz5UQH5hqBnsI26h?imageMogr2/auto-orient%7CimageMogr2/auto-orient/crop/!772x823a0a0%7CimageMogr2/auto-orient/thumbnail/653x698%3E/format/webp',
      'https://res1.eqh5.com/FlrKsux_zpNLC4GNECygWdCDVB9n?imageMogr2/auto-orient%7CimageMogr2/auto-orient/crop/!630x491a0a0%7CimageMogr2/auto-orient/thumbnail/670x523%3E/format/webp'
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