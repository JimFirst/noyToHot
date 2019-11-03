<template>
  <div class="product-detail">
    <swiper :indicator-dots="false"
      :autoplay="true" :interval="3000" :duration="500">
      <swiper-item  v-for="(item, index) in imgs" :key="index">
        <image class="product-detail-pic" :src="item" mode="aspectFill"/>
      </swiper-item>
    </swiper>
    <div class="page">
      <div class="title">
        {{productInfo.name}}
      </div>
      <div class="title" v-if="productInfo.remark">
        <span>规格：</span>
        <span>
          {{productInfo.remark}}
        </span>
      </div>
      <div class="title" style="font-size: 28rpx;" v-if="productInfo.price">
        <span>价格：</span>
        <span class="price">{{'￥'+productInfo.price + '/' + productInfo.unit}}</span>
      </div>
      <div class="product-detail-sup">
        <div>
          <icon type="success" :size="14"/>
          <span>食材新鲜</span>
        </div>
        <div>
          <icon type="success" :size="14"/>
          <span>现订现做</span>
        </div>
        <div>
          <icon type="success" :size="14"/>
          <span>24小时接受预定</span>
        </div>
      </div>
      <div>
        <d-tab :tabs="tabs" @change="tabChange"></d-tab>
        <div v-show="activeTab === 'detail'" class="product-detail-tab">
          <div style="margin-bottom: 30rpx;">
            {{productInfo.desc}}
          </div>
          <button type="primary" open-type="contact">联系客服</button>
        </div>
        <div v-show="activeTab === 'evaluate'" class="product-detail-tab">
          <div v-if="messageList.length === 0"  class="product-detail-tab-empty">
            暂无评价，赶紧第一个评价吧！
          </div>
          <d-message
            v-for="(item, index) in messageList"
            :key="index"
            :info="item"
          ></d-message>
          <d-button :keyboard="productInfo._id" :type="productInfo.type"></d-button>
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
        name: '',
        remark: ''
      },
      imgs: [],
      tabs: [{
        name: '商品描述',
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
        show: true,
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
  &-sup {
    font-size: $font-size-s;
    display: flex;
    justify-content: space-around;
    margin: 20rpx 0;
    color: $primary-font;
    line-height: 42rpx;
  }
  &-tab {
    padding: 20rpx 0;
    font-size: $font-size-s;
    color: $primary-font;
    line-height: 42rpx;
    .d-button {
      margin-top: 20rpx;
    }
    &-empty {
      height: 100rpx;
      text-align: center;
      line-height: 100rpx;
      font-size: $font-size-s;
      color: $sup-font;
    }
  }
}
</style>
