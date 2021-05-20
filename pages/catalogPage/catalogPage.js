// pages/catalogPage/catalogPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startAnimate: false,
    catalogList: [{
      type: '居住类用地',
      data: [{
        name: '01.城中区——沿江路东侧桂中大道延长线西侧部分土地',
        link: '../detailPage1/detailPage1'
      }, {
        name: '02.城中区——楼梯山片区B-4-2、B-4-3地块',
        link: '../detailPage2/detailPage2'
      }, {
        name: '03.城中区——河东路以北桂中大道延长线以西部分土地',
        link: '../detailPage3/detailPage3'
      }, {
        name: '04.城中区——桂柳路北侧B-5-1地块',
        link: '../detailPage4/detailPage4'
      }, {
        name: '05.柳南区——柳工大道北端东西两侧部分土地',
        link: '../detailPage5/detailPage5'
      },, {
        name: '06.柳南区——白露大桥南端东侧地块一、地块二',
        link: '../detailPage6/detailPage6'
      }, {
        name: '07.柳南区——瑞龙路东侧工人医院新院南侧',
        link: '../detailPage7/detailPage7'
      }, {
        name: '08.柳南区——旧机场片区航岭路西侧地块',
        link: '../detailPage8/detailPage8'
      }, {
        name: '09.柳南区——瑞龙路东侧河西桃花源西北侧部分地块',
        link: '../detailPage9/detailPage9'
      }, {
        name: '10.柳北区——北外环路南侧',
        link: '../detailPage10/detailPage10'
      }, {
        name: '11.柳北区——北雀路西片B-1-4、B-2-2地块',
        link: '../detailPage11/detailPage11'
      }, {
        name: '12.柳北区——东外环北侧地块',
        link: '../detailPage12/detailPage12'
      }, {
        name: '13.鱼峰区——都乐路北侧部分地块',
        link: '../detailPage13/detailPage13'
      }, {
        name: '14.鱼峰区——西江路南侧171号、262号、262号地块',
        link: '../detailPage14/detailPage14'
      }, {
        name: '15.柳东新区——柳东新区九子岭西侧A03、A07、A10地块',
        link: '../detailPage15/detailPage15'
      }, {
        name: '16.柳东新区——柳东新区曙光大道南侧L-19-27地块',
        link: '../detailPage16/detailPage16'
      }, {
        name: '17.柳东新区——职教园集中教学区B-2-6、B-2-9地块',
        link: '../detailPage17/detailPage17'
      }, {
        name: '18.柳东新区——曙光大道西段南片区B-6-2、B-6-3地块',
        link: '../detailPage18/detailPage18'
      }, {
        name: '19.柳东新区——柳东新区官塘物流港H-4-1地块',
        link: '../detailPage19/detailPage19'
      }, {
        name: '20.柳东新区——滨江东片区东环城大道与纬六路交叉口西南侧部分',
        link: '../detailPage20/detailPage20'
      }, {
        name: '21.北部生态新区——阳和工业新区A-3-1、A-4-1、A-5-2地块',
        link: '../detailPage21/detailPage21'
      }, {
        name: '22.北部生态新区——阳和工业新区K-8-1、K-9-1、K-12-2、K-13-1地块',
        link: '../detailPage22/detailPage22'
      }, {
        name: '23.北部生态新区——阳和工业新区K-10-1地块',
        link: '../detailPage23/detailPage23'
      }, {
        name: '24.北部生态新区——古亭片区E-8-1-1、E-8-1-2地块（鼓山公园北侧）',
        link: '../detailPage24/detailPage24'
      }, {
        name: '25.柳江区——南环路原东风柳汽二三生产基地',
        link: '../detailPage25/detailPage25'
      }, {
        name: '26.柳江区——柳江市民广场东面、南一路和南二路之间',
        link: '../detailPage25/detailPage25'
      }, {
        name: '27.柳江区——柳江大道以南沿江路以西地块',
        link: '../detailPage25/detailPage25'
      }, {
        name: '28.柳江区——柳江大道C-1-2地块',
        link: '../detailPage25/detailPage25'
      }]
    }]
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
    //     break;
    //   case '右':
    //     wx.reLaunch({
    //       url: '../introduceHome/introduceHome',
    //     })
    //     break;
    //   default:
    //     break;
    // }
  }
})