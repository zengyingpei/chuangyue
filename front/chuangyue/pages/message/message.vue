<template>
	<view class="body">
		<view class="no_message">
			<view class="no_message_img"><image src="../../static/logo.png"></image></view>
			<view class="no_message_info">暂无新消息</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.body{
		height: 100%;
		display: flex;
		justify-content: center; /* 水平居中 */
		align-items: center; /* 垂直居中 */
		flex-direction: column;
		.no_message{
			margin-top: 500rpx;
			width: 200rpx;
			height: 200rpx;
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			.no_message_img{
				width: 100rpx;
				height: 100rpx;
				image{
					width: 100rpx;
					height: 100rpx;
				}
			}
			.no_message_info{
				
			}
		}
	}
</style>
