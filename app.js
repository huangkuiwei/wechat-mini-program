App({
  onLaunch() {
    wx.getSetting({
      success(data) {
        if (data.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success(data) {
              wx.setStorage({
                key: 'userInfo',
                data: data.userInfo
              })
            }
          })
        }
      }
    })
  },
  onShow() {

  },
  onHide() {
    console.log('app is hide')
  },
  globalData: {
    message: 'Hello World'
  }
});