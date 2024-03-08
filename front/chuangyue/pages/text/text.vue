<template>
	<view>
		<view class="">
			<button type="primary" @click="send">get info</button>
			<button style="color: #999; font-size: 36rpx; border: none"  class="login" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" withCredentials="true">点击登录</button>
			<input type="nickname" placeholder="请输入昵称"/>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss">

</style>



<!-- <template>
	<view class="containar">
		<view class="avatarUrl">
			<button type="balanced" open-type="chooseAvatar" @chooseavatar="onChooseavatar">
				<image :src="avatarUrl" class="refreshIcon"></image>
			</button>
		</view>
		<view class="userName">
			<text>昵称：</text>
			<input type="nickName" class="weui-input" :value="userName" @blur="bindblur" placeholder="请输入昵称"
				@input="bindinput" />
		</view>

		<view class="btn">
			<view class="btn-sub" @click="onSubmit">保存</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				avatarUrl: '',
				userName: ''
			};
		},
		onLoad(option) {},
		methods: {
			bindblur(e) {
				this.userName = e.detail.value; // 获取微信昵称
			},
			bindinput(e) {
				this.userName = e.detail.value; // 获取微信昵称
				console.log(this.userName);
			},
			onChooseavatar(e) {
				let self = this;
				let {
					avatarUrl
				} = e.detail;
				this.avatarUrl = avatarUrl
			},
			onSubmit() {
				var that = this
				uni.login({
					"provider": "weixin",
					// "onlyAuthorize": true, // 微信登录仅请求授权认证
					success: function(event) {
						const {
							code
						} = event
						const name = that.userName
						// 判断头像以及昵称不为空 再上传
						if (that.userName && that.avatarUrl) {
							uni.uploadFile({
								url:"",//请求路径
								filePath: that.avatarUrl,
								fileType: "image",
								name: 'img',
								success: uploadFileRes => {
									let data=JSON.parse(uploadFileRes.data);
									//将个人信息保存到全局
								that.$store.dispatch("user/saveUserInfo",data.data);
									// 跳转到我的界面
								},
								fail: (error) => {
									uni.showToast({
										title: "保存错误",
									});
								}
							});
						} else {
							uni.showToast({
								icon: 'none',
								title: '请上传头像并填写昵称'
							})
							return false;
						}
					},
					fail: function(err) {
						// 登录授权失败  
						// err.code是错误码
					}
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.containar {
		.avatarUrl {
			padding: 80rpx 0 40rpx;
			background: #fff;

			button {
				background: #fff;
				line-height: 80rpx;
				height: auto;
				border: none !important;
				width: auto;
				// padding: 20rpx 30rpx;
				margin: 0;
				display: flex;
				border: none;
				justify-content: center;
				align-items: center;

				&::after {
					border: none;
				}

				.refreshIcon {
					width: 160rpx;
					height: 160rpx;
					border-radius: 50%;
					background-color: #ccc;
				}

				.jt {
					width: 14rpx;
					height: 28rpx;
				}
			}
		}

		.userName {
			background: #fff;
			padding: 20rpx 30rpx 80rpx;
			display: flex;
			align-items: center;
			justify-content: center;

			.weui-input {
				padding-left: 60rpx;
			}
		}

		.btn {
			width: 100%;
			.btn-sub {
				width: 670rpx;
				margin: 80rpx auto 0;
				height: 90rpx;
				background: #DF8585;
				border-radius: 45rpx;
				line-height: 90rpx;
				text-align: center;
				font-size: 36rpx;
				color: #fff;
			}
		}
	}
</style -->>
