const prizeList = [
  {
    id: 0,
    image: `http://192.168.2.102:3000/public/images/prize-bg01.png`,
    text: '大气'
  },
  {
    id: 1,
    image: `http://192.168.2.102:3000/public/images/prize-bg01.png`,
    text: '硬扎'
  },
  {
    id: 2,
    image: `http://192.168.2.102:3000/public/images/prize-bg01.png`,
    text: '灵泛'
  },
  {
    id: 3,
    image: `http://192.168.2.102:3000/public/images/prize-bg01.png`,
    text: '才华横溢'
  },
  {
    id: 4,
    image: `http://192.168.2.102:3000/public/images/prize-bg01.png`,
    text: '里手'
  },
  {
    id: 5,
    image: `http://192.168.2.102:3000/public/images/prize-bg01.png`,
    text: '我很特别'
  },
  {
    id: 6,
    image: `http://192.168.2.102:3000/public/images/prize-bg01.png`,
    text: '勇敢'
  },
  {
    id: 7,
    image: `http://192.168.2.102:3000/public/images/prize-bg01.png`,
    text: '俊朗'
  },
  {
    id: 8,
    image: `http://192.168.2.102:3000/public/images/prize-bg01.png`,
    text: '可爱'
  }
];
const serviceList = [
  {
    img: `http://192.168.2.102:3000/public/images/list/06.png`,
    remark: '1、“智能组网”是中国电信为WiFi组网需求宽带用户提供的“WiFi质量提升”服务，包括专业级的WiFi环境评测、组网设计、终端销售、调测部署服务，达到WiFi覆盖更优、上网更稳定更快的目的。\n2、智能组网包括249元千兆双频路由器一台以及50元智能组网WIFI检测及设计服务一次。\n3、智能组网服务，百兆网络，辐射较低，双频稳定，全家全连接，信号全满格！'
  },
  {
    img: `http://192.168.2.102:3000/public/images/list/01.png`,
    remark: '1、畅想提速包是中国电信专为重度上网用户推出的一项服务，成功办理即可突破原套餐网速的限制。\n2、畅想提速包共有4档：10元1GB、15元3GB、20元5GB、20元10GB（限129套餐以上办理），满足不同用户需求。\n3、随时办理，随时生效，突破束缚，畅享极速网络！'
  },
  {
    img: `http://192.168.2.102:3000/public/images/list/07.png`,
    remark: '1、天翼云盘是中国电信推出的云储存服务产品，定位“个人与家庭数据中心”，为了个人及家庭用户提供极速、安全的多端文件同步备份及分享服务。\n2、天翼云盘拥有极速、效率、安全等优势，目前已为4.3亿用户提供云服务。\n3、个人版黄金会员包含4096G个人云空间，多渠道使用（手机端、PC端、网页端），备份、同步、分享轻松上“云”！'
  },
  {
    img: `http://192.168.2.102:3000/public/images/list/04.png`,
    remark: '影视全家乐，热门节目乐全家，会员专享电影/电视剧/综艺在线看不停！'
  },
  {
    img: `http://192.168.2.102:3000/public/images/list/02.png`,
    remark: '少儿会员，动画/迪士尼/儿歌/少儿节目一应俱全，这次给孩子看点好看的！'
  },
  {
    img: `http://192.168.2.102:3000/public/images/list/05.png`,
    remark: '包含NBA、综合体育赛事等专享体育内容，体育迷必备业务！'
  },
  {
    img: `http://192.168.2.102:3000/public/images/list/03.png`,
    remark: '学堂青少版，属于青少年的专属课程节目，师大附中＋黄冈课堂等高质量教学内容，等你探索！'
  },
];
const swiperList = [
  {
    src: `http://192.168.2.102:3000/public/images/ad6.jpg`,
    link: 'https://mp.weixin.qq.com/s?__biz=Mzg3MTAxNDk4NA==&mid=2247483823&idx=1&sn=5e345d7f1171d8f615940aec02ff50d6&chksm=ce85b688f9f23f9ec954680a9c0eea222afe1c178f057c69b423ec41229625e91f4697ff2d79&bizpsid=0&scene=126&ascene=3&devicetype=android-26&version=2700043b&nettype=ctnet&abtest_cookie=BQABAAoACwASABMAFQAHACOXHgBWmR4AyZkeANyZHgDxmR4AA5oeAAyaHgAAAA%3D%3D&lang=zh_CN&pass_ticket=gHEDAYWitt2mzMj0ZJejmYeY0u5adhyR1Ej1ExjZ4uVCOhvWT7yc%2BP3Ik2A5Ca20&wx_header=1'
  },
  {
    src: `http://192.168.2.102:3000/public/images/ad3.jpg`,
    link: 'https://mp.weixin.qq.com/s?__biz=MjM5NDY2MjU4MQ==&mid=503417440&idx=1&sn=de1af902a60b4a350dad5bfd73f2eff9&chksm=3d717bba0a06f2acf53b4862ad00969d310bc30007c8b3310f139e1ec928c5f2d1d669021b02&mpshare=1&scene=1&srcid=05154OCEE4xlRbchpepyUnZM&from=singlemessage&ascene=1&devicetype=android-28&version=2700043a&nettype=WIFI&abtest_cookie=BAABAAoACwASABMABQAjlx4AzZkeANyZHgD5mR4AAZoeAAAA&lang=zh_CN&pass_ticket=zxBDDV3khGaVWDlLfqKmNyXw5h3PodYlWwNkLJ6qMHzG0kDOBB1pdwiTLkM7MWSz&wx_header=1'
  },
  {
    src: `http://192.168.2.102:3000/public/images/ad4.jpg`,
    link: 'http://www.piaodage.com/m2c/2/ticket.jsp?info_id=24808864&tree_id=0&order_cust_id=2347777&user_id=15207958108&fromid=o8wJQ1iHr0uaRGCmMD6jk6WoLFpY'
  },
  {
    src: `http://192.168.2.102:3000/public/images/ad5.jpg`,
    link: 'https://mp.weixin.qq.com/s/HvPPGiS2_qx9UE78OWfUYw'
  },
  {
    src: `http://192.168.2.102:3000/public/images/ad2.jpg`
  },
  {
    src: `http://192.168.2.102:3000/public/images/ad1.jpg`,
    link: 'https://www.baidu.com'
  }
];
const recodeList = [
  {phn: '073****86756', prizeName: '万影汇影城90元团体券'},
  {phn: '156****67493', prizeName: '玛莎拉蒂5元代金券'},
  {phn: '188****86467', prizeName: '0.01元现金红包'},
  {phn: '152****09362', prizeName: '马尔代夫全家自费自驾游'}
];
const myPrizeList = [
  {
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
];
const complainList = [
  {
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
  }
];

export default {
  prizeList,
  serviceList,
  swiperList,
  recodeList,
  myPrizeList,
  complainList
}