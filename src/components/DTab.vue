<template>
  <div class="d-tab">
    <div class="d-tab-item" :class="{'d-tab-active': activeTab === index}" @click="clickTab(index, item.key)" v-for="(item, index) in tabs" :key="index">
      <span>
        {{item.name}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DTab',
  props: {
    tabs: {
      type: Array
    }
  },
  data() {
    return {
      activeTab: 0
    }
  },
  methods: {
    clickTab(index, key) {
      this.activeTab = index
      this.$emit('change', key)
    }
  },
}
</script>

<style lang="scss">
.d-tab {
  display: flex;
  &-item {
    padding: 10rpx 10rpx;
    font-size: $font-size-m;
    flex: 1;
    text-align: center;
    border-radius: 50rpx;
  }
  &-active {
    background: $pink;
    color: white;
  }
}
</style>
