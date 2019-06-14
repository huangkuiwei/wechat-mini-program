Component({
  properties: {
    cancelable: Boolean
  },
  data: {
    open: true
  },
  methods: {
    closeLayer() {
      this.setData({
        open: false
      })
    }
  }
})