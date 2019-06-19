App({
  onLaunch() {
    // TODO
    wx.switchTab({
      url: '/pages/my-prize/my-prize',
    })
  },
  globalData: {
    // 本地 ip 地址
    baseURL: 'http://192.168.43.35:3000/public/images'
  }
});