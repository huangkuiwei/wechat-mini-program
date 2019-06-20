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
    closeLayer(e) {
      if (this.data.cancelable) {
        this.triggerEvent('close')
      }
    },
    isBug(e) {
      console.log('这是一个bug')
    }
  }
});