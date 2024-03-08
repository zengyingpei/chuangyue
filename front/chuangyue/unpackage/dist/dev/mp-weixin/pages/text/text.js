"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.o((...args) => _ctx.send && _ctx.send(...args)),
    b: common_vendor.o((...args) => _ctx.getPhoneNumber && _ctx.getPhoneNumber(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/chuangyue/front/chuangyue/pages/text/text.vue"]]);
wx.createPage(MiniProgramPage);
