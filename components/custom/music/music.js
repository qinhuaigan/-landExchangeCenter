// components/custom/music/music.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    playStatus: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changePlayStayus() {
      this.data.playStatus = !this.data.playStatus
      this.setData({
        playStatus: this.data.playStatus
      })
      if (this.data.playStatus) {
        wx.playBackgroundAudio()
      } else {
        wx.pauseBackgroundAudio()
      }
    },
    backmusic() {
      const that = this
      const back = wx.getBackgroundAudioManager();
      function player() {
        back.title = "此时此刻";
        back.src = "https://tj-download-ipv6.ftn.qq.com/ftn_handler/e26c8d61ce230590d8447b17c9daab8da7da55ab57ab787acd720a3cecab8512c14f46996e3796dc6cfb7bb4605e0966d52e1d9e7de762627d953e77655a3318/?fname=%E6%B0%9B%E5%9B%B4%E9%9F%B3%E4%B9%90%E7%A7%AF%E6%9E%81%E6%98%8E%E5%BF%AB%E9%9F%B3%E4%B9%9074538.wav&k=61633432e6d1f8cfaf050d171034501f005a0c04550106041e0702030e1956555707190b0306061d0152500601015b550a01520636296287e6ad93e0c2f4b48bcedf9ff1c18b8ee2c7a3e205020151081d1455443673&code=3c4264b0&fr=00&&txf_fid=7334c5bf735e7ddf4770a274419a4d7221cdab99&xffz=6625840";
        back.onEnded(() => {
          player();
        })
        back.onPause(() => {
          that.setData({
            playStatus: false
          })
        })
      }
      player();
    },
  },
  lifetimes: {
    created() {
      this.backmusic()
    }
  }
})