<template>
  <div class="page">
    <d-message
      v-for="(item, index) in messageList"
      :toolbar="true"
      @del="del(item._id, index)"
      @show="showOrHide(item._id, true, index)"
      @hide="showOrHide(item._id, false, index)"
      :key="index"
      :info="item"
    ></d-message>
  </div>
</template>

<script>
import DMessage from "../../components/DMessage";
export default {
  data() {
    return {
      messageList: [],
      page: 1,
      total: 0
    };
  },
  onLoad() {
    Object.assign(this, this.$options.data())
    this.getList();
  },
  methods: {
    getList() {
      const data = {
        page: this.page,
        size: 10
      };
      wx.showLoading({
        title: "加载中"
      });
      this.$http.message.getMessageList(data).then(res => {
        this.total = res.total;
        wx.hideLoading();
        this.messageList = [
          ...this.messageList,
          ...res.data
        ]
      });
    },
    del(id, index) {
      const data = {
        id: id,
        type: "del"
      };
      wx.showLoading({
        title: "删除中"
      });
      this.$http.cloud.editMessage(data).then(res => {
        wx.hideLoading();
        wx.showToast({
          title: "删除成功",
          icon: "success"
        });
        this.messageList.splice(index, 1)
      });
    },
    showOrHide(id, show, index) {
      const data = {
        id: id,
        type: "edit",
        params: {
          show: show
        }
      };
      this.$http.cloud.editMessage(data).then(res => {
        wx.showToast({
          title: "修改成功",
          icon: "success"
        });
        this.messageList[index].show = show
      });
    }
  },
  // 下拉下一页
  onReachBottom: function() {
    if (this.total / 10 > this.page) {
      this.page = this.page + 1;
      this.getList();
    }
  },
  components: {
    DMessage
  }
};
</script>

<style>
</style>
