"use strict";
const common_vendor = require("../common/vendor.js");
const store_modules_user = require("./modules/user.js");
const store = common_vendor.createStore({
  state: {
    //存放状态
    "username": "foo",
    "age": 18
  },
  modules: {
    user: store_modules_user.user
  }
});
exports.store = store;
