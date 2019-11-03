import db from '../database/db'
export default {
  // params(Object) page,size
  async getMessageList(params, search) {
    const { total } = await db.count('message', search)
    const { data } = await db.getPage('message', params, search)
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