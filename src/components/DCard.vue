<template>
	<div class="d-card">
		<div class="d-card-pic">
			<image :src="src" alt="图片" mode="scaleToFill" />
		</div>
		<div class="d-card-name">
			{{name}}
		</div>
		<div class="d-card-price">
			{{'￥' + price}}
		</div>
	</div>
</template>

<script>
export default {
  name: "DCard",
  props: {
    src: {
      type: String,
      required: true
    },
		name: {
			type: String,
			required: true
		},
		price: {
			required: false
		}
	}
};
</script>

<style lang="scss">
.d-card {
	padding: 10rpx;
	box-sizing: border-box;
	&-pic {
		image {
			width: 100%;
			height: 360rpx;
		}
	}
	&-name {
		font-size: $font-size-m;
		color: $primary-font;
	}
	&-price {
		font-size: $font-size-s;
		color: $pink;
	}
}
</style>
