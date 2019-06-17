Page({
  data: {
    src: ''
  },
  onLoad(options) {
    let src = decodeURIComponent(options.src);
    this.setData({
      src
    })
  }
});