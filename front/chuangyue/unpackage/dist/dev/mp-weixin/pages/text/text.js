"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "text",
  setup(__props) {
    function send1() {
      let token = common_vendor.index.getStorageSync("authorization");
      common_vendor.index.request({
        url: "http://localhost:8080/api/user/department",
        header: {
          authorization: token
        },
        method: "GET",
        success: (res) => {
          console.log(res.data);
        }
      });
    }
    function send2() {
      let token = common_vendor.index.getStorageSync("authorization");
      common_vendor.index.request({
        url: "http://localhost:8080/api/user/sickness",
        method: "GET",
        header: {
          authorization: token
        },
        data: {
          deptId: 2
        },
        success: (res) => {
          console.log(res.data);
        }
      });
    }
    function send3() {
      let token = common_vendor.index.getStorageSync("authorization");
      common_vendor.index.request({
        url: "http://localhost:8080/api/user/doctor",
        method: "POST",
        header: {
          "authorization": token
        },
        data: {
          page: 1,
          pageSize: 2,
          sicknessId: 2
        },
        success: (res) => {
          console.log(res.data);
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o((...args) => _ctx.getPhoneNumber && _ctx.getPhoneNumber(...args)),
        b: common_vendor.o(send1),
        c: common_vendor.o(send2),
        d: common_vendor.o(send3)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/chuangyue/front/chuangyue/pages/text/text.vue"]]);
wx.createPage(MiniProgramPage);
