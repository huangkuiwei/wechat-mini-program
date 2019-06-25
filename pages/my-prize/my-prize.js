import myData from '../../data/index.js'

Page({
  data: {
    myPrizeList: myData.myPrizeList,
    ruleDialog: false,
    complainDialog: false,
    inviteDialog: false
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: 'hello world',
    })
  },
  // 弹窗
  showDialog(e) {
    if (e.target.dataset.type === 'rule') {
      this.setData({
        ruleDialog: true
      })
    } else if (e.target.dataset.type === 'complain') {
      this.setData({
        complainDialog: true
      })
    } else if (e.target.dataset.type === 'invite') {
      this.setData({
        inviteDialog: true
      })
    }
  },
  // 关闭弹窗
  close() {
    this.setData({
      ruleDialog: false,
      complainDialog: false,
      inviteDialog: false
    })
  }
});