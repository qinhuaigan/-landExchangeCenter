// components/custom/footer.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    startAnimate: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  observers: {
    'startAnimate': function (params) { //  'params'是要监听的字段，（params）是已更新变化后的数据
    // this.setData({
    //   startAnimate: params //这里params只能赋值给params2（另外一个字段），不然赋值给params自己就会陷入死循环，导致内存占用过高，开发者工具死机。
    //   })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})