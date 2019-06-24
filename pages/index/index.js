import myData from '../../data/index.js'

Page({
  data: {
    prizeList: myData.prizeList, // 奖品列表
    serviceList: myData.serviceList, // 业务列表
    recodeList: myData.recodeList, // 中奖记录列表
    swiperList: myData.swiperList, // 轮播图
    currentService: {}, // 当前业务
    prize: {}, // 抽奖中的奖品
    menu: 1, // 菜单
    ruleDialog: false,
    complainDialog: false,
    serviceDialog: false,
    getPrizeDialog: false
  },
  // onLoad
  onLoad(options) {
    console.log(wx.env);
    // TODO
    wx.switchTab({
      url: '/pages/test/test'
    })

    // 首次进入小程序弹出活动规则
    let key = 'welcom-to-wechat';
    if (!wx.getStorageSync(key)) {
      wx.setStorageSync(key, true);
      this.setData({
        ruleDialog: true
      })
    }
  },
  onHide() {
    // 离开当前页面后将弹窗都关闭
    this.setData({
      // ruleDialog: false,
      // complainDialog: false,
      // serviceDialog: false,
      // getPrizeDialog: false
    })
  },
  // 分享转发事件
  onShareAppMessage() {
    return {
      title: '分享标题'
    }
  },
  // 点击礼盒动作
  getPrize(e) {
    let id = e.target.dataset.id;
    this.data.prizeList.map(item => {
      let currentImage = `prizeList[${item.id}].image`;
      if (item.id === id) {
        this.setData({
          [currentImage]: `http://192.168.2.102:3000/public/images/prize-bg02.png`
        })
      } else {
        this.setData({
          [currentImage]: `http://192.168.2.102:3000/public/images/prize-bg01.png`
        })
      }
    })
  },
  // 心愿盒子大揭秘菜单切换
  changeItem(e) {
    let menu = e.target.dataset.menu;
    this.setData({
      menu
    })
  },
  // 看看盒子里面都有啥
  scrollToTip() {
    wx.createSelectorQuery().select('#tip').boundingClientRect(rect => {
      wx.pageScrollTo({
        scrollTop: rect.top
      })
    }).exec()
  },
  // 开启礼盒动作
  openPrize() {
    let isSelect = this.data.prizeList.some(item => {
      return item.image === `http://192.168.2.102:3000/public/images/prize-bg02.png`
    });
    if (!isSelect) {
      wx.showToast({
        title: '请先选择礼品哦~',
        icon: 'none'
      })
    } else {
      this.setData({
        prize: {
          prizeName: '华为P30手机'
        },
        getPrizeDialog: true
      })
    }
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
    } else if (e.target.dataset.type === 'service') {
      this.setData({
        currentService: e.target.dataset.item,
        serviceDialog: true
      })
    } else if (e.target.dataset.type === 'getPrize') {
      this.setData({
        getPrizeDialog: true
      })
    }
  },
  // 关闭弹窗
  close() {
    this.setData({
      complainDialog: false,
      ruleDialog: false,
      serviceDialog: false,
      getPrizeDialog: false
    })
  },
  // 轮播图跳转
  jump(e) {
    let src = e.target.dataset.src;
    if (src) {
      wx.navigateTo({
        url: `/pages/web-view/web-view?src=${encodeURIComponent(src)}`
      })
    }
  },
  // 轮播图高度自适应
  imageLoad() {
    wx.createSelectorQuery().select('#swiper-img').boundingClientRect(res => {
      this.setData({
        swiperHeight: res.height + 'px'
      })
    }).exec()
  }
});