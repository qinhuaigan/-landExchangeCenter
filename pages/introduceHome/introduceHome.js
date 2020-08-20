// pages/introduceHome/introduceHome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startAnimate: false,
    imgs: [{
      src: 'https://s1.ax1x.com/2020/08/20/dGrwvV.md.png',
      remark: '柳州地图'
    }, {
      src: 'https://s1.ax1x.com/2020/08/20/dGrDDU.th.jpg',
      remark: '柳州美景'
    }, {
      src: 'https://s1.ax1x.com/2020/08/20/dGra3q.th.jpg',
    }, {
      src: 'https://s1.ax1x.com/2020/08/20/dGrBuT.th.jpg'
    }], // 缩略图
    originalImgList: [
      'https://s1.ax1x.com/2020/08/20/dGrwvV.png',
      'https://s1.ax1x.com/2020/08/20/dGrDDU.jpg',
      'https://s1.ax1x.com/2020/08/20/dGra3q.jpg',
      'https://s1.ax1x.com/2020/08/20/dGrBuT.jpg'
    ], // 原图
    lastX: 0, //滑动开始x轴位置
    lastY: 0, //滑动开始y轴位置
    moveText: "无",
    currentGesture: 0 //标识手势
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
    wx.reLaunch({
      url: '',
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
    const imgs = this.data.imgs.reduce((total, item) => {
      total.push(item.src)
      return total
    }, []) // 缩略图
    const imgIndex = imgs.indexOf(currentUrl) // 获取 "原图的下标"
    wx.previewImage({
      current: this.data.originalImgList[imgIndex], // 当前显示图片的http链接
      urls: this.data.originalImgList // 需要预览的图片http链接列表
    })
  },
  touchStart: function (e) {
    touchStartX = e.touches[0].pageX; // 获取触摸时的原点 
    touchStartY = e.touches[0].pageY; // 获取触摸时的原点 
    // 使用js计时器记录时间 
    interval = setInterval(function () {
      time++;
    }, 100);
  },
  //滑动移动事件
  handletouchmove: function (event) {
    var currentX = event.touches[0].pageX
    var currentY = event.touches[0].pageY
    var tx = currentX - this.data.lastX
    var ty = currentY - this.data.lastY
    var text = ""
    //左右方向滑动
    if (Math.abs(tx) > Math.abs(ty)) {
      if (tx < 0) {
        text = "左"
      } else if (tx > 0) {
        text = "右"
      }
    } else { //上下方向滑动
      if (ty < 0) {
        text = "上"
      } else if (ty > 0) {
        text = "下"
      }
    }

    //将当前坐标进行保存以进行下一次计算
    this.data.lastX = currentX
    this.data.lastY = currentY
    this.data.moveText = text
  },

  //滑动开始事件
  handletouchtart: function (event) {
    this.data.lastX = event.touches[0].pageX
    this.data.lastY = event.touches[0].pageY
    this.data.moveText = '无'
  },
  //滑动结束事件
  handletouchend: function (event) {
    // this.data.currentGesture = 0;
    // switch (this.data.moveText) {
    //   case '上':

    //     break;
    //   case '下':

    //     break;
    //   case '左':
    //     wx.reLaunch({
    //       url: '../catalogPage/catalogPage',
    //     })
    //     break;
    //   case '右':
    //     wx.reLaunch({
    //       url: '../enterpriseIntroduction/enterpriseIntroduction',
    //     })
    //     break;
    //   default:
    //     break;
    // }
  },
  goBack: function () {
    wx.reLaunch({
      url: '../enterpriseIntroduction/enterpriseIntroduction',
    })
  },
  goNext: function () {
    wx.navigateTo({
      url: '../catalogPage/catalogPage',
    })
  }
})