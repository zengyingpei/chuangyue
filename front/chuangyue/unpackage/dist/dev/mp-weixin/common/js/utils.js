"use strict";
const common_vendor = require("../vendor.js");
class Utils {
  //获取用户信息
  getUserInfo() {
    common_vendor.index.login({
      success: () => {
        console.log(res);
        this.request({
          url: "http://101.34.77.85:3300/pz/auth/wxLogin",
          data: {
            code: res.code
          },
          success: (res2) => {
            console.log("res", res2);
          }
        });
      }
    });
  }
  request(option = {
    showLoading: false
  }) {
    if (!option.url) {
      return false;
    }
    if (option.showLoading) {
      this.showLoading();
    }
    common_vendor.index.request({
      url: option.url,
      data: option.data ? option.data : {},
      header: option.header ? option.header : {},
      method: option.method ? option.method : "GET",
      success: (res2) => {
        common_vendor.index.hideLoading();
        if (res2.data.code != 1e4) {
          if (option.fail && typeof option.fail == "function") {
            option.fail(res2);
          }
        } else {
          if (option.success && typeof option.success == "function")
            ;
        }
      },
      fail: (res2) => {
        common_vendor.index.hideLoading();
        console.log(res2);
      }
    });
  }
  showLoading() {
    const isShowLoading = common_vendor.index.getStorageSync("isShowLoading");
    if (isShowLoading) {
      common_vendor.index.hideLoading();
      common_vendor.index.setStorageSync("isShowLoading", false);
    }
    common_vendor.index.showLoading({
      title: "加载中...",
      complete: function() {
        common_vendor.index.setStorageSync("isShowLoading", true);
      },
      fail: function() {
        common_vendor.index.setStorageSync("isShowLoading", false);
      }
    });
  }
}
const Utils$1 = new Utils();
exports.Utils = Utils$1;
