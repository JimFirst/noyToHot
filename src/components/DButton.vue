<template>
  <div class="d-button">
    <button v-if="!showBtn" open-type="getUserInfo" @getuserinfo="login">{{text}}</button>
    <button v-else type="primary" @click="btnClick">{{text}}</button>
  </div>
</template>

<script>
export default {
  name: 'DButton',
  props: {
    text: {
      default: '评价'
    },
    keyboard: {},
    type: ''
  },
  data() {
    return {
      showBtn: false
    }
  },
  onLoad() {
    const that = this
    wx.getStorage({
      key: 'userInfo',
      success(res) {
        that.showBtn = true
      }
    })
  },
  methods: {
    login(val) {
      this.showBtn = true
      if (val.target.errMsg.includes('ok')) {
        wx.getUserInfo({
          success: function(res) {
            wx.navigateTo({
              url: '../message/main'
            })
            wx.setStorage({
              key: 'userInfo',
              data: res.userInfo
            })
          }
        })
      } else {
        this.showBtn = false
      }
    },
    btnClick() {
      wx.navigateTo({
        url: '../message/main?key='+this.keyboard+'&type=' +this.type
      })
      this.$emit('click')
    }
  },
}
</script>

<style>

</style>