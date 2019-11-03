<template>
  <div class="page">
    <div>
      我是公告啊
    </div>
    <div class="title">
      店家推荐
    </div>
    <div class="stick-tab">
      <d-card
        v-for="(item, index) in productList" :key="index"
        :src="item.cover"
        :name="item.name"
        :price="item.price"
        @click="toDetail(item)"
      ></d-card>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      productList: []
    }
  },
  onLoad() {
    Object.assign(this, this.$options.data())
    this.getProductList()
  },
  methods: {
    toDetail(item) {
      wx.navigateTo(({
        url: '../productDetail/main?id='+item._id
      }))
    },
    getProductList() {
      const params = {
        page: 1,
        size: 8
      }
      const search = {
        stick: true
      }
      this.$http.product.getProductList(params, search).then(res => {
        this.productList = res.data
      })
    }
  }
}
</script>

<style lang="scss">
.stick-tab {
  display: flex;
  flex-wrap: wrap;
  .d-card {
    width: 50%;
  }
}
</style>
