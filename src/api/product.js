import db from '../database/db'
export default {
  // params(Object) page,size
  async getProductList(params, search) {
    const { total } = await db.count('product')
    const { data } = await db.getPage('product', params, search)
    return {
      total,
      data
    }
  },
  // params(Object) info, user
  async addProduct(params) {
    return db.add('product', params)
  },
  async delProduct(id) {
    return db.del('product', id)
  }
}