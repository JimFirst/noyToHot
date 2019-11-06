<template>
  <div class="page">
    <d-product
      v-for="(item, index) in productList"
      :toolbar="true"
      @show="showOrHide(item._id, true, index)"
      @hide="showOrHide(item._id, false, index)"
      :key="index"
      :info="item"
    ></d-product>
  </div>
</template>

<script>
import DProduct from "../../components/DProduct";
export default {
  data() {
    return {
      productList: [],
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
      this.$http.product.getProductList(data).then(res => {
        this.total = res.total;
        wx.hideLoading();
        this.productList = [
          ...this.productList,
          ...res.data
        ]
      });
    },
    showOrHide(id, stick, index) {
      const data = {
        id: id,
        type: "edit",
        params: {
          stick: stick
        }
      };
      this.$http.cloud.editProduct(data).then(res => {
        wx.showToast({
          title: "修改成功",
          icon: "success"
        });
        this.productList[index].stick = stick
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
    DProduct
  }
};
</script>

<style>
</style>
