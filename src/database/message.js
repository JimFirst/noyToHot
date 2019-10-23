import db from './db'
export default {
  // params(Object) page,size
  async getMessageList(params) {
    const { total } = await db.count('message')
    const { data } = await db.getPage('message', params)
    return {
      total,
      data
    }
  },
  // params(Object) info, user
  async addMessage(params) {
    return db.add('message', params)
  },
  async delMessage(id) {
    return db.del('message', id)
  }
}