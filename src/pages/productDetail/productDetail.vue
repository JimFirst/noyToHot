<template>
  <div class="product-detail">
    <swiper :indicator-dots="false"
      :autoplay="true" :interval="3000" :duration="500">
      <swiper-item  v-for="(item, index) in imgs" :key="index">
        <image class="product-detail-pic" :src="item" mode="aspectFill"/>
      </swiper-item>
    </swiper>
    <div class="page">
      <div>
        {{productInfo.name}}
      </div>
      <div>
        <span>价格：</span>
        <span></span>
      </div>
      <div>
        <span>食材新鲜</span>
        <span>现订现做</span>
        <span>24小时接受预定</span>
      </div>
      <div>
        <d-tab :tabs="tabs" @change="tabChange"></d-tab>
        <div v-show="activeTab === 'detail'">

        </div>
        <div v-show="activeTab === 'evaluate'">
          <d-button :keyboard="productInfo._id" :type="productInfo.type"></d-button>
          <d-message
            v-for="(item, index) in messageList"
            :key="index"
            :info="item"
          ></d-message>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import DTab from '../../components/DTab' 
import DMessage from "../../components/DMessage"
export default {
  data() {
    return {
      productInfo: {
        name: ''
      },
      imgs: [],
      tabs: [{
        name: '商品详情',
        key: 'detail'
      }, {
        name: '评价',
        key: 'evaluate'
      }],
      activeTab: 'detail',
      messageList: [],
      total: []
    }
  },
  onLoad(option) {
    Object.assign(this, this.$options.data())
    this.getProductDetail(option.id)
    this.getMessageList(option.id)
  },
  methods: {
    getProductDetail(id) {
      wx.showLoading({
        title: "加载中"
      })
      this.$http.product.getProductDetail(id).then(res => {
        wx.hideLoading()
        this.productInfo = res.data
        this.imgs = res.data.imgs
        console.log(111, res)
      })
    },
    tabChange(val) {
      this.activeTab = val
    },
    getMessageList(id) {
      const params = {
        page: 1,
        size: 20
      }
      const search = {
        show: false,
        key: id
      }
      this.$http.message.getMessageList(params, search).then(res => {
        this.total = res.total;
        wx.hideLoading();
        this.messageList = [
          ...this.messageList,
          ...res.data
        ]
      });
    }
  },
  components: {
    DTab,
    DMessage
  }
}
</script>

<style lang="scss">
.product-detail {
  ._swiper {
    height: 600rpx;
  }
  image {
    width: 100%;
    height: 600rpx;
  }
}
</style>
