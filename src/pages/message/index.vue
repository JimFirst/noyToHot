<template>
  <div class="page message">
    <textarea rows="10" class="textarea" autofocus v-model="info" placeholder="请输入您的评价" />
    <button class="message-btn" :loading="btnLoading" type="primary" @click="add" :disabled="!info">提交评价</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      btnLoading: false,
      info: ''
    }
  },
  created () {
    
  },
  methods: {
    add() {
      const that = this
      wx.getStorage({
        key: 'userInfo',
        success(res) {
          const data = {
            ...res.data,
            info: that.info,
            show: false
          }
          that.btnLoading = true
          that.$http.message.addMessage(data).then(res => {
            that.btnLoading = false
            wx.showToast({
              title: '评价成功',
              icon: 'success'
            })
            setTimeout(() => {
              wx.navigateBack()
            }, 500)
          })
        }
      })
      
    }
  },
}
</script>

<style lang="scss">
.message {
  &-btn {
    margin-top: 30rpx;
  }
}
</style>
