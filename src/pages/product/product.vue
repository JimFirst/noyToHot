<template>
  <div>
    <d-cell title="名字">
      <input type="text" v-model="productInfo.name">
    </d-cell>
    <d-cell title="价格">
      <input type="number" v-model="productInfo.price">
    </d-cell>
    <d-cell title="数量">
      <input type="number" v-model="productInfo.count">
    </d-cell>
    <d-cell title="描述">
      <input type="text" v-model="productInfo.desc">
    </d-cell>
    <d-cell title="单位">
      <input type="text" v-model="productInfo.unit">
    </d-cell>
    <d-cell title="类别">
      <input type="text" v-model="productInfo.type">
    </d-cell>
    <d-cell title="封面">
      <input type="text" v-model="productInfo.cover">
    </d-cell>
    <d-cell title="规格">
      <input type="text" v-model="productInfo.remark">
    </d-cell>
    <button :loading="loading" @click="addProduct">添加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productInfo: {
        count: 0,
        cover: null,
        desc: null,
        imgs: [],
        name: '',
        price: 0,
        type: 'cake',
        unit: '盒',
        stick: false,
        remark: ''
      },
      loading: false,
      types: [{
        name: '饼干',
        value: 'cookie'
      }, {
        name: '蛋糕',
        value: 'cake'
      }, {
        name: '甜品',
        value: 'dessert'
      }, {
        name: '甜品台',
        value: 'dessertStation'
      },]
    }
  },
  methods: {
    addProduct() {
      this.loading = true
      this.$http.product.addProduct(this.productInfo).then(res => {{
        wx.showToast({
          title: '添加成功',
          icon: 'success'
        })
      }}).finally(() => {
        this.loading = false
      })
    }
  },
}
</script>

<style>

</style>
