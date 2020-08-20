// pages/detailPage1/detailPage1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startAnimate: false,
    images: [
      'https://s1.ax1x.com/2020/08/20/dGrXxP.md.jpg',
      'https://s1.ax1x.com/2020/08/20/dGrqPA.md.png',
      'https://s1.ax1x.com/2020/08/20/dGrH5d.png',
      'https://s1.ax1x.com/2020/08/20/dGrO2t.md.png'
    ], 
    originalImgsList: [
      'https://s1.ax1x.com/2020/08/20/dGrXxP.jpg',
      'https://s1.ax1x.com/2020/08/20/dGrqPA.png',
      'https://s1.ax1x.com/2020/08/20/dGrH5d.png',
      'https://s1.ax1x.com/2020/08/20/dGrO2t.png'
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