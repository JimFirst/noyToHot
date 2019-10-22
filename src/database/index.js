// 配置环境
import global from '@/utils/global'
const env = global.env

wx.cloud.init({
  env: env
})
const db = wx.cloud.database({
  env: env
})

export default {
  // 查
  get(name) {
    return db.collection(name).get()
  },
  // 增
  post(name, data) {
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