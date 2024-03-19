"use strict";
const common_vendor = require("../common/vendor.js");
const store = common_vendor.createStore({
  state: {
    //存放状态
    username: "",
    avatar: "",
    token: "",
    is_login: 0
  },
  mutations: {
    updateUsername(state, username) {
      state.username = username;
    },
    updateAvatar(state, avatar) {
      state.avatar = avatar;
    },
    updateToken(state, token) {
      state.token = token;
    },
    updateIsLogin(state, is_login) {
      state.is_login = is_login;
    }
  }
});
exports.store = store;
