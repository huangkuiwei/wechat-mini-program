let request = require('../../util/request.js');

Page({
  data: {
    userInfo: null
  },
  onLoad() {
    wx.getStorage({
      key: 'userInfo',
      success: res => {
        console.log(res)
        this.setData({
          userInfo: res.data
        })
      }
    })
  },
  getUserInfo(data) {
    this.setData({
      userInfo: data.detail.userInfo
    });
    console.log(this.data.userInfo)
  }
});