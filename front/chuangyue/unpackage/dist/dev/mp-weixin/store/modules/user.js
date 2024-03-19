"use strict";
const user = {
  state: {
    is_login: false,
    token: "",
    userInfo: {}
  },
  getters: {},
  mutations: {
    updateToken(state, token) {
      state.token = token;
    },
    updateUserInfo(state, info) {
      state.userInfo = info;
      state.is_login = true;
    },
    clearUserInfo(state) {
      state.userInfo = {};
      state.token = "";
      state.is_login = false;
    }
  },
  actions: {}
};
exports.user = user;
