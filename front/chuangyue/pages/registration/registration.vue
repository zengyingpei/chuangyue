<template>
	<view>
		<view class="row" v-for="(item, index) in futureDays" :key="item.id">
			<view class="left">
				<text class="date">{{item.date}}</text> &nbsp;
				 <text class="time">{{item.slot}}</text>
				 <text class="available" style="margin-left: 100rpx; font-size: 30rpx;color: #ff7043;">剩余 {{item.available}}</text>
			</view>
			<view class="right">
				<view class="button">
					预约
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {baseUrl} from '../../common/js/utils.js'
	export default {
		data() {
			return {
				futureDays:[]	// 存储所有可以预约的信息
			};
		},
		onLoad(option){
			console.log("传过来的医生id ",option.docId);
			this.getAppointment(option.docId);
		},
		methods:{
			getAppointment(docId){
				let token=uni.getStorageSync('authorization');
				uni.request({
					url: `${baseUrl}/api/user/appointment/list`,
					type:'GET',
					header:{
						'authorization' : token,
					},
					data:{
						docId : docId
					},
					success: (res) => {
						// 成功
						if(res.data.code == 1){
							console.log(res.data);
							this.futureDays=res.data.data;
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.row{
		width: 690rpx;
		margin: 20rpx auto;
		border: 1px solid #eee;
		border-radius: 20rpx;
		box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.06);
		display: flex;
		.left{
			line-height: 80rpx;
			height: 80rpx;
			width: 530rpx;
			box-sizing: border-box;
			padding-left: 20rpx;
		}
		.right{
			width: 170rpx;
			.button{
				margin-top: 10rpx;
				background-color: #6bce72;
				height: 60rpx;
				width: 150rpx;
				border-radius: 20rpx;
				border: 2rpx solid #6bce72;
				line-height: 60rpx;
				color: #eee;
				font-size: 35rpx;
				text-align: center;
			}
		}
	}
</style>
