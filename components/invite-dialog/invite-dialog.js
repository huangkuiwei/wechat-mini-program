import myData from '../../data/index.js'

Component({
  data: {
    inviteList: myData.inviteList
  },
  lifetimes: {
    attached() {
      for (let i = 0; i < this.data.inviteList.length; i++) {
        let current = `inviteList[${i}].createTime`;
        this.setData({
          [current]: this.data.inviteList[i].createTime.slice(0, 10)
        })
      }
    }
  },
  methods: {
    close() {
      this.triggerEvent('close')
    },
    scrolltolower() {
      // TODO
      console.log('hello')
    }
  }
});