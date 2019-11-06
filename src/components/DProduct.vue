<template>
  <div class="d-product">
    <div class="d-product-pic">
      <img :src="info.cover" alt="头像">
    </div>
    <div class="d-product-main">
      <div>
        {{info.vame}}
      </div>
      <div class="d-product-main-info">
        <span>
          {{info.desc}}
        </span>
      </div>
    </div>
    <div class="d-product-right" v-if="toolbar">
      <button v-show="!info.stick" type="primary" size="mini" @click="show">推荐</button>
      <button v-show="info.stick" size="mini" @click="hide">不推荐</button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DMessage',
  props: {
    info: {
      type: Object
    },
    toolbar: {
      type: Object,
      default: false
    }
  },
  methods: {
    show() {
      this.$emit('show')
    },
    hide() {
      this.$emit('hide')
    }
  },
}
</script>

<style lang="scss">
.d-product {
  display: flex;
  &-pic {
    margin-right: 30rpx;
    img {
      border-radius: 10rpx;
      width: 180rpx;
      height: 180rpx;
    }
  }
  &-main {
    flex: 1;
    font-size: $font-size-m;
    color: $primary-font;
    &-info {
      font-size: $font-size-s;
      color: $sup-font;
      word-break: break-all;
    }
  }
  &-right {
    width: 180rpx;
    text-align: center;
  }
}
</style>