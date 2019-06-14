let baseURL = getApp().globalData.baseURL;
let request = require('../../util/request.js');

Page({
  data: {
    message: 'Hello',
    prizeList: [{
        id: 0,
        image: `${baseURL}/prize-bg01.png`,
        text: '大气'
      },
      {
        id: 1,
        image: `${baseURL}/prize-bg01.png`,
        text: '硬扎'
      },
      {
        id: 2,
        image: `${baseURL}/prize-bg01.png`,
        text: '灵泛'
      },
      {
        id: 3,
        image: `${baseURL}/prize-bg01.png`,
        text: '才华横溢'
      },
      {
        id: 4,
        image: `${baseURL}/prize-bg01.png`,
        text: '里手'
      },
      {
        id: 5,
        image: `${baseURL}/prize-bg01.png`,
        text: '我很特别'
      },
      {
        id: 6,
        image: `${baseURL}/prize-bg01.png`,
        text: '勇敢'
      },
      {
        id: 7,
        image: `${baseURL}/prize-bg01.png`,
        text: '俊朗'
      },
      {
        id: 8,
        image: `${baseURL}/prize-bg01.png`,
        text: '可爱'
      }
    ],
    menu: 1,
    complainList: [{
        id: 0,
        reason: '欺诈',
        select: false
      },
      {
        id: 1,
        reason: '色情',
        select: false
      },
      {
        id: 2,
        reason: '诱导行为',
        select: false
      },
      {
        id: 3,
        reason: '不实信息',
        select: false
      },
      {
        id: 4,
        reason: '违法行为',
        select: false
      },
      {
        id: 5,
        reason: '侵权',
        select: false
      },
      {
        id: 6,
        reason: '其他',
        select: false
      },
    ],
    baseURL: 'http://192.168.2.102:3000/public/images',
    recodeList: [],
    ruleDialog: false,
    complainDialog: false
  },
  onLoad() {
    request.post('post/winningRecord/queryAllWinningRecordList', {}, {
      lock: true
    }).then(data => {
      this.setData({
        recodeList: data
      })
    })
  },
  getPrize(e) {
    let id = e.target.dataset.id;
    this.data.prizeList.map(item => {
      let currentImage = `prizeList[${item.id}].image`;
      if (item.id === id) {
        this.setData({
          [currentImage]: `${baseURL}/prize-bg02.png`
        })
      } else {
        this.setData({
          [currentImage]: `${baseURL}/prize-bg01.png`
        })
      }
    })
  },
  changeItem(e) {
    let menu = e.target.dataset.menu;
    this.setData({
      menu
    })
  },
  scrollToTip() {
    wx.createSelectorQuery().select('#tip').boundingClientRect(rect => {
      wx.pageScrollTo({
        scrollTop: rect.top
      })
    }).exec()
  },
  openPrize() {
    let isSelect = this.data.prizeList.some(item => {
      return item.image === `${baseURL}/prize-bg02.png`
    });
    if (!isSelect) {
      wx.showToast({
        title: '请先选择礼品哦~',
        icon: 'none'
      })
    } else {
      wx.showLoading({
        title: '抽奖中...',
        success: () => {
          setTimeout(() => {
            wx.hideLoading();
            wx.showToast({
              title: '抽奖完成~',
            })
          }, 2000)
        }
      })
    }
  },
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
  close(e) {
    if (e.target.dataset.layer) {
      this.setData({
        ruleDialog: false,
        complainDialog: false
      })
    }
  },
  selectReason(e) {
    let index = e.target.dataset.id;
    this.data.complainList.forEach(item => {
      let current = `complainList[${item.id}].select`
      if (index === item.id) {
        this.setData({
          [current]: !item.select
        })
      }
    })
  }
});