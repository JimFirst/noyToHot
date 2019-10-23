<template>
  <div>
    我是首页
    <img v-if="domain" :src="domain+'advantagefour.png'" alt="" srcset="">
    <button @click="test">分页获取列表</button>
    <button @click="add">添加列表</button>
    <button v-if="canIUse" open-type="getUserInfo">授权登录</button>
    <view v-else>请升级微信版本</view>
    <div>
      <div>
        留言列表
      </div>
      <div v-for="(item, index) in messageList" :key="index">
        <span>
          {{item.info}}
        </span>
        <span @click="del(item._id)">
          删除
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      domain: '',
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      messageList: ''
    }
  },
  created () {
    this.domain = this.$domain
  },
  methods: {
    test() {
      const data = {
        page: 1,
        size: 10
      }
      this.$http.message.getMessageList(data).then(res => {
        console.log(111, res)
        this.messageList = res.data
      })
    },
    add() {
      const data = {
        user: 'dsd',
        info: '我是留言'
      }
      this.$http.message.addMessage(data).then(res => {
        console.log(res)
      })
    },
    del(id) {
      this.$http.message.delMessage(id).then(res => {
        wx.showToast({
          title: '删除成功',
          icon: 'success',
          duration: 2000
        })
        this.test()
      })
    },
    authorization() {
      wx.getSetting({
        success (res){
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function(res) {
                console.log(res.userInfo)
              }
            })
          }
        }
      })
    }
  }
}
</script>

<style>
</style>
