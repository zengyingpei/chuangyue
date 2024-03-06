"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      sorts: [
        { id: 1, description: "养生茶饮" },
        { id: 2, description: "养生茶饮" },
        { id: 3, description: "养生茶饮" },
        { id: 4, description: "养生茶饮" },
        { id: 5, description: "养生茶饮" }
      ],
      arr: [
        { id: 1, name: "胖大海罗汉果橘子茶", price: "100", photo: "../../static/logo.png" },
        { id: 2, name: "胖大海罗汉果橘子茶", price: "100", photo: "../../static/logo.png" },
        { id: 3, name: "胖大海罗汉果橘子茶", price: "100", photo: "../../static/logo.png" },
        { id: 4, name: "胖大海罗汉果橘子茶", price: "100", photo: "../../static/logo.png" },
        { id: 5, name: "胖大海罗汉果橘子茶", price: "100", photo: "../../static/logo.png" },
        { id: 6, name: "胖大海罗汉果橘子茶", price: "100", photo: "../../static/logo.png" }
      ]
    };
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.sorts, (item, index, i0) => {
      return {
        a: common_vendor.t(item.description),
        b: item.id
      };
    }),
    b: common_vendor.f($data.arr, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.price),
        c: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/chuangyue/front/chuangyue/pages/keep_medicine/keep_medicine.vue"]]);
wx.createPage(MiniProgramPage);
