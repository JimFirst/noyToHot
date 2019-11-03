// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: 'online-e18550'
})
const db = cloud.database()
// params(Object) id type params
exports.main = async (event, context) => {
  if (event.type === 'del') {
    return db.collection('message').doc(event.id).remove()
  } else if (event.type === 'edit') {
    return db.collection('message').doc(event.id).update({
      data: event.params
    })
  } else {
    return '请上传正确的type'
  }
}