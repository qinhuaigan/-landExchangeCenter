// pages/detailPage11/detailPage11.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startAnimate: false,
    images: [
      'https://res1.eqh5.com/FkHryqF5_3s3X4zgvTu-2VBz_I64?imageMogr2/auto-orient/thumbnail/738x528%3E/format/webp',
      'https://res1.eqh5.com/FoSiBBvCucOhGf9jwBluXpZSHnq0?imageMogr2/auto-orient/thumbnail/733x525%3E/format/webp',
      'https://res1.eqh5.com/FmWYBqwHhrsvgWls2kF7LJJ3y4HY?imageMogr2/auto-orient/thumbnail/865x495%3E/format/webp',
      'https://res1.eqh5.com/Flam1YBSWhUP0kOZAm-_f6yRYygr?imageMogr2/auto-orient%7CimageMogr2/auto-orient/crop/!1103x553a0a0%7CimageMogr2/auto-orient/thumbnail/878x438%3E/format/webp'
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