Page({

  /**
   * 页面的初始数据
   */
  data: {
    startAnimate: false,
    images: [
      'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdDdZUmxwaHBDSm9qUlA3d3l3eVBjc0trS1FwP2U9RzhpODNi.jpg',
      'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdDdZUmxwaHBDSm9qUlltRWVTbEU5ZjJnWDlxP2U9S2s5QmhH.jpg',
      'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdDdZUmxwaHBDSm9qUlFLaDgtckNweHJEOW1oP2U9NzRUUzFk.jpg',
      'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdDdZUmxwaHBDSm9qUmVwQndVd2gzeVRCOFoxP2U9WWxnQk1S.jpg',
      'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdDdZUmxwaHBDSm9qUlZSa190NE9NemxXdDBUP2U9ZzVPdENM.jpg'
    ],
    originalImgsList: [
      'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdDdZUmxwaHBDSm9qUlA3d3l3eVBjc0trS1FwP2U9RzhpODNi.jpg',
      'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdDdZUmxwaHBDSm9qUlltRWVTbEU5ZjJnWDlxP2U9S2s5QmhH.jpg',
      'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdDdZUmxwaHBDSm9qUlFLaDgtckNweHJEOW1oP2U9NzRUUzFk.jpg',
      'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdDdZUmxwaHBDSm9qUmVwQndVd2gzeVRCOFoxP2U9WWxnQk1S.jpg',
      'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdDdZUmxwaHBDSm9qUlZSa190NE9NemxXdDBUP2U9ZzVPdENM.jpg'
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