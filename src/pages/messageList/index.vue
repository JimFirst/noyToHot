<template>
  <div class="page">
    <d-message
      v-for="(item, index) in messageList"
      :toolbar="true"
      @del="del(item._id)"
      @show="showOrHide(item._id, true)"
      @hide="showOrHide(item._id, false)"
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
        wx.stopPullDownRefresh();
        this.messageList = res.data;
      });
    },
    del(id) {
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
        this.page = 1;
        this.getList();
      });
    },
    showOrHide(id, show) {
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
        this.getList();
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
  // 上一页
  onPullDownRefresh: function() {
    if (this.page > 1) {
      this.page = this.page - 1;
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
