<template>
  <div class="page menus">
    <d-tab :tabs="tabs" @change="tabChange"></d-tab>
    <div class="menus-main">
      <d-card
        v-for="(item, index) in cookieList" :key="index"
        :src="item.cover"
        :name="item.name"
        :price="item.price"
      ></d-card>
    </div>
  </div>
</template>

<script>
import DTab from '../../components/DTab' 
export default {
  data () {
    return {
      cookieList: [],
      tabs: [{
        name: '饼干',
        key: 'cookie'
      }, {
        name: '生日蛋糕',
        key: 'cake'
      }, {
        name: '甜品',
        key: 'dessert'
      }, {
        name: '甜品台',
        key: 'dessertStation'
      }]
    }
  },
  onLoad() {
    this.getProductList()
  },
  onShow() {
  },
  methods: {
    getProductList() {
      const params = {
        page: 1,
        size: 20
      }
      const search = {
        type: 'cookie'
      }
      this.$http.product.getProductList(params, search).then(res => {
        this.cookieList = res.data
      })
    },
    tabChange(val) {
      console.log(val)
    }
  },
  components: {
    DTab
  }
}
</script>

<style lang="scss">
.menus {
  .d-tab {
    position: fixed;
    top: 0;
    left: 10rpx;
    right: 10rpx;  
    background: white;
    z-index: 10;  
    box-sizing: border-box;
    padding: 10rpx 0;
  }
  &-main {
    margin-top: 60rpx;
    display: flex;
    flex-wrap: wrap;
    .d-card {
      width: 50%;
    }
  }
}
</style>
