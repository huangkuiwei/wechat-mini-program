Component({
  options: {
    multipleSlots: true
  },
  properties: {
    cancelable: Boolean
  },
  methods: {
    closeLayer(e) {
      console.log(e);
      if (e.target.dataset.cancelable) {
        this.triggerEvent('close')
      }
    }
  }
});