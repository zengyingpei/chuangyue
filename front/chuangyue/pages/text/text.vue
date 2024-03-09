<template>
	<view>
		<view class="">
			<button style="color: #999; font-size: 36rpx; border: none"  class="login" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" withCredentials="true">点击登录</button>
			<input type="nickname" placeholder="请输入昵称"/>
			<button type="primary" @click="send1">获取所有的科室</button>
			<button type="primary" @click="send2">获取对应科室的所属疾病</button>
		</view>
	</view>
</template>

<script setup>
	function send1(){
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
	
	function send2(){
		let token=uni.getStorageSync('authorization');
		uni.request({
			url: 'http://localhost:8080/api/user/sickness',
			method:'GET',
			header: {
				authorization : token
			},
			data:{
				deptId: 2
			},
			success: (res) => {
				console.log(res.data);
			}
		})
	}
</script>

<style lang="scss">

</style>
