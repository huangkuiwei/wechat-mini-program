let baseURL = getApp().globalData.baseURL;

Page({
  data: {
    baseURL,
    ruleDialog: false,
    complainDialog: false,
    prizeList: [{
        prizeId: 0,
        prizeType: '红包',
        prizeName: '18.88元红包'
      },
      {
        prizeId: 1,
        prizeType: '实物',
        prizeName: '华为P30手机'
      },
      {
        prizeId: 2,
        prizeType: '业务',
        prizeName: '宽带提速包5折办理优惠券'
      },
      {
        prizeId: 4,
        prizeType: '话费',
        prizeName: '30元话费'
      },
      {
        prizeId: 5,
        prizeType: '实物',
        prizeName: 'iPhone XS 512G手机'
      },
      {
        prizeId: 6,
        prizeType: '业务',
        prizeName: '宽带提速包5折办理优惠券'
      },
      {
        prizeId: 7,
        prizeType: '话费',
        prizeName: '3元话费'
      }
    ]
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
    }
  },
});