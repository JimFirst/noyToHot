<template>
  <div class="d-message">
    <div class="d-message-pic">
      <img :src="info.avatarUrl" alt="头像">
    </div>
    <div class="d-message-main">
      <div>
        {{info.nickName}}
      </div>
      <div class="d-message-main-info">
        <span>
          {{info.info}}
        </span>
      </div>
    </div>
    <div class="d-message-right">
      <button v-show="!info.show" type="primary" size="mini" @click="show">展示</button>
      <button v-show="info.show" size="mini" @click="hide">隐藏</button>
      <button type="warn" @click="del" size="mini">删除</button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DMessage',
  props: ['info'],
  methods: {
    del() {
      this.$emit('del')
    },
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
.d-message {
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
    }
  }
  &-right {
    width: 140rpx;
    text-align: center;
  }
}
</style>