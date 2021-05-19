// pages/detailPage10/detailPage10.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startAnimate: false,
    images: [
      'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdDdZUmxwaHBDSm9qRjFfSm8tS3NEbkppTEhPP2U9TVJmeDk1.jpg',
      'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdDdZUmxwaHBDSm9qRjRzT0U1R212ZHVvMHZFP2U9cTUwdDJw.jpg',
      'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdDdZUmxwaHBDSm9qR0JsTDdnc21BNS12a1R4P2U9ZGtyNm1w.jpg',
      'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdDdZUmxwaHBDSm9qRjljN3pZQnljXzlHazZzP2U9d2NQdkpt.jpg',
      'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdDdZUmxwaHBDSm9qRndvSlJ3R1FEb0V3RzJiP2U9eFAzVTBH.jpg'
    ],
    originalImgsList: [
      'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdDdZUmxwaHBDSm9qRjFfSm8tS3NEbkppTEhPP2U9TVJmeDk1.jpg',
      'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdDdZUmxwaHBDSm9qRjRzT0U1R212ZHVvMHZFP2U9cTUwdDJw.jpg',
      'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdDdZUmxwaHBDSm9qR0JsTDdnc21BNS12a1R4P2U9ZGtyNm1w.jpg',
      'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdDdZUmxwaHBDSm9qRjljN3pZQnljXzlHazZzP2U9d2NQdkpt.jpg',
      'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdDdZUmxwaHBDSm9qRndvSlJ3R1FEb0V3RzJiP2U9eFAzVTBH.jpg'
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