import myData from '../../data/index.js'

Component({
  options: {
    multipleSlots: true
  },
  data: {
    complainList: myData.complainList,
    otherReason: null
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
        } else {
          this.setData({
            [current]: false
          })
        }
      })
    },
    // 监控 otherReason 值的变换，保持用户输入的最新值
    otherReasonInput(e) {
      this.setData({
        otherReason: '其它/' + e.detail.value
      })
    },
    // 提交
    submit() {
      let [selectReason] = this.data.complainList.filter(item => {
        return item.select
      });
      if (!selectReason) {
        wx.showToast({
          title: '请先选择投诉原因之后再提交哦',
          icon: 'none'
        });
        return
      }
      if (selectReason.id === 6 && !this.data.otherReason) {
        wx.showToast({
          title: '请先输入其它投诉内容之后再提交哦',
          icon: 'none'
        });
        return
      }
      if (selectReason.id === 6) {
        wx.showToast({
          title: '投诉成功，您提交的内容是：' + this.data.otherReason,
          icon: 'none'
        })
      } else {
        wx.showToast({
          title: '投诉成功，您提交的内容是：' + selectReason.reason,
          icon: 'none'
        })
      }
      getCurrentPages().reverse()[0].close()
    }
  }
});