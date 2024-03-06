<template>
	<view>
		<view class="buy_car">
			<image src="../../static/icons/buy_car.svg" mode=""></image>
			<view class="buy_car_text">我的购物车</view>
		</view>
		<view class="">
			<view class="search">
				<input class="search_box" type="text" placeholder="输入药品名 疾病或症状"/>
				<view class="icon">
					<image src="../../static/icons/search.svg" mode=""></image>
				</view>
			</view>
		</view>
		
		<view class="container">
			<view class="box">
				<scroll-view class="my_scroll" scroll-x="true" >
					<view class="sort" v-for="(item, index) in sorts" :key="item.id">
						{{item.description}}
					</view>
				</scroll-view>
			</view>
		</view>
		
		
		<view class="container1">
			<view class="title">
				
			</view>
			<view class="body">
				
				
				<view class="item" v-for="(item, index) in arr" :key="item.id">
					<view class="item_img">
						<image src="../../static/logo.png" mode=""></image>
					</view>
					<view class="description">{{item.name}}</view>
					<view class="item_bom">
						<view class="price">￥{{item.price}}</view>
						<view class="add">
							<image src="../../static/icons/add.svg" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sorts:[
					{id:1, description:"养生茶饮"},
					{id:2, description:"养生茶饮"},
					{id:3, description:"养生茶饮"},
					{id:4, description:"养生茶饮"},
					{id:5, description:"养生茶饮"}
				],
				arr:[
					{id:1, name:"胖大海罗汉果橘子茶",price:"100",photo:"../../static/logo.png"},
					{id:2, name:"胖大海罗汉果橘子茶",price:"100",photo:"../../static/logo.png"},
					{id:3, name:"胖大海罗汉果橘子茶",price:"100",photo:"../../static/logo.png"},
					{id:4, name:"胖大海罗汉果橘子茶",price:"100",photo:"../../static/logo.png"},
					{id:5, name:"胖大海罗汉果橘子茶",price:"100",photo:"../../static/logo.png"},
					{id:6, name:"胖大海罗汉果橘子茶",price:"100",photo:"../../static/logo.png"}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.buy_car{
		display: flex;
		justify-content: center;
		margin-bottom: 10rpx;
		image{
			width: 70rpx;
			height: 70rpx;
		}
		.buy_car_text{
			padding-top: 10rpx;
			font-size: 44rpx;
		}
	}
	
	.search{
		// width: 690rpx;
		border-radius: 20rpx;
		// border: 1rpx solid black;
		display: flex;
		justify-content: center;
		
		.search_box{
			border: 1rpx solid #6ea3e5;
			border-right-width: 0;
			border-top-left-radius: 20rpx;
			border-bottom-left-radius: 20rpx;
			padding-left: 10rpx;
			width: 75%;
			height: 80rpx;
			font-size: 35rpx;
			font-weight: lighter;
		}
		.icon{
			width: 80rpx;
			height: 100%;
			border-left-width: 0;
			border: 1rpx solid #6ea3e5;
			image{
				width: 80rpx;
				height: 70rpx;
			}
		}
	}
	
	.container{
		width: 690rpx;
		margin: 20rpx auto;
		border: 1rpx solid #eee;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		box-shadow: 0 0 40rpx rgba(0, 0, 0, 0.06);
		overflow: hidden;
		.box{
			.my_scroll{
				white-space: nowrap;
				width: 685rpx;
				::-webkit-scrollbar {
				    display: none;
				    width: 0;
				    height: 0;
				  }
				.sort{
					font-size: 40rpx;
					display: inline-block;
					width: 180rpx;
					height: 70rpx;
					padding: 10rpx 10rpx;
					text-align: center;
				}
			}
			
		}
	}
	
	.container1{
		margin: 20rpx auto;
		width: 690rpx;
		border: 1rpx solid #eee;
		border-radius: 20rpx;
		.title{
			padding: 10rpx 10rpx;
			font-size: 50rpx;
			font-weight: bold;
			font-family: 黑体;
		}
		.body{
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			.item{
				width: 50%;
				// padding-left: 1rpx;
				// height: 300rpx;
				.item_img{
					width: 340rpx;
					height: 340rpx;
					image{
						width: 340rpx;
						height: 340rpx;
					}
				}
				.description{
					width: 340rpx;
					// background-color: red;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.item_bom{
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					width: 340rpx;
					height: 60rpx;
					padding-top: 5rpx;
					.price{
						color: red;
					}
					.add{
						width: 38rpx;
						height: 38rpx;
						padding-top: 5rpx;
						padding-right: 10rpx;
						image{
							width: 38rpx;
							height: 38rpx;
						}
					}
				}
			}
		}
	}
</style>
