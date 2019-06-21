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
        this.triggerEvent('close')
      }
    },
    isBug() {
      console.log('这是一个bug')
    }
  }
});