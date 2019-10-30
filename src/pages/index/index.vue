<template>
  <div class="page">
    我是首页
    <d-button></d-button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      btnLoading: false
    }
  },
  methods: {
    login(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss">
.test {
  color: $primary-font;
}
</style>
