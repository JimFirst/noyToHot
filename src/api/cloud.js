export default {
  // data(Object) type id params(Object)
  async editMessage(data) {
    return wx.cloud.callFunction({
      name: 'editMessage',
      data: data
    })
  }
}