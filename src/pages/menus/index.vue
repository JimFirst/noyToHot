<template>
  <div class="page menus">
    <d-tab :tabs="tabs" @change="tabChange"></d-tab>
    <div class="menus-main" v-show="activeTab === 'cookie'">
      <d-card
        v-for="(item, index) in cookieList" :key="index"
        :src="item.cover"
        :name="item.name"
        :price="item.price"
        @click="toDetail(item)"
      ></d-card>
    </div>
    <div class="menus-main" v-show="activeTab === 'cake'">
      <d-card
        v-for="(item, index) in cakeList" :key="index"
        :src="item.cakeList"
        :name="item.name"
        :price="item.price"
      ></d-card>
    </div>
    <div class="menus-main" v-show="activeTab === 'dessert'">
      <d-card
        v-for="(item, index) in dessertList" :key="index"
        :src="item.cover"
        :name="item.name"
        :price="item.price"
      ></d-card>
    </div>
    <div class="menus-main" v-show="activeTab === 'dessertStation'">
      <d-card
        v-for="(item, index) in dessertStationList" :key="index"
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
      cakeList: [],
      dessertList: [],
      dessertStationList: [],
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
      }],
      activeTab: 'cookie'
    }
  },
  onLoad() {
    this.getProductList('cookie')
  },
  onShow() {
  },
  methods: {
    getProductList(type) {
      if (this[`${type}List`].length > 0) {
        return
      }
      const params = {
        page: 1,
        size: 20
      }
      const search = {
        type: type
      }
      this.$http.product.getProductList(params, search).then(res => {
        this[`${type}List`] = res.data
      })
    },
    tabChange(val) {
      this.activeTab = val
      this.getProductList(val)
    },
    toDetail(item) {
      wx.navigateTo(({
        url: '../productDetail/main?id='+item._id
      }))
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
