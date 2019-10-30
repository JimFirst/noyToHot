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
      title="地址"
      content="中大银泰城7号楼1604"
    ></d-cell>
    <d-cell
      title="电话"
      content="18768563852"
    ></d-cell>
    <button open-type="contact">联系客服</button>
    <div class="about-link">
      <div>
        <img src="/static/images/woker_link.jpg">
      </div>
      <div class="about-link-title">
        联系我们
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
      ]
    };
  },
  created() {}
};
</script>

<style lang="scss">
.about {
  &-link {
    text-align: center;
    margin-top: 30rpx;
    img {
      width: 240rpx;
      height: 240rpx;
    }
    &-title {
      font-size: $font-size-s;
      color: $sup-font;
    }
  }
}
</style>
