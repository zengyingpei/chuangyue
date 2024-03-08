class Utils{
	//获取用户信息
	getUserInfo() {
		//调用uni.login({}) 会根据环境自己判断使用某个平台的登录
		uni.login({
			success:()=>{
				console.log(res)
				this.request({
					url: 'http://101.34.77.85:3300/pz/auth/wxLogin',
					data:{
						code: res.code
					},
					success: (res)=>{
						console.log('res', res);
					}
				})
			}
		})
	}
	
	request(option = {
		showLoading: false
	}) {
		if(!option.url){
			return false
		}
		
		if(option.showLoading){
			this.showLoading()
		}
		
		uni.request({
			url: option.url,
			data:  option.data ? option.data : {},
			header: option.header ? option.header : {},
			method: option.method ? option.method : 'GET',
			success: (res)=>{
				uni.hideLoading()
				//后端返回的数据异常
				if(res.data.code != 10000){		//res.data就是代表后端返回的整个Result的json对象
					//将失败的结果返回出去
					if(option.fail && typeof option.fail == 'function'){
						option.fail(res);
					}
				}else{
					//将成功的结果返回出去
					if(option.success && typeof option.success == 'function')[
						// option.success(res.data);		
					]
				}
			},
			fail: (res)=>{
				uni.hideLoading()
				console.log(res);
			}
		})
	}
	
	showLoading(){
		const isShowLoading = uni.getStorageSync('isShowLoading');
		if(isShowLoading){
			uni.hideLoading();
			uni.setStorageSync('isShowLoading', false);
		}
		
		uni.showLoading({
			title: '加载中...',
			complete: function () {
				uni.setStorageSync('isShowLoading',true);
			},
			fail: function () {
				uni.setStorageSync('isShowLoading',false);
			}
		})
	}
}

export default new Utils()