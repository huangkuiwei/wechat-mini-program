let baseURL = 'http://192.168.2.102/'

function request(method, url, data, options) {
  url = baseURL + url;
  if (options.lock) {
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
        if (res.data.code === 0) {
          resolve(res.data.datas)
        } else {
          reject(handleError(res.data))
        }
      },
      fail: () => {
        reject(handleError({
          code: -1,
          message: '接口请求失败'
        }))
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