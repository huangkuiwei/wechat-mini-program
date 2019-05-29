let request = require('../../util/request.js');

Page({
  data: {
    userInfo: null,
    photo: null
  },
  onLoad() {
    // 检测个人信息是否授权
    wx.getSetting({
      success: data => {
        if (data.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: data => {
              this.setData({
                userInfo: data.userInfo
              })
            }
          })
        }
      }
    })
  },
  getUserInfo(data) {
    this.setData({
      userInfo: data.detail.userInfo
    })
  },
  getPhoto() {
    const context = wx.createCameraContext();
    // 拍照
    context.takePhoto({
      quality: 'high',
      success: data => {
        this.setData({
          photo: data.tempImagePath
        })
      }
    })
  }
});