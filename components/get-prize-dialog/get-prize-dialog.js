Component({
  properties: {
    prize: {
      type: 'Object'
    }
  },
  data: {
    tips: [
      '我穿穿穿越越越人海，终于见到你！',
      '恭喜你，中大奖啦啦啦啦啦啦！',
      '这个好消息由我来告诉你，你中奖啦！'
    ]
  },
  methods: {
    close() {
      this.triggerEvent('close')
    }
  }
});