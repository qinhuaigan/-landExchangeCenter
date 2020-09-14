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
        back.src = "https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdDdZUmxwaHBDSm9qQS1vWnZrT09nRzd4VkJMP2U9aHJxS3hh.mp3";
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