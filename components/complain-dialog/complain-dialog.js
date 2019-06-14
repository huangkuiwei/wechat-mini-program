Component({
  options: {
    multipleSlots: true
  },
  data: {
    complainList: [{
        id: 0,
        reason: '欺诈',
        select: false
      },
      {
        id: 1,
        reason: '色情',
        select: false
      },
      {
        id: 2,
        reason: '诱导行为',
        select: false
      },
      {
        id: 3,
        reason: '不实信息',
        select: false
      },
      {
        id: 4,
        reason: '违法行为',
        select: false
      },
      {
        id: 5,
        reason: '侵权',
        select: false
      },
      {
        id: 6,
        reason: '其他',
        select: false
      },
    ]
  },
  methods: {
    // 选择投诉原因
    selectReason(e) {
      let index = e.target.dataset.id;
      this.data.complainList.forEach(item => {
        let current = `complainList[${item.id}].select`;
        if (index === item.id) {
          this.setData({
            [current]: !item.select
          })
        }
      })
    },
    close() {
      this.triggerEvent('close')
    }
  }
});