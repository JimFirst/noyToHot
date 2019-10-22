<template>
  <div>
    我是首页
    <img src="cloud://dev-e18550.6465-dev-e18550/images/advantagefour.png" alt="" srcset="">
    <button @click="test">测试</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      
    }
  },
  methods: {
    test() {
      this.$db.get('message').then(res => {
        console.log(res)
      })
    }
  },
  created () {

  }
}
</script>

<style>
</style>
