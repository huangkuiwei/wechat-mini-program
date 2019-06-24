Component({
  options: {
    multipleSlots: true
  },
  properties: {
    cancelable: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    closeLayer() {
      if (this.data.cancelable) {
        // 直接获取到当前页面的实例，调用关闭方法
        getCurrentPages().reverse()[0].close()
      }
    },
    scrolltolower() {
      // TODO
      this.triggerEvent('scrolltolower')
    }
  }
});