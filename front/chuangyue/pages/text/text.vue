<template>
	<view>
		<view class="">
			<button style="color: #999; font-size: 36rpx; border: none"  class="login" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" withCredentials="true">点击登录</button>
			<input type="nickname" placeholder="请输入昵称"/>
			<button type="primary" @click="send">获取所有的科室</button>
		</view>
	</view>
</template>

<script setup>
	function send(){
		let token=uni.getStorageSync('authorization');
		uni.request({
			url: 'http://localhost:8080/api/user/department',
			header: {
				authorization : token
			},
			method:'GET',
			success: (res) => {
				console.log(res.data);
			}
		})
	}
</script>

<style lang="scss">

</style>
