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
    });
    console.log(getCurrentPages())
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
  close(e) {
    if (e.target.dataset.type === 'complain') {
      this.setData({
        complainDialog: false
      })
    } else if (e.target.dataset.type === 'rule') {
      this.setData({
        ruleDialog: false
      })
    } else if (e.target.dataset.type === 'invite') {
      this.setData({
        inviteDialog: false
      })
    }
  }
});