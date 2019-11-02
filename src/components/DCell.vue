<template>
  <div class="d-cell">
    <div class="d-cell-title">
      {{title}}
    </div>
    <div class="d-cell-content">
      <span v-if="content">
        {{content}}
      </span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DCell',
  props: ['title', 'content']
}
</script>

<style lang="scss">
.d-cell {
  display: flex;
  justify-content: space-between;
  font-size: $font-size-m;
  padding: 20rpx 10rpx; 
  &-title {
    color: $primary-font;
  }
  &-content {
    color: #929292;
  }
}
</style>