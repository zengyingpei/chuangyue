<template>
	<view class="user_layout">
		
		<view class="user_info">
			<view class="info_up">
				<view class="info_image">
					<image class="images" src="../../static/logo.png" mode=""></image>
				</view>
				
				<view class="info_phone">18770718990</view>
				
				<view class="update_message">
					修改账号信息
				</view>
			</view>
			<view class="info_down">
				<view class="info_down_content">
					<view class="content_text">VIP 创悦会员</view>
					<view class="open">立即开通</view>
				</view>
			</view>
			
			<!-- <view class="photo">
				<image src="../../static/logo.png" mode="aspectFill"></image>
			</view>
			<view class="name">
				流泪猫猫头
			</view>
			<view class="address">
				安徽省淮南市安徽理工大学
			</view> -->
			
		</view>
		
		<view class="section_v1">
			<view class="section_header">
				<text class="title">我的订单</text>
				<text class="all">查看全部订单></text>
			</view>
			<view class="section_body">
				<view class="section_body_item" v-for="item in section1" :key="item.id">
					<view class="section_body_item_img"><image class="images" :src="item.img"></image></view>
					<view class="section_body_item_title">{{item.title}}</view>
				</view>
			</view>
		</view>
		
		<view class="section_v2">
			<view class="section_header">
				<text class="title">我的医疗</text>
			</view>
			<view class="section_body">
				<view class="section_body_item" v-for="item in section2" :key="item.id" >
					<view class="section_body_item_img"><image class="images" :src="item.img"></image></view>
					<view class="section_body_item_title">{{item.title}}</view>
				</view>
			</view>
		</view>
		
	
		<view class="section_v2">
			<view class="section_header">
				我的工具
			</view>
			<view class="section_body">
				<view class="section_body_item" v-for="item in section3" :key="item.id">
					<view class="section_body_item_img"><image class="images" :src="item.img"></image></view>
					<view class="section_body_item_title">{{item.title}}</view>
				</view>
			</view>
		</view>
		
	</view>
	
</template>

<script >
	export default {
		data() {
			return {
				section1:[
					{id:1, img:'../../static/icons/bag.svg', title:'待付款'},
					{id:2, img:'../../static/icons/clock.svg', title:'待发货'},
					{id:3, img:'../../static/icons/rocket.svg', title:'待收货'},
					{id:4, img:'../../static/icons/like.svg', title:'待评价'},
					{id:5, img:'../../static/icons/shouhou.svg', title:'退款/售后'}
					
				],
				section2:[
					{id:1, img:'../../static/icons/geolocalizator.svg', title:'收货地址'},
					{id:2, img:'../../static/icons/capsules.svg', title:'我的处方'},
					{id:3, img:'../../static/icons/yuyue.svg', title:'我的预约'},
					{id:4, img:'../../static/icons/shouhou.svg', title:'我的评价'},
					{id:5, img:'../../static/icons/hh.svg', title:'就诊人管理'},
					{id:6, img:'../../static/icons/bingli.svg', title:'我的病例'},
					{id:7, img:'../../static/icons/bell.svg', title:'就诊提醒'},
					{id:8, img:'../../static/icons/record.svg', title:'就诊记录'}
				],
				section3:[
					{id:1, img:'../../static/icons/like.svg', title:'我的收藏'},
					{id:2, img:'../../static/icons/huiyuan.svg', title:'我的会员'},
					{id:3, img:'../../static/icons/quan.svg', title:'优惠券'},
					{id:4, img:'../../static/icons/question.svg', title:'常见问题'},
					{id:5, img:'../../static/icons/kefu.svg', title:'在线客服'},
					{id:6, img:'../../static/icons/bg-question.svg', title:'关于'}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.user_layout{
		.user_info{
			
			align-items: center;
			justify-content: center;
			flex-direction: column;
			
			.info_up{
				padding: 20rpx 40rpx;
				display: flex;
				.info_image{
					width: 120rpx;
					height: 120rpx;
					
					.images{
						width: 120rpx;
						height: 120rpx;
						border-radius: 50%;
					}
				}
				.info_phone{
					padding: 20rpx 20rpx;
					font-size: 50rpx;
				}
				.update_message{
					margin-top: 25rpx;
					padding-top: 10rpx;
					border: 1px solid #eee;
					height: 55rpx;
					width: 320rpx;
					text-align: center;
					font-size: 30rpx;
					border-radius: 15rpx;
				}
			}
			.info_down{
				display: flex;
				justify-content: center;
				border-bottom: 1rpx solid #06121e;
				.info_down_content{
					background-color: #cdf1de;
					width: 450rpx;
					height: 60rpx;
					border: 1px solid #eee;
					border-top-left-radius: 20rpx;
					border-top-right-radius: 20rpx;
					display: flex;
					.content_text{
						padding-top: 10rpx;
						padding-left: 20rpx;
						font-size: 35rpx;
						font-weight: bold;
					}
					.open{
						border-radius: 20rpx;
						height: 45rpx;
						width: 150rpx;
						text-align: center;
						margin-top: 8rpx;
						margin-left: 50rpx;
						border: 1rpx solid #06121e;
						font-weight: bold;
					}
				}
			}
			// .photo{
			// 	width: 160rpx;
			// 	height: 160rpx;
			// 	border-radius: 50%;
			// 	overflow: hidden;
			// 	image{
			// 		width: 100%;
			// 		height: 100%;
			// 	}
			// }
			// .name{
			// 	font-size: 44rpx;
			// 	color: #333;
			// 	padding: 20rpx 0 5rpx;
			// }
			// .address{
			// 	font-size: 28rpx;
			// 	color: #aaa;
			// }
		}
		.section_v1{
			width: 690rpx;
			margin: 20rpx auto;
			border: 1px solid #eee;
			border-radius: 20rpx;
			box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.06);
			.section_header{
				display: flex;
				justify-content: space-between;
				align-content: space-between;
				.title{
					padding-left: 20rpx;
					padding-top: 5rpx;
					font-size: 44rpx;
				}
				.all{
					font-size: 28rpx;
					padding-top: 20rpx;
					padding-right: 20rpx;
				}
			}
			.section_body{
				display: flex;
				
				flex-wrap: wrap;
				flex-direction: row;
				// justify-content: space-between;
				// align-content: center;
				
				// background: #f7f7f7;
				padding: 5rpx 0;
				.section_body_item{
					width: 20%;						//控制一行显示多少个元素
					height: 200rpx;
					text-align: center;
					// border:1rpx solid #ccc;		//边框
					box-sizing:border-box;	
					.section_body_item_img{
						width: 96rpx;
						height: 96rpx;
						margin-top: 30rpx;
						margin-left: 23rpx;
						.images{
							width: 96rpx;
							height: 96rpx
						}
					}
					.section_body_item_title{
						width: 100%;
						height: 34rpx;
						line-height: 34rpx;
						color: #06121e;
						font-size: 30rpx;
						font-weight: bold;
						margin-top: 20rpx
					}
				}
			}
		}
		.section_v2{
			width: 690rpx;
			margin: 20rpx auto;
			border: 1px solid #eee;
			border-radius: 20rpx;
			box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.06);
			
			.section_header{
				padding-left: 20rpx;
				padding-top: 5rpx;
				font-size: 44rpx;
				
				
			}
			.section_body{
				display: flex;
				
				flex-wrap: wrap;
				flex-direction: row;
				// justify-content: space-between;
				// align-content: center;
				
				// background: #f7f7f7;
				padding: 5rpx 0;
				.section_body_item{
					width: 25%;						//控制一行显示多少个元素
					height: 200rpx;
					text-align: center;
					// border:1rpx solid #ccc;		//边框
					box-sizing:border-box;	
					
					.section_body_item_img{
						width: 96rpx;				//控制图片大小
						height: 96rpx;
						margin-top: 30rpx;			//控制图片的上下位置
						margin-left: 38rpx;			//控制图片的左右位置
						.images{
							width: 96rpx;			//控制图片大小
							height: 96rpx
						}
					}
					.section_body_item_title{
						width: 100%;
						height: 34rpx;
						line-height: 34rpx;
						color: #06121e;
						font-size: 30rpx;
						font-weight: bold;
						margin-top: 20rpx
					}
				}
			}
		}
	}
</style>
