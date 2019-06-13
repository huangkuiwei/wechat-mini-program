App({
  onLaunch() {
    console.log('微信小程序启动了')
  },
  globalData: {
    // 本地 ip 地址
    baseURL: 'http://192.168.2.102:3000/public/images'
  }
});