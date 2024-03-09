// 页面路径：store/index.js
import { createStore } from 'vuex'
import user from './modules/user.js'

const store = createStore({
	state:{//存放状态
		"username":"foo",
		"age":18
	},
	modules: {
		user
	}
})

export default store