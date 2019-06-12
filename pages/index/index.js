Page({
  data: {
    message: 'Hello',
    prizeList: [{
        id: 0,
        image: '/assets/images/prize-bg01.png',
        text: '大气'
      },
      {
        id: 1,
        image: '/assets/images/prize-bg01.png',
        text: '硬扎'
      },
      {
        id: 2,
        image: '/assets/images/prize-bg01.png',
        text: '灵泛'
      },
      {
        id: 3,
        image: '/assets/images/prize-bg01.png',
        text: '才华横溢'
      },
      {
        id: 4,
        image: '/assets/images/prize-bg01.png',
        text: '里手'
      },
      {
        id: 5,
        image: '/assets/images/prize-bg01.png',
        text: '我很特别'
      },
      {
        id: 6,
        image: '/assets/images/prize-bg01.png',
        text: '勇敢'
      },
      {
        id: 7,
        image: '/assets/images/prize-bg01.png',
        text: '俊朗'
      },
      {
        id: 8,
        image: '/assets/images/prize-bg01.png',
        text: '可爱'
      }
    ],
    menu: 1
  },
  onLoad() {
    console.log(this)
  },
  getPrize(e) {
    let id = e.target.dataset.id;
    this.data.prizeList.map(item => {
      let currentImage = `prizeList[${item.id}].image`;
      if (item.id === id) {
        this.setData({
          [currentImage]: '/assets/images/prize-bg02.png'
        })
      } else {
        this.setData({
          [currentImage]: '/assets/images/prize-bg01.png'
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
  }
})