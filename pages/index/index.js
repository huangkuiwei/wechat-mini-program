let baseURL = getApp().globalData.baseURL;
let request = require('../../util/request.js');

Page({
  data: {
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
    serviceList: [{
        img: `${baseURL}/list/06.png`,
        remark: '1、“智能组网”是中国电信为WiFi组网需求宽带用户提供的“WiFi质量提升”服务，包括专业级的WiFi环境评测、组网设计、终端销售、调测部署服务，达到WiFi覆盖更优、上网更稳定更快的目的。\n' +
          '2、智能组网包括249元千兆双频路由器一台以及50元智能组网WIFI检测及设计服务一次。\n' +
          '3、智能组网服务，百兆网络，辐射较低，双频稳定，全家全连接，信号全满格！'
      },
      {
        img: `${baseURL}/list/01.png`,
        remark: '1、畅想提速包是中国电信专为重度上网用户推出的一项服务，成功办理即可突破原套餐网速的限制。\n' +
          '2、畅想提速包共有4档：10元1GB、15元3GB、20元5GB、20元10GB（限129套餐以上办理），满足不同用户需求。\n' +
          '3、随时办理，随时生效，突破束缚，畅享极速网络！'
      },
      {
        img: `${baseURL}/list/07.png`,
        remark: '1、天翼云盘是中国电信推出的云储存服务产品，定位“个人与家庭数据中心”，为了个人及家庭用户提供极速、安全的多端文件同步备份及分享服务。\n' +
          '2、天翼云盘拥有极速、效率、安全等优势，目前已为4.3亿用户提供云服务。\n' +
          '3、个人版黄金会员包含4096G个人云空间，多渠道使用（手机端、PC端、网页端），备份、同步、分享轻松上“云”！'
      },
      {
        img: `${baseURL}/list/04.png`,
        remark: '影视全家乐，热门节目乐全家，会员专享电影/电视剧/综艺在线看不停！'
      },
      {
        img: `${baseURL}/list/02.png`,
        remark: '少儿会员，动画/迪士尼/儿歌/少儿节目一应俱全，这次给孩子看点好看的！'
      },
      {
        img: `${baseURL}/list/05.png`,
        remark: '包含NBA、综合体育赛事等专享体育内容，体育迷必备业务！'
      },
      {
        img: `${baseURL}/list/03.png`,
        remark: '学堂青少版，属于青少年的专属课程节目，师大附中＋黄冈课堂等高质量教学内容，等你探索！'
      },
    ],
    swiperList: [{
        src: `${baseURL}/ad6.jpg`,
        link: 'https://mp.weixin.qq.com/s?__biz=Mzg3MTAxNDk4NA==&mid=2247483823&idx=1&sn=5e345d7f1171d8f615940aec02ff50d6&chksm=ce85b688f9f23f9ec954680a9c0eea222afe1c178f057c69b423ec41229625e91f4697ff2d79&bizpsid=0&scene=126&ascene=3&devicetype=android-26&version=2700043b&nettype=ctnet&abtest_cookie=BQABAAoACwASABMAFQAHACOXHgBWmR4AyZkeANyZHgDxmR4AA5oeAAyaHgAAAA%3D%3D&lang=zh_CN&pass_ticket=gHEDAYWitt2mzMj0ZJejmYeY0u5adhyR1Ej1ExjZ4uVCOhvWT7yc%2BP3Ik2A5Ca20&wx_header=1'
      },
      {
        src: `${baseURL}/ad3.jpg`,
        link: 'https://mp.weixin.qq.com/s?__biz=MjM5NDY2MjU4MQ==&mid=503417440&idx=1&sn=de1af902a60b4a350dad5bfd73f2eff9&chksm=3d717bba0a06f2acf53b4862ad00969d310bc30007c8b3310f139e1ec928c5f2d1d669021b02&mpshare=1&scene=1&srcid=05154OCEE4xlRbchpepyUnZM&from=singlemessage&ascene=1&devicetype=android-28&version=2700043a&nettype=WIFI&abtest_cookie=BAABAAoACwASABMABQAjlx4AzZkeANyZHgD5mR4AAZoeAAAA&lang=zh_CN&pass_ticket=zxBDDV3khGaVWDlLfqKmNyXw5h3PodYlWwNkLJ6qMHzG0kDOBB1pdwiTLkM7MWSz&wx_header=1'
      },
      {
        src: `${baseURL}/ad4.jpg`,
        link: 'http://www.piaodage.com/m2c/2/ticket.jsp?info_id=24808864&tree_id=0&order_cust_id=2347777&user_id=15207958108&fromid=o8wJQ1iHr0uaRGCmMD6jk6WoLFpY'
      },
      {
        src: `${baseURL}/ad5.jpg`,
        link: 'https://mp.weixin.qq.com/s/HvPPGiS2_qx9UE78OWfUYw'
      },
      {
        src: `${baseURL}/ad2.jpg`
      },
      {
        src: `${baseURL}/ad1.jpg`,
        link: 'https://www.baidu.com'
      }
    ],
    currentService: {},
    menu: 1,
    baseURL,
    recodeList: [],
    ruleDialog: false,
    complainDialog: false,
    serviceDialog: false,
    getPrizeDialog: false,
    prize: {},
    swiperHeight: '150px'
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
  // 点击礼盒动作
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
      return item.image === `${baseURL}/prize-bg02.png`
    });
    if (!isSelect) {
      wx.showToast({
        title: '请先选择礼品哦~',
        icon: 'none'
      })
    } else {
      // wx.showLoading({
        // title: '抽奖中...',
        // success: () => {
          // setTimeout(() => {
            // wx.hideLoading();
            // wx.showToast({
              // title: '抽奖完成~'
            // })
          // }, 2000)
        // }
      // })
      this.setData({
        prize: {prizeName: '华为P30手机'},
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
  close(e) {
    if (e.target.dataset.type === 'complain') {
      this.setData({
        complainDialog: false
      })
    } else if (e.target.dataset.type === 'rule') {
      this.setData({
        ruleDialog: false
      })
    } else if (e.target.dataset.type === 'service') {
      this.setData({
        serviceDialog: false
      })
    } else if (e.target.dataset.type === 'getPrize') {
      this.setData({
        getPrizeDialog: false
      })
    }
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
  },
});