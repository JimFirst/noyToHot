<template>
  <div class="page home">
    <div class="home-info">
      <div>
        1.所有产品均根据订单制作，如需更换款式或者更改日期，需提前12小时和客服联系，临时取消，费用不退；
      </div>
      <div>
        2.因我们只使用动物奶油，动物奶油耐受有限，收到后若不及时食用请务必冷藏保存，建议24小时内食用口感最佳；
      </div>
      <div>
        3.收到蛋糕时，请务必当面验收蛋糕是否完好，无破损。确认完后再将取件码交给配送师傅。一旦签收视为商品完好；
      </div>
      <div>
        4.蛋糕需提前24小时预约；
      </div>
      <div>
        5.四公里内满88元免配送费，七公里内满168元免配送费。
      </div>
      
    </div>
    <div class="home-enjoy">
      ENJOY
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
  },
  onShow() {
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
.home {
  &-info {
    border: 60rpx solid rgba($color: $pink, $alpha: 0.5);
    font-size: $font-size-s;
    line-height: 42rpx;
    padding: 30rpx;
    border-bottom: none;
  }
  &-enjoy {
    height: 60rpx;
    font-weight: bold;
    font-size: 50rpx;
    background: rgba($color: $pink, $alpha: 0.5);
    line-height: 60rpx;
    color: white;
    text-align: center;
    letter-spacing: 40rpx;
    margin-bottom: 40rpx;
  }
}
.stick-tab {
  display: flex;
  flex-wrap: wrap;
  .d-card {
    width: 50%;
  }
}
</style>
