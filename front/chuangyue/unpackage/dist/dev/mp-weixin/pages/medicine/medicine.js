"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      arr: [
        { id: 1, name: "黄连上清片", price: "100", photo: "../../static/logo.png" },
        { id: 2, name: "黄连上清片", price: "100", photo: "../../static/logo.png" },
        { id: 3, name: "黄连上清片", price: "100", photo: "../../static/logo.png" },
        { id: 4, name: "黄连上清片", price: "100", photo: "../../static/logo.png" },
        { id: 5, name: "黄连上清片", price: "100", photo: "../../static/logo.png" },
        { id: 6, name: "黄连上清片", price: "100", photo: "../../static/logo.png" },
        { id: 7, name: "黄连上清片", price: "100", photo: "../../static/logo.png" },
        { id: 8, name: "黄连上清片", price: "100", photo: "../../static/logo.png" },
        { id: 9, name: "黄连上清片", price: "100", photo: "../../static/logo.png" }
      ]
    };
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.arr, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.price),
        c: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/chuangyue/front/chuangyue/pages/medicine/medicine.vue"]]);
wx.createPage(MiniProgramPage);
