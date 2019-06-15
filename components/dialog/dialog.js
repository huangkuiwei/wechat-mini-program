Component({
  options: {
    multipleSlots: true
  },
  properties: {
    cancelable: Boolean
  },
  methods: {
    closeLayer(e) {
      if (e.target.dataset.cancelable) {
        this.triggerEvent('close')
      }
    }
  }
});