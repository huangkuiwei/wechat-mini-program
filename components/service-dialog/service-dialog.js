Component({
  properties: {
    currentService: Object
  },
  methods: {
    close() {
      this.triggerEvent('close')
    }
  }
});