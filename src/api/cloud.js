export default {
  // data(Object) type id params(Object)
  async editMessage(data) {
    return wx.cloud.callFunction({
      name: 'editMessage',
      data: data
    })
  },
  async editProduct(data) {
    return wx.cloud.callFunction({
      name: 'editProduct',
      data: data
    })
  },
  async login(data) {
    return wx.cloud.callFunction({
      name: 'isManager',
      data: data
    })
  }
}