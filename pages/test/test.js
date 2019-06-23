Page({
  data: {

  },
  onLoad() {
    wx.getSystemInfo({
      success: res => {
        console.log(res)
      }
    })
  }
});