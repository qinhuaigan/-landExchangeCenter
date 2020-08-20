// pages/detailPage15/detailPage15.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startAnimate: false,
    images: [
      'https://s1.ax1x.com/2020/08/20/dJNukt.md.png',
      'https://s1.ax1x.com/2020/08/20/dJNe0A.md.png',
      'https://s1.ax1x.com/2020/08/20/dJNlp8.md.jpg',
      'https://s1.ax1x.com/2020/08/20/dJNMff.md.jpg',
      'https://s1.ax1x.com/2020/08/20/dJNZmd.png'
    ],
    originalImgsList: [
      'https://s1.ax1x.com/2020/08/20/dJNukt.png',
      'https://s1.ax1x.com/2020/08/20/dJNe0A.png',
      'https://s1.ax1x.com/2020/08/20/dJNlp8.jpg',
      'https://s1.ax1x.com/2020/08/20/dJNMff.jpg',
      'https://s1.ax1x.com/2020/08/20/dJNZmd.png'
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