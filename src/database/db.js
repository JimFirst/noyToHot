import global from '@/utils/global'
const env = global.env
wx.cloud.init({
  env: env,
  traceUser: true
})
const db = wx.cloud.database({
  env: env
})

export default {
  // 获取列表总数
  count(name) {
    return db.collection(name).count()
  },
  // 获取分页
  getPage(name, data) {
    return db.collection(name).skip((data.page - 1) *data.size).limit(data.size).get()
  },
  // 增
  add(name, data) {
    return db.collection(name).add({
      data: data
    })
  },
  // 更新
  update(name, id, data) {
    return db.collection(name).doc(id).update({
      data: data
    })
  },
  // 删
  del(name, id) {
    return db.collection(name).doc(id).remove()
  } 
}