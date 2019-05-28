let request = require('../../util/request.js');

Page({
  data: {
    redPackList: []
  },
  onLoad() {
    request.post('higo/redpackList', {
      activityCode: '517higo'
    }, {
      lock: true
    }).then(data => {
      this.setData({
        redPackList: data
      })
    })
  }
});