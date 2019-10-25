<template>
  <div>
    我是首页
    <button @click="getList">分页获取列表</button>
    <button @click="add" type="primary" :loading="btnLoading">添加列表</button>
    <button v-if="canIUse" open-type="getUserInfo" @getuserinfo="login">授权登录</button>
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
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      messageList: '',
      btnLoading: false
    }
  },
  created () {
    this.getList()
  },
  methods: {
    login(val) {
      console.log(val)
    },
    getList() {
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
      this.btnLoading = true
      this.$http.message.addMessage(data).then(res => {
        this.btnLoading = false
        wx.showToast({
          title: '留言成功',
          icon: 'success'
        })
        this.getList()
      })
    },
    del(id) {
      wx.cloud.callFunction({
        name: 'editMessage',
        data: {
          id: id,
          type: 'del'
        }
      }).then(res => {
        this.getList()
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
