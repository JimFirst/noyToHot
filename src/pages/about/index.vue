<template>
  <div class="page about">
    <map
      id="map"
      longitude="120.177240"
      latitude="30.328490"
      scale="16"
      :markers="markers"
      show-location
      style="width: 100%; height: 300px;"
    ></map>
    <d-cell
      title="店名"
      content="not too hot工作室"
    ></d-cell>
    <d-cell
      title="地址"
      content="中大银泰城7号楼1604"
    ></d-cell>
    <d-cell
      title="电话"
      content="18768563852"
    ></d-cell>
    <div class="about-link">
      <div>
        <img @click="previewImg" src="cloud://online-e18550.6f6e-online-e18550-1300491148/images/woker_link.jpg">
      </div>
      <div @longpress="longpress" class="about-link-title">
        扫一扫添加我们
      </div>
    </div>
    <button v-show="showBtn" @click="toMessage">留言列表</button>
    <button v-show="showBtn" @click="toProduct">产品管理</button>
    <button v-show="showBtn" @click="toAddProduct">添加产品</button>
    <button type="primary" open-type="contact">联系客服</button>
    <div v-if="dialog" class="d-dialog">
      <div class="d-dialog-content">
        <div>
          <input type="password" v-model="password">
        </div>
        <div class="d-dialog-content-btn">
          <button size="mini" @click="cancel">取消</button>
          <button type="primary" @click="confirm" size="mini">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      markers: [
        {
          id: 0,
          latitude: 30.328490,
          longitude: 120.177240,
          width: 50,
          height: 50
        }
      ],
      showBtn: false,
      dialog: false,
      password: ''
    };
  },
  onShow() {
    this.showBtn = false
  },
  methods: {
    previewImg() {
      wx.previewImage({
        current: 'cloud://online-e18550.6f6e-online-e18550-1300491148/images/woker_link.jpg', 
        urls: ['cloud://online-e18550.6f6e-online-e18550-1300491148/images/woker_link.jpg']
      })
    },
    toMessage() {
      wx.navigateTo({
        url: '../messageList/main'
      })
    },
    toAddProduct() {
      wx.navigateTo(({
        url: '../product/main'
      }))
    },
    toProduct() {
      wx.navigateTo(({
        url: '../productList/main'
      }))
    },
    cancel() {
      this.dialog = false
    },
    confirm() {
      const data = {
        password: this.password
      }
      this.$http.cloud.login(data).then(res => {
        if (res.result) {
          this.dialog = false
          this.showBtn = true
        } else {
          this.showBtn = false
          wx.showToast({
            title: "密码错误",
            icon: "none"
          })
        }
      })
    },
    longpress() {
      this.dialog = true
      this.password = ''
    }
  },
};
</script>

<style lang="scss">
.about {
  &-link {
    text-align: center;
    margin: 30rpx 0;
    img {
      width: 240rpx;
      height: 240rpx;
    }
    &-title {
      font-size: $font-size-s;
      color: $sup-font;
    }
  }
  .d-dialog {
    position: fixed;
    z-index: 5000;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba($color: $info-font, $alpha: 0.8);
    &-content {
      margin-top: 300rpx;
      width: 70%;
      height: 200rpx;
      background: white;
      padding:30rpx;
      &-btn {
        text-align: center;
        margin-top: 40rpx;
      }
    }
  }
}
</style>
