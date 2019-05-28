const baseURL = 'http://localhost:8080/';

function request(method, url, data, options) {
  url = baseURL + url; // 完整路径
  if (options.lock) { // 请求接口时是否加载loading动画
    wx.showLoading({
      title: '加载中',
      mask: true
    })
  }
  return new Promise((resolve, reject) => {
    wx.request({
      method,
      url,
      data,
      header: options.header,
      success: res => {
        if (res.data.code === 0) { // code为0时返回的数据是目标数据
          resolve(res.data.datas)
        } else {
          reject(handleError(res.data))
        }
      },
      fail: res => {
        reject(handleError(res.data))
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  })
}

function handleError(error) {
  setTimeout(() => {
    if (!error.handled) {
      wx.showToast({
        title: error.message,
        icon: 'none'
      })
    }
  }, 0);
  return error
}

function post(url, data, options) {
  return request('post', url, data, options)
}

function get(url, data, options) {
  return request('get', url, data, options)
}

module.exports = {
  post,
  get
};